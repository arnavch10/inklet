import { Space_Grotesk } from "next/font/google"
import Link from "next/link"
const space = Space_Grotesk({
  subsets: ["latin"],
})


export default function Navbar() {
  return (

      <nav className="fixed top-10 left-0 w-full flex justify-center">
        <div className="flex items-center justify-between gap-6 rounded-full bg-white/70 backdrop-blur-md shadow-lg shadow-black border-2 px-6 py-3">
          <p className={`${space.className} font-bold text-xl`}>Inklet</p>

          <div className="rounded-full bg-gray-700 px-4 py-1">
            <Link className={`${space.className} font-medium text-sm text-white`} href="/login">Login</Link>
          </div>

        </div>

      </nav>
  )
}
