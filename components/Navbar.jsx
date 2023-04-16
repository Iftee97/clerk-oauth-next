import Image from "next/image"
import Link from "next/link"
import { useUser, useAuth } from "@clerk/nextjs"

export default function Navbar() {
  const { user } = useUser()
  const { signOut } = useAuth()

  return (
    <nav className='flex items-center justify-between px-24 py-6'>
      <Link href='/'>
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
      </Link>
      <div className='flex items-center gap-3'>
        <Link href='/user-profile' className="hover:text-blue-200">
          Profile
        </Link>
        {!user ? (
          <Link href='/sign-in' className="hover:text-blue-200">
            Sign In
          </Link>
        ) : (
          <div className="flex items-center gap-3">
            <span className="text-blue-500">
              {user?.fullName}
            </span>
            <span
              onClick={() => signOut()}
              className="text-red-500 hover:underline cursor-pointer"
            >
              Sign Out
            </span>
          </div>
        )}
      </div>
    </nav>
  )
}
