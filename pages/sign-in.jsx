import Head from "next/head"
import { SignIn } from "@clerk/nextjs"

export default function SignInPage() {
  return (
    <>
      <Head>
        <title>Sign In | Clerk OAuth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-center mt-12">
        <SignIn redirectUrl="/user-profile" />
      </div>
    </>
  )
}
