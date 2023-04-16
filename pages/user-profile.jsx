import Head from "next/head"
import { ClerkLoading, ClerkLoaded, UserProfile } from "@clerk/nextjs"
import { getAuth, buildClerkProps } from "@clerk/nextjs/server"

export default function UserProfilePage() {
  return (
    <>
      <Head>
        <title>User Profile | Clerk OAuth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ClerkLoading>
        <p className="text-center text-lg text-white">
          loading...
        </p>
      </ClerkLoading>
      <ClerkLoaded>
        <div className="mx-auto flex items-center justify-center">
          <UserProfile />
        </div>
      </ClerkLoaded>
    </>
  )
}

export async function getServerSideProps(context) {
  const { userId } = getAuth(context.req)

  if (!userId) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    }
  }

  return {
    props: {
      ...buildClerkProps(context.req)
    }
  }
}
