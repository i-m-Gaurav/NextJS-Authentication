import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white dark:bg-gray-800">
      {/* Navigation Bar */}
      <nav className="w-full bg-purple-600 dark:bg-purple-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/profile">
            <div className="text-white font-bold text-lg">My Website</div>
          </Link>
          <button className="px-4 py-2 bg-white text-purple-600 dark:text-purple-200 rounded-md">
            Profile
          </button>
        </div>
      </nav>

      {/* Beautiful Message */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-purple-600 dark:text-purple-300">
          Welcome to My Beautiful Website!
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Enjoy your stay and explore the amazing content we have to offer.
        </p>
      </div>

      {/* Rest of the content */}
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {/* ... */}
      </div>

      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        {/* ... */}
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        {/* ... */}
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        {/* ... */}
      </div>
    </main>
  )
}
