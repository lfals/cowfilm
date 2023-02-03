import Link from "next/link"

import { SiteHeader } from "@/components/site-header"
import { SideMenu } from "./side-menu"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="grid grid-cols-[300px_1fr]">
        <div>
          <SideMenu />
        </div>
        <div>
          <SiteHeader />
          <main className="h-min overflow-y-auto">{children}</main>
          <div className="p-3 text-center">
            By using this website, you agree and accept our User Agreement,
            which can be read{" "}
            <Link className="text-blue-900 underline" href={"/terms"}>
              here
            </Link>
            .
          </div>
        </div>
      </div>
    </>
  )
}
