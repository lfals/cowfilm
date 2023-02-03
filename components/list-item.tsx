import Link from "next/link"

export function ListItem({ children, active, url }) {
  return (
    <>
      <Link href={url}>
        <li
          className={`flex h-12 items-center pl-10 ${
            active && "border-l-4 border-solid border-red-400"
          }`}
        >
          {children}
        </li>
      </Link>
    </>
  )
}
