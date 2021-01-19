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
<div className="mt-5 flex flex-col space-y-4 w-80 text-white text-base font-semibold">
<a styles="display:block" target="_blank" href="">
<div className="transition duration-500 ease-in-out hover:bg-red-800 transform hover:-translate-y-1 hover:scale-110 flex justify-center border-2 border-red-700 p-4">Website</div>
</a>
<a styles="display:block" target="_blank" href="">
<div className="transition duration-500 ease-in-out hover:bg-red-800 transform hover:-translate-y-1 hover:scale-110 flex justify-center border-2 border-red-700 p-4"><p className="line-through">Shop</p></div>
</a>
<a styles="display:block" target="_blank" href="https://www.instagram.com/unxtl.co/?hl=en">
<div className="transition duration-500 ease-in-out hover:bg-red-800 transform hover:-translate-y-1 hover:scale-110 flex justify-center border-2 border-red-700 p-4">Instagram</div>
</a>
<a styles="display:block" target="_blank" href="http://justinbieber.com">
<div className="transition duration-500 ease-in-out hover:bg-red-800 transform hover:-translate-y-1 hover:scale-110 flex justify-center border-2 border-red-700 p-4">Telegram</div>
</a>
<a styles="display:block" target="_blank" href="http://justinbieber.com">
<div className="transition duration-500 ease-in-out hover:bg-red-800 transform hover:-translate-y-1 hover:scale-110 flex justify-center border-2 border-red-700 p-4">Portofolio</div>
</a>

    </div>
<div className="flex items-center mt-24 lg:mt-80">
<div className="flex items-center text-sm text-gray-400 font-normal italic">
  <p>Made with</p> <img className="h-5 w-5 mx-1 animate-pulse bg-black opacity-75" src="like.png" alt=""/> by <a className="mx-1 transition duration-500 ease-in-out bg-black hover:text-red-700  transform hover:-translate-y-1 hover:scale-110" target="_blank" href="https://github.com/uxntl">UXNTL.co</a>
</div>

</div>
    </div>
  )
}