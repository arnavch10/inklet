import { Space_Grotesk } from "next/font/google"
import Link from "next/link"
const space = Space_Grotesk({
  subsets: ["latin"],
})


export default function Navbar() {
  return (

      <nav className="fixed top-10 left-0 w-full flex justify-center">
        <div className="flex items-center justify-between gap-6 rounded-full bg-white/70 backdrop-blur-md shadow-lg shadow-black/40 border border-black/10 px-6 py-3">
          <Link className={`${space.className} font-bold text-xl`} href="/">Inklet</Link>

          {/* Make one div for the buttons later*/}

          <div className="rounded-full bg-gray-700 px-4 py-1 hover:bg-blue-300 hover:scale-110 transition-all duration-300 ease-in-out">
            <Link className={`${space.className} font-medium text-sm text-white `} href="/about">About</Link>
          </div>



          <div className="rounded-full bg-gray-700 px-4 py-1 hover:bg-blue-300 hover:scale-110 transition-all duration-300 ease-in-out">
            <Link className={`${space.className} font-medium text-sm text-white`} href="/login">Login</Link>
          </div>

          
          <div className="rounded-full bg-gray-700 px-4 py-1 hover:bg-blue-300 hover:scale-110 transition-all duration-300 ease-in-out">
            <Link className={`${space.className} font-medium text-sm text-white `} href="/signup">Sign Up</Link>
          </div>

          <div className="rounded-full bg-gray-700 px-4 py-1 hover:bg-blue-300 hover:scale-110 transition-all duration-300 ease-in-out">
            <Link className={`${space.className} font-medium text-sm text-white `} href="/canvas">Canvas</Link>
          </div>
          


        </div>

      </nav>
  )
}
