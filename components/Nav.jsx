import Link from 'next/link'
const Nav = () => {
  return (
    <nav className="bg-pink-200 w-screen">
      <div className="flex items-center pl-8 h-14">
        <div className="flex space-x-4">
          <Link href="/">
            <a className="text-gray-700">Top</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-700">About</a>
          </Link>
          <Link href="/upload">
            <a className="text-gray-700">Upload</a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav