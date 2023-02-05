import { useContext, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

import FriendsList from "./friend-list"
import { Icons } from "./icons"
import { AuthContext } from "@/context/authContext"

export function SideMenu() {
  const { user } = useContext(AuthContext)
  const router = useRouter()

  function checkUrl(url) {
    return router.pathname === url
  }

  return (
    <div className="sticky top-0 h-screen border-r border-slate-600">
      <div className="mx-auto flex h-28 w-max flex-col justify-center">
        <div className="flex gap-3 text-xl font-bold">
          <div>
            <Icons.logo className="w-6 dark:fill-white" />
          </div>
          <h1>Cow Film</h1>
        </div>
      </div>
      <div>
        <section className="mb-4 flex flex-col">
          {/* <h1 className="mb-4 pl-10 font-bold">For you</h1> */}
          <ul className="flex flex-col ">
            {/* <li>
              <Link
                className={`flex h-12 items-center border-l-4  pl-12 ${
                  checkUrl("/") ? " border-red-400" : "border-transparent"
                }`}
                href={"/"}
              >
                Home
              </Link>
            </li> */}
            <li>
              <Link
                className={`flex h-12 items-center border-l-4  pl-12 ${
                  checkUrl("/browse") ? " border-red-400" : "border-transparent"
                }`}
                href={"/browse"}
              >
                Browse
              </Link>
            </li>
            {user && (
              <li
                className={`flex h-12 items-center border-l-4  pl-12 ${
                  checkUrl("/watchlist")
                    ? " border-red-400"
                    : "border-transparent"
                }`}
              >
                <Link href={"/watchlist"}>Watchlist</Link>
              </li>
            )}

            {/* <li
              className={`flex h-12 items-center border-l-4  pl-12 ${
                checkUrl("/Coming Soon")
                  ? " border-red-400"
                  : "border-transparent"
              }`}
            >
              <Link href={"/coming-soon"}>Coming Soon</Link>
            </li> */}
          </ul>
        </section>
        {/* <FriendsList /> */}
      </div>
    </div>
  )
}
