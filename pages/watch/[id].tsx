/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import { useEffect } from "react"
import dynamic from "next/dynamic"
import Head from "next/head"
import { useRouter } from "next/router"

import { Layout } from "@/components/layout"

const VideoPlayer = dynamic(() => import("../../components/video-player"), {
  ssr: false,
})

export default function IndexPage() {
  const router = useRouter()
  const { id, name } = router.query

  useEffect(() => {}, [router])

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
      <section id="player-section" className="container w-full">
        <div>
          {typeof id === "string" && typeof name === "string" && (
            <VideoPlayer hash={id} name={name} />
          )}
        </div>
      </section>
    </Layout>
  )
}
