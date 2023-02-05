import { useContext } from "react"
import { AuthContext } from "@/context/authContext"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "./theme-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"

export function SiteHeader() {
  const { user, signIn, logOut } = useContext(AuthContext)
  return (
    <header className="container sticky top-0 z-40 flex h-28  items-center justify-between  bg-white px-6  dark:bg-slate-900">
      {/* <Input className="max-w-md" placeholder="Search everything" /> */}
      <span></span>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        {/* <Notification />*/}
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src={user.photoURL} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => logOut()}>
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger>
              {/* <button>Login</button> */}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                className="rounded-md"
                onClick={() => signIn.twitterLogin()}
              >
                Twitter
              </DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </header>
  )
}
