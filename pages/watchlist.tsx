import { useContext, useEffect, useState } from "react"
import Head from "next/head"
import Link from "next/link"
import { AuthContext } from "@/context/authContext"
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore"
import { FaEye, FaPlus } from "react-icons/fa"

import { firestore } from "@/config/firebase"
import { Layout } from "@/components/layout"

export default function IndexPage() {
  const { user } = useContext(AuthContext)

  const [movies, setMovies] = useState([])

  async function getMoviesOnWatchList() {
    const q = query(collection(firestore, "users", user.uid, "watchlist"))

    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setMovies((old) => [...old, doc.data()])
    })
  }

  useEffect(() => {
    if (!user) {
      return
    }
    getMoviesOnWatchList()
  }, [user])

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
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className=" my-20 grid h-min grid-cols-5 gap-4 overflow-hidden">
          {movies?.map((movie) => {
            return (
              <div
                key={movie.id}
                className={` flex h-80  w-60 flex-col justify-between rounded-md bg-cover capitalize ${
                  movie.watched && "opacity-30"
                }`}
                style={{
                  backgroundImage: `url(${movie.cover})`,
                }}
              >
                <div className="self-end p-3">
                  {movie.watched && (
                    <button className="rounded-md p-3 hover:bg-black hover:bg-opacity-50">
                      <FaEye />
                    </button>
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
        </div>
      </section>
    </Layout>
  )
}
