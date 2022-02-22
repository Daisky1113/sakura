
import Head from 'next/head'
import Nav from './Nav'
const Layout = ({ title, children }) => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-700 text-sm font-mono">
      <Head>
        <title>{title}</title>
      </Head>

      <header>
        <Nav />
      </header>

      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>
    </div>
  )
}

export default Layout