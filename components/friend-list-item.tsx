import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"

type FiendListType = {
  name: string
  pp: string
  username: string
}

function FriendListItem({ data }: { data: FiendListType }) {
  return (
    <li className="mt-4 flex h-12 items-center gap-4  pl-12">
      <Avatar>
        <AvatarImage
          className="w-8 rounded-full border border-solid "
          src={data.pp}
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <h1>{data.username}</h1>
        <p className="text-xs">{data.name}</p>
      </div>
    </li>
  )
}

export default FriendListItem
