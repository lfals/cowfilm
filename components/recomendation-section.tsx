/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { FaImdb, FaStar } from "react-icons/fa"

import { ResponseData } from "@/types/movie-detail"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

function Recomendation() {
  const { data }: { data: ResponseData } = useQuery({
    queryKey: ["getPartyMovie"],
    queryFn: getPartyMovie,
  })

  function convertMinutesToHours(minutes) {
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    const treatedMinutes =
      remainingMinutes < 10 ? "0" + remainingMinutes : remainingMinutes
    return "0" + hours + "h " + treatedMinutes + "min"
  }

  async function getPartyMovie() {
    return axios
      .get("https://yts.mx/api/v2/movie_details.json/?movie_id=46063")
      .then((response) => {
        return response.data
      })
  }

  return (
    <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
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
        <div className="flex h-[550px] flex-col justify-between  bg-black bg-opacity-60 p-14">
          <div className="flex gap-6">
            <div>
              <img
                src={data?.data.movie.large_cover_image}
                className={"w-56"}
              />
            </div>
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
            </div>
          </div>
          <div className="flex items-center justify-start gap-9 text-white">
            <Button size="xl" variant="red">
              Watch
            </Button>
            <div>
              <p>Friends watched</p>
              <div className="flex">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="-ml-4">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="-ml-4">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Recomendation
