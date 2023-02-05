import { createContext, useEffect, useState } from "react"
import { TwitterAuthProvider, User, signInWithPopup } from "firebase/auth"
import nookies, { destroyCookie, parseCookies, setCookie } from "nookies"

import { auth } from "@/config/firebase"

type Providers = {
  twitterLogin: () => void
}

type contextType = {
  user: User
  isAuthenticated: boolean
  signIn: Providers
  logOut: () => void
}

export const AuthContext = createContext({} as contextType)

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User>(null)

  const isAuthenticated = !!user

  useEffect(() => {
    const { "cowfilm:user": token } = parseCookies()
    setUser(JSON.parse(token) as any as User)
  }, [])

  function twitterLogin() {
    const provider = new TwitterAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user
        setUser(user)

        setCookie(null, "cowfilm:user", JSON.stringify(user), {
          maxAge: 30 * 24 * 60 * 60,
        })
      })
      .catch((error) => {
        console.log({ error })
      })
  }

  function logOut() {
    destroyCookie(null, "cowfilm:user")
    setUser(null)
  }

  const signIn = {
    twitterLogin,
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user, logOut }}>
      {children}
    </AuthContext.Provider>
  )
}
