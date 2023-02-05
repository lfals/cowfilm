/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import React, { useContext, useEffect, useReducer, useState } from "react"
import Head from "next/head"
import Link from "next/link"
import { AuthContext } from "@/context/authContext"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { doc, setDoc } from "firebase/firestore"
import { FaChevronLeft, FaChevronRight, FaEye, FaPlus } from "react-icons/fa"

import { Movie, ResponseData } from "@/types/movie-detail"
import { firestore } from "@/config/firebase"
import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const genres = [
  "Comedy",
  "Fantasy",
  "Crime",
  "Drama",
  "Music",
  "Adventure",
  "History",
  "Thriller",
  "Animation",
  "Family",
  "Mystery",
  "Biography",
  "Action",
  "Film-Noir",
  "Romance",
  "Sci-Fi",
  "War",
  "Western",
  "Horror",
  "Musical",
  "Sport",
]

const sortOptions = [
  "title",
  "year",
  "rating",
  "peers",
  "seeds",
  "download_count",
  "like_count",
  "date_added",
]

type filterType = {
  queryString: string
  genre: (typeof genres)[number]
  sort: (typeof sortOptions)[number]
  order_by: "desc" | "asc"
  page: number
}

function Page() {
  const { user } = useContext(AuthContext)
  const [filters, setFilter] = useReducer(
    (prev, next): filterType => {
      return { ...prev, ...next }
    },
    {
      queryString: "",
      genre: "",
      sort: "year",
      order_by: "desc",
      page: 1,
    }
  )

  const { data, isFetching, refetch } = useQuery({
    queryKey: ["getPartyMovie"],
    queryFn: getMovies,
    refetchOnWindowFocus: false,
    cacheTime: 500,
  })

  async function getMovies() {
    const url = new URL("https://yts.mx/api/v2/list_movies.json")

    url.searchParams.append("query_term", filters.queryString)
    url.searchParams.append("genre", filters.genre)
    url.searchParams.append("sort_by", filters.sort)
    url.searchParams.append("order_by", filters.order_by)
    url.searchParams.append("page", filters.page.toString())

    return axios.get(url.href).then((response) => {
      return response.data
    })
  }

  async function saveMovieToWatchList(movie: Movie, watched = false) {
    await setDoc(
      doc(firestore, "users", user.uid, "watchlist", String(movie.id)),
      {
        name: movie.title_english,
        id: movie.id,
        watched,
        cover: movie.large_cover_image,
      }
    )
  }

  const responseData: ResponseData = data

  const movies = responseData?.data.movies

  useEffect(() => {
    const timeout = setTimeout(() => {
      refetch()
    }, 500)
    return () => clearTimeout(timeout)
  }, [filters])

  const LoadingComponent = () => {
    return (
      <>
        {Array(12)
          .fill({})
          .map((_, id) => {
            return (
              <React.Fragment key={id}>
                <div className="a flex h-80 w-60 animate-pulse flex-col justify-between rounded-md bg-slate-300 p-6">
                  <div className="self-end">
                    {/* <Button>
                      <FaPlus />
                    </Button> */}
                  </div>
                  <div className="h-10 w-full bg-gradient-to-b ">
                    <h1 className="h-4 w-full animate-pulse rounded-md bg-slate-400 text-center"></h1>
                  </div>
                </div>
              </React.Fragment>
            )
          })}
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Cow Films</title>
        <meta
          name="description"
          content="Next.js template for building apps with Radix UI and Tailwind CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section className="container  grid gap-4">
          <div className="fixed flex w-full gap-3 bg-white py-4 dark:bg-slate-900">
            <Input
              className="max-w-md"
              placeholder="Search everything"
              onChange={(e) => {
                setFilter({ queryString: e.target.value, page: 1 })
              }}
            />
            <div className="flex gap-4">
              <Select
                onValueChange={(e) => {
                  setFilter({ genre: e })
                }}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Genres" />
                </SelectTrigger>
                <SelectContent>
                  {genres.map((genre, id) => {
                    return (
                      <SelectItem key={id} value={genre}>
                        {genre}
                      </SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
              <Select
                onValueChange={(e) => {
                  setFilter({ sort_by: e })
                }}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((sort, id) => {
                    return (
                      <SelectItem key={id} value={sort} className="capitalize">
                        {sort.replace("_", " ")}
                      </SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
              <Select
                onValueChange={(e) => {
                  setFilter({ order_by: e })
                }}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Order" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={"desc"} className="capitalize">
                    Descending
                  </SelectItem>
                  <SelectItem value={"asc"} className="capitalize">
                    Ascending
                  </SelectItem>
                </SelectContent>
              </Select>
              <div className="flex items-center gap-2 self-end">
                <Button
                  disabled={filters.page === 1}
                  variant="ghost"
                  onClick={() => {
                    setFilter({ page: filters.page - 1 })
                  }}
                >
                  <FaChevronLeft />
                </Button>
                <div>{filters.page}</div>
                <Button
                  disabled={filters.page === responseData}
                  variant="ghost"
                  onClick={() => {
                    setFilter({ page: filters.page + 1 })
                  }}
                >
                  <FaChevronRight />
                </Button>
              </div>
            </div>
          </div>
          <div className=" my-20 grid h-min grid-cols-5 gap-4 overflow-hidden">
            {isFetching ? (
              <LoadingComponent />
            ) : (
              <>
                {movies?.map((movie) => {
                  return (
                    <div
                      key={movie.id}
                      className=" flex h-80  w-60 flex-col justify-between rounded-md bg-cover capitalize "
                      style={{
                        backgroundImage: `url(${movie.large_cover_image})`,
                      }}
                    >
                      <div className="gap-2 self-end p-3">
                        {user && (
                          <>
                            <button
                              className="rounded-md p-3 hover:bg-black hover:bg-opacity-50"
                              onClick={() => saveMovieToWatchList(movie, true)}
                            >
                              <FaEye />
                            </button>
                            <button
                              className="rounded-md p-3 hover:bg-black hover:bg-opacity-50"
                              onClick={() => saveMovieToWatchList(movie)}
                            >
                              <FaPlus />
                            </button>
                          </>
                        )}
                      </div>
                      <Link
                        href={"/movie/" + movie.id}
                        className="flex h-full flex-col justify-end"
                      >
                        <div className=" flex h-20 w-full items-end justify-end bg-gradient-to-t  from-black  pb-4 ">
                          <h1 className="w-full  rounded-md  text-center ">
                            {movie.title_english}
                          </h1>
                        </div>
                      </Link>
                    </div>
                  )
                })}
              </>
            )}
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Page
