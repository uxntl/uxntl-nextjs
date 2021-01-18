import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container mx-auto px-4 mt-4">
      <Head>
        <title>UXNTL.co Official Webpage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<div className="animate-pulse rounded-full h-24 w-24 flex items-center justify-center border-4 border-red-900">
  <img src="/logo.png" alt=""/>
</div>
<div className="mt-2 text-xl text-white font-bold">
  <p>UXNTL.co</p>
  <p className="text-sm text-white font-normal italic">Graphic Design</p>
</div>
<div className="mt-5 w-80 flex flex-col gap-4 text-white text-base font-semibold">
<a styles="display:block" href="http://justinbieber.com">
<div className="transition duration-500 ease-in-out hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 flex py-4 justify-center border-2 border-red-700">Website</div>
</a>
<a styles="display:block" href="http://justinbieber.com">
<div className="transition duration-500 ease-in-out hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 flex py-4 justify-center border-2 border-red-700">Shop</div>
</a>
<a styles="display:block" href="http://justinbieber.com">
<div className="transition duration-500 ease-in-out hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 flex py-4 justify-center border-2 border-red-700">Whatsapp</div>
</a>
<a styles="display:block" href="http://justinbieber.com">
<div className="transition duration-500 ease-in-out hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 flex py-4 justify-center border-2 border-red-700">Telegram</div>
</a>
<a styles="display:block" href="http://justinbieber.com">
<div className="transition duration-500 ease-in-out hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 flex py-4 justify-center border-2 border-red-700">Portofolio</div>
</a>

    </div>
    </div>
  )
}
