/* eslint-disable @next/next/no-img-element */
/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import Head from "next/head"

import { Layout } from "@/components/layout"
import Recomendation from "@/components/recomendation-section"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

const fakeParties = [
  {
    movie_name: "Spiderman",
    cover:
      "https://yts.mx/assets/images/movies/spider_man_all_roads_lead_to_no_way_home_2022/large-cover.jpg",
    genres: ["Ação", "Aventura", "Documentário", "Fantasia"],
    who_is: [
      {
        pp: "https://pbs.twimg.com/profile_images/1580935516555513857/Dj-aFDAh_400x400.jpg",
        username: "llfalss",
        name: "Luix Amorim",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1607122209083953153/t_QVOplR_400x400.jpg",
        username: "NiceCollors",
        name: "V i c t o r",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1439913725180489736/pCb1xlqK_400x400.jpg",
        username: "zVictor__RPD",
        name: "zVictor_RPD",
      },
    ],
  },
  {
    movie_name: "Spider-Man: All Roads Lead to No Way Home",
    cover:
      "https://yts.mx/assets/images/movies/spider_man_all_roads_lead_to_no_way_home_2022/large-cover.jpg",
    genres: ["Ação", "Aventura", "Documentário", "Fantasia"],
    who_is: [
      {
        pp: "https://pbs.twimg.com/profile_images/1580935516555513857/Dj-aFDAh_400x400.jpg",
        username: "llfalss",
        name: "Luix Amorim",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1607122209083953153/t_QVOplR_400x400.jpg",
        username: "NiceCollors",
        name: "V i c t o r",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1439913725180489736/pCb1xlqK_400x400.jpg",
        username: "zVictor__RPD",
        name: "zVictor_RPD",
      },
    ],
  },
  {
    movie_name: "Spiderman",
    cover:
      "https://yts.mx/assets/images/movies/spider_man_all_roads_lead_to_no_way_home_2022/large-cover.jpg",
    genres: ["Ação", "Aventura", "Documentário", "Fantasia"],
    who_is: [
      {
        pp: "https://pbs.twimg.com/profile_images/1580935516555513857/Dj-aFDAh_400x400.jpg",
        username: "llfalss",
        name: "Luix Amorim",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1607122209083953153/t_QVOplR_400x400.jpg",
        username: "NiceCollors",
        name: "V i c t o r",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1439913725180489736/pCb1xlqK_400x400.jpg",
        username: "zVictor__RPD",
        name: "zVictor_RPD",
      },
    ],
  },
  {
    movie_name: "Spiderman",
    cover:
      "https://yts.mx/assets/images/movies/spider_man_all_roads_lead_to_no_way_home_2022/large-cover.jpg",
    genres: ["Ação", "Aventura", "Documentário", "Fantasia"],
    who_is: [
      {
        pp: "https://pbs.twimg.com/profile_images/1580935516555513857/Dj-aFDAh_400x400.jpg",
        username: "llfalss",
        name: "Luix Amorim",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1607122209083953153/t_QVOplR_400x400.jpg",
        username: "NiceCollors",
        name: "V i c t o r",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1439913725180489736/pCb1xlqK_400x400.jpg",
        username: "zVictor__RPD",
        name: "zVictor_RPD",
      },
    ],
  },
  {
    movie_name: "Spiderman",
    cover:
      "https://yts.mx/assets/images/movies/spider_man_all_roads_lead_to_no_way_home_2022/large-cover.jpg",
    genres: ["Ação", "Aventura", "Documentário", "Fantasia"],
    who_is: [
      {
        pp: "https://pbs.twimg.com/profile_images/1580935516555513857/Dj-aFDAh_400x400.jpg",
        username: "llfalss",
        name: "Luix Amorim",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1607122209083953153/t_QVOplR_400x400.jpg",
        username: "NiceCollors",
        name: "V i c t o r",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1439913725180489736/pCb1xlqK_400x400.jpg",
        username: "zVictor__RPD",
        name: "zVictor_RPD",
      },
    ],
  },
  {
    movie_name: "Spiderman",
    cover:
      "https://yts.mx/assets/images/movies/spider_man_all_roads_lead_to_no_way_home_2022/large-cover.jpg",
    genres: ["Ação", "Aventura", "Documentário", "Fantasia"],
    who_is: [
      {
        pp: "https://pbs.twimg.com/profile_images/1580935516555513857/Dj-aFDAh_400x400.jpg",
        username: "llfalss",
        name: "Luix Amorim",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1607122209083953153/t_QVOplR_400x400.jpg",
        username: "NiceCollors",
        name: "V i c t o r",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1439913725180489736/pCb1xlqK_400x400.jpg",
        username: "zVictor__RPD",
        name: "zVictor_RPD",
      },
    ],
  },
  {
    movie_name: "Spider-Man: All Roads Lead to No Way Home",
    cover:
      "https://yts.mx/assets/images/movies/spider_man_all_roads_lead_to_no_way_home_2022/large-cover.jpg",
    genres: ["Ação", "Aventura", "Documentário", "Fantasia"],
    who_is: [
      {
        pp: "https://pbs.twimg.com/profile_images/1580935516555513857/Dj-aFDAh_400x400.jpg",
        username: "llfalss",
        name: "Luix Amorim",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1607122209083953153/t_QVOplR_400x400.jpg",
        username: "NiceCollors",
        name: "V i c t o r",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1439913725180489736/pCb1xlqK_400x400.jpg",
        username: "zVictor__RPD",
        name: "zVictor_RPD",
      },
    ],
  },
  {
    movie_name: "Spiderman",
    cover:
      "https://yts.mx/assets/images/movies/spider_man_all_roads_lead_to_no_way_home_2022/large-cover.jpg",
    genres: ["Ação", "Aventura", "Documentário", "Fantasia"],
    who_is: [
      {
        pp: "https://pbs.twimg.com/profile_images/1580935516555513857/Dj-aFDAh_400x400.jpg",
        username: "llfalss",
        name: "Luix Amorim",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1607122209083953153/t_QVOplR_400x400.jpg",
        username: "NiceCollors",
        name: "V i c t o r",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1439913725180489736/pCb1xlqK_400x400.jpg",
        username: "zVictor__RPD",
        name: "zVictor_RPD",
      },
    ],
  },
  {
    movie_name: "Spiderman",
    cover:
      "https://yts.mx/assets/images/movies/spider_man_all_roads_lead_to_no_way_home_2022/large-cover.jpg",
    genres: ["Ação", "Aventura", "Documentário", "Fantasia"],
    who_is: [
      {
        pp: "https://pbs.twimg.com/profile_images/1580935516555513857/Dj-aFDAh_400x400.jpg",
        username: "llfalss",
        name: "Luix Amorim",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1607122209083953153/t_QVOplR_400x400.jpg",
        username: "NiceCollors",
        name: "V i c t o r",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1439913725180489736/pCb1xlqK_400x400.jpg",
        username: "zVictor__RPD",
        name: "zVictor_RPD",
      },
    ],
  },
  {
    movie_name: "Spiderman",
    cover:
      "https://yts.mx/assets/images/movies/spider_man_all_roads_lead_to_no_way_home_2022/large-cover.jpg",
    genres: ["Ação", "Aventura", "Documentário", "Fantasia"],
    who_is: [
      {
        pp: "https://pbs.twimg.com/profile_images/1580935516555513857/Dj-aFDAh_400x400.jpg",
        username: "llfalss",
        name: "Luix Amorim",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1607122209083953153/t_QVOplR_400x400.jpg",
        username: "NiceCollors",
        name: "V i c t o r",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1439913725180489736/pCb1xlqK_400x400.jpg",
        username: "zVictor__RPD",
        name: "zVictor_RPD",
      },
    ],
  },
  {
    movie_name: "Spiderman",
    cover:
      "https://yts.mx/assets/images/movies/spider_man_all_roads_lead_to_no_way_home_2022/large-cover.jpg",
    genres: ["Ação", "Aventura", "Documentário", "Fantasia"],
    who_is: [
      {
        pp: "https://pbs.twimg.com/profile_images/1580935516555513857/Dj-aFDAh_400x400.jpg",
        username: "llfalss",
        name: "Luix Amorim",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1607122209083953153/t_QVOplR_400x400.jpg",
        username: "NiceCollors",
        name: "V i c t o r",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1439913725180489736/pCb1xlqK_400x400.jpg",
        username: "zVictor__RPD",
        name: "zVictor_RPD",
      },
    ],
  },
  {
    movie_name: "Spider-Man: All Roads Lead to No Way Home",
    cover:
      "https://yts.mx/assets/images/movies/spider_man_all_roads_lead_to_no_way_home_2022/large-cover.jpg",
    genres: ["Ação", "Aventura", "Documentário", "Fantasia"],
    who_is: [
      {
        pp: "https://pbs.twimg.com/profile_images/1580935516555513857/Dj-aFDAh_400x400.jpg",
        username: "llfalss",
        name: "Luix Amorim",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1607122209083953153/t_QVOplR_400x400.jpg",
        username: "NiceCollors",
        name: "V i c t o r",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1439913725180489736/pCb1xlqK_400x400.jpg",
        username: "zVictor__RPD",
        name: "zVictor_RPD",
      },
    ],
  },
  {
    movie_name: "Spiderman",
    cover:
      "https://yts.mx/assets/images/movies/spider_man_all_roads_lead_to_no_way_home_2022/large-cover.jpg",
    genres: ["Ação", "Aventura", "Documentário", "Fantasia"],
    who_is: [
      {
        pp: "https://pbs.twimg.com/profile_images/1580935516555513857/Dj-aFDAh_400x400.jpg",
        username: "llfalss",
        name: "Luix Amorim",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1607122209083953153/t_QVOplR_400x400.jpg",
        username: "NiceCollors",
        name: "V i c t o r",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1439913725180489736/pCb1xlqK_400x400.jpg",
        username: "zVictor__RPD",
        name: "zVictor_RPD",
      },
    ],
  },
  {
    movie_name: "Spiderman",
    cover:
      "https://yts.mx/assets/images/movies/spider_man_all_roads_lead_to_no_way_home_2022/large-cover.jpg",
    genres: ["Ação", "Aventura", "Documentário", "Fantasia"],
    who_is: [
      {
        pp: "https://pbs.twimg.com/profile_images/1580935516555513857/Dj-aFDAh_400x400.jpg",
        username: "llfalss",
        name: "Luix Amorim",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1607122209083953153/t_QVOplR_400x400.jpg",
        username: "NiceCollors",
        name: "V i c t o r",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1439913725180489736/pCb1xlqK_400x400.jpg",
        username: "zVictor__RPD",
        name: "zVictor_RPD",
      },
    ],
  },
  {
    movie_name: "Spiderman",
    cover:
      "https://yts.mx/assets/images/movies/spider_man_all_roads_lead_to_no_way_home_2022/large-cover.jpg",
    genres: ["Ação", "Aventura", "Documentário", "Fantasia"],
    who_is: [
      {
        pp: "https://pbs.twimg.com/profile_images/1580935516555513857/Dj-aFDAh_400x400.jpg",
        username: "llfalss",
        name: "Luix Amorim",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1607122209083953153/t_QVOplR_400x400.jpg",
        username: "NiceCollors",
        name: "V i c t o r",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1439913725180489736/pCb1xlqK_400x400.jpg",
        username: "zVictor__RPD",
        name: "zVictor_RPD",
      },
    ],
  },
  {
    movie_name: "Spiderman",
    cover:
      "https://yts.mx/assets/images/movies/spider_man_all_roads_lead_to_no_way_home_2022/large-cover.jpg",
    genres: ["Ação", "Aventura", "Documentário", "Fantasia"],
    who_is: [
      {
        pp: "https://pbs.twimg.com/profile_images/1580935516555513857/Dj-aFDAh_400x400.jpg",
        username: "llfalss",
        name: "Luix Amorim",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1607122209083953153/t_QVOplR_400x400.jpg",
        username: "NiceCollors",
        name: "V i c t o r",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1439913725180489736/pCb1xlqK_400x400.jpg",
        username: "zVictor__RPD",
        name: "zVictor_RPD",
      },
    ],
  },
  {
    movie_name: "Spider-Man: All Roads Lead to No Way Home",
    cover:
      "https://yts.mx/assets/images/movies/spider_man_all_roads_lead_to_no_way_home_2022/large-cover.jpg",
    genres: ["Ação", "Aventura", "Documentário", "Fantasia"],
    who_is: [
      {
        pp: "https://pbs.twimg.com/profile_images/1580935516555513857/Dj-aFDAh_400x400.jpg",
        username: "llfalss",
        name: "Luix Amorim",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1607122209083953153/t_QVOplR_400x400.jpg",
        username: "NiceCollors",
        name: "V i c t o r",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1439913725180489736/pCb1xlqK_400x400.jpg",
        username: "zVictor__RPD",
        name: "zVictor_RPD",
      },
    ],
  },
  {
    movie_name: "Spiderman",
    cover:
      "https://yts.mx/assets/images/movies/spider_man_all_roads_lead_to_no_way_home_2022/large-cover.jpg",
    genres: ["Ação", "Aventura", "Documentário", "Fantasia"],
    who_is: [
      {
        pp: "https://pbs.twimg.com/profile_images/1580935516555513857/Dj-aFDAh_400x400.jpg",
        username: "llfalss",
        name: "Luix Amorim",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1607122209083953153/t_QVOplR_400x400.jpg",
        username: "NiceCollors",
        name: "V i c t o r",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1439913725180489736/pCb1xlqK_400x400.jpg",
        username: "zVictor__RPD",
        name: "zVictor_RPD",
      },
    ],
  },
  {
    movie_name: "Spiderman",
    cover:
      "https://yts.mx/assets/images/movies/spider_man_all_roads_lead_to_no_way_home_2022/large-cover.jpg",
    genres: ["Ação", "Aventura", "Documentário", "Fantasia"],
    who_is: [
      {
        pp: "https://pbs.twimg.com/profile_images/1580935516555513857/Dj-aFDAh_400x400.jpg",
        username: "llfalss",
        name: "Luix Amorim",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1607122209083953153/t_QVOplR_400x400.jpg",
        username: "NiceCollors",
        name: "V i c t o r",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1439913725180489736/pCb1xlqK_400x400.jpg",
        username: "zVictor__RPD",
        name: "zVictor_RPD",
      },
    ],
  },
  {
    movie_name: "Spiderman",
    cover:
      "https://yts.mx/assets/images/movies/spider_man_all_roads_lead_to_no_way_home_2022/large-cover.jpg",
    genres: ["Ação", "Aventura", "Documentário", "Fantasia"],
    who_is: [
      {
        pp: "https://pbs.twimg.com/profile_images/1580935516555513857/Dj-aFDAh_400x400.jpg",
        username: "llfalss",
        name: "Luix Amorim",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1607122209083953153/t_QVOplR_400x400.jpg",
        username: "NiceCollors",
        name: "V i c t o r",
      },
      {
        pp: "https://pbs.twimg.com/profile_images/1439913725180489736/pCb1xlqK_400x400.jpg",
        username: "zVictor__RPD",
        name: "zVictor_RPD",
      },
    ],
  },
]

export default function IndexPage() {
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
      <Recomendation />
      <section className="container grid items-center gap-6 pt-2 pb-8 ">
        <h1 className="text-3xl">Parties</h1>
        <div className="flex w-full touch-pan-x snap-x gap-4 overflow-x-auto pb-4">
          {fakeParties.map((partie) => {
            return (
              <div className="h-52 w-80 snap-start scroll-ml-6 rounded-2xl bg-slate-400 p-6">
                <div className="flex justify-between">
                  <img
                    className="h-20 w-16 rounded-2xl bg-cover"
                    src={partie.cover}
                    alt={partie.movie_name}
                  />
                  <div className="flex">
                    {partie.who_is.map((user) => {
                      return (
                        <Avatar className="-ml-3 h-7 w-7">
                          <AvatarImage src={user.pp} />
                        </Avatar>
                      )
                    })}
                  </div>
                </div>
                <div>
                  <h1 className="text-md mt-2 w-full overflow-hidden text-ellipsis whitespace-nowrap  break-keep">
                    {partie.movie_name}
                  </h1>
                  <div className="mt-2 flex gap-2 text-xs">
                    {partie.genres.map((genre) => {
                      return <p> {genre}</p>
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: "/browse",
      permanent: false,
    },
  }
}
