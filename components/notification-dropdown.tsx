import { FaBell } from "react-icons/fa"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Notification() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className=" flex h-9 items-center justify-center rounded-md bg-transparent px-2 hover:bg-slate-100  data-[state=open]:bg-transparent dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:data-[state=open]:bg-transparent">
            <FaBell className="" />
            <span className="sr-only">Notification</span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <div className="h-16">
              <h1>teste</h1>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
