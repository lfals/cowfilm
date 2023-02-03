import FriendListItem from "./friend-list-item"

const fakeUsers = [
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
]

const FriendsList = () => {
  return (
    <section className="mb-4 flex flex-col">
      <h1 className="mb-4 pl-10 font-bold">Following</h1>
      <ul>
        {fakeUsers.map((user) => {
          return <FriendListItem data={user} />
        })}
      </ul>
    </section>
  )
}

export default FriendsList
