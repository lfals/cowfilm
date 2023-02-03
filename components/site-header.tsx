import { Notification } from "./notification-dropdown"
import { ProfileIcon } from "./profile-icon"
import { ThemeToggle } from "./theme-toggle"
import { Input } from "./ui/input"

export function SiteHeader() {
  return (
    <header className="container sticky top-0 z-40 flex h-28  items-center justify-between  bg-white px-6  dark:bg-slate-900">
      {/* <Input className="max-w-md" placeholder="Search everything" /> */}
      <span></span>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        {/* <Notification />
        <ProfileIcon /> */}
      </div>
    </header>
  )
}
