/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import React, { useEffect } from "react"
import Head from "next/head"
import Link from "next/link"
import Router, { useRouter } from "next/router"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { FaImdb, FaPlus, FaStar } from "react-icons/fa"

import { ResponseData } from "@/types/movie-detail"
import { Layout } from "@/components/layout"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function IndexPage() {
  const router = useRouter()
  const { id } = router.query

  const { data: responseData, refetch } = useQuery({
    queryKey: ["getMoviesDetail"],
    queryFn: getMoviesDetail,
    refetchOnWindowFocus: false,
    cacheTime: 500,
  })

  const { data: sugestionResponseData, refetch: refetchSugestion } = useQuery({
    queryKey: ["getMovieSuggestions"],
    queryFn: getMovieSuggestions,
    refetchOnWindowFocus: false,
    cacheTime: 500,
  })
  const data: ResponseData = responseData
  const sugestionData: ResponseData = sugestionResponseData

  async function getMoviesDetail() {
    if (id === undefined) {
      return
    }

    if (typeof id === "object") {
      return
    }
    const url = new URL("https://yts.mx/api/v2/movie_details.json")
    url.searchParams.append("movie_id", id)

    return axios.get(url.href).then((response) => {
      return response.data
    })
  }

  async function getMovieSuggestions() {
    if (id === undefined) {
      return
    }

    if (typeof id === "object") {
      return
    }
    const url = new URL("https://yts.mx/api/v2/movie_suggestions.json")
    url.searchParams.append("movie_id", id)

    return axios.get(url.href).then((response) => {
      return response.data
    })
  }

  function convertMinutesToHours(minutes) {
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    const treatedMinutes =
      remainingMinutes < 10 ? "0" + remainingMinutes : remainingMinutes
    return "0" + hours + "h " + treatedMinutes + "min"
  }

  useEffect(() => {
    refetch()
  }, [router])

  return (
    <Layout>
      <Head>
        <title>Cow Films</title>
        <meta
          name="description"
          content="Next.js template for building apps with Radix UI and Tailwind CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container grid h-full items-center gap-6 pt-6 pb-8 md:py-10">
        <div
          className={
            data
              ? "w-full overflow-hidden rounded-2xl bg-cover"
              : "w-full animate-pulse overflow-hidden rounded-2xl bg-slate-400"
          }
          style={{
            backgroundImage: `url(${data?.data.movie.background_image_original})`,
          }}
        >
          <div className="h flex flex-col justify-between  bg-black bg-opacity-60 p-14">
            <div className="grid grid-cols-[300px_1fr] gap-6">
              <img
                src={data?.data.movie.large_cover_image}
                className={"w-56"}
              />
              <div>
                <div>
                  <h1 className="text-5xl font-bold text-white">
                    {data?.data.movie.title_english}
                  </h1>
                  <p className="text-3xl font-thin text-white">
                    {data?.data.movie.title_long}
                  </p>
                </div>
                <div className="mt-4 flex gap-4 text-white">
                  <p>{convertMinutesToHours(data?.data.movie.runtime)}</p>
                </div>
                <div className="mt-4 flex gap-4">
                  <div className="flex gap-2 text-white">
                    <FaImdb className="h-6 w-6 fill-yellow-300" />
                    <p>{data?.data.movie.rating}</p>
                  </div>
                  <div className="flex gap-2 text-white">
                    <FaStar className="h-6 w-6 fill-yellow-300" />
                    <p>{data?.data.movie.like_count}</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-2 text-white">
                  {data?.data.movie.genres.map((genre) => {
                    return (
                      <>
                        <p>{genre}</p>
                        <Separator orientation="vertical" />
                      </>
                    )
                  })}
                </div>
                <div className="mt-2 w-4/5 text-white">
                  <p>{data?.data.movie.description_full}</p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-start gap-9 text-white">
              {data?.data.movie.yt_trailer_code && (
                <Link
                  href={
                    "https://www.youtube.com/watch?v=" +
                    data?.data.movie.yt_trailer_code
                  }
                >
                  <Button size="xl" variant="red">
                    Watch trailer
                  </Button>
                </Link>
              )}
              {data?.data.movie.torrents.map((torrent) => {
                return (
                  <Link
                    href={
                      "/watch/" +
                      torrent.hash +
                      "?name=" +
                      data.data.movie.title
                    }
                  >
                    <div className="rounded-md bg-red-500 py-2 px-4 text-center">
                      <p>Watch {torrent.quality}</p>
                      <p> {torrent.type}</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          {sugestionData?.data?.movies.map((movie) => {
            return (
              <Link
                href={"/movie/" + movie.id}
                className=" flex h-80  w-60 flex-col justify-between rounded-md bg-cover capitalize "
                style={{
                  backgroundImage: `url(${movie.medium_cover_image})`,
                }}
              >
                <div className="self-end p-3">
                  <button className="rounded-md p-3 hover:bg-black hover:bg-opacity-50">
                    <FaPlus />
                  </button>
                </div>
                <div className=" flex h-20 w-full items-end justify-end bg-gradient-to-t  from-black  pb-4 ">
                  <h1 className="w-full  rounded-md  text-center">
                    {movie.title_english}
                  </h1>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}
