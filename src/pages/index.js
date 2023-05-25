import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>🎸Skunch</title>
        <meta name="description" content="Skunch's Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <main className=''>
        <div className='flex flex-col items-center'>
        <Nav />
        <div className=''><Image
              className="object-contain w-screen md:w-full md:col-span-2 border-8 border-white opacity-50 max-w-screen-xl"
              src="/images/heroTest.jpg"
              alt="Brush"
              height={1600}
              width={1600}
            />
            </div>

          <div className='md:flex w-3/5'>
          <p className='py-40 text-xl border-8 border-white text-black/75'>
                <center>Skunch is a high-energy grunge/rock n roll band that will get your head banging with heavy guitar riffs and gritty vocals. Their raw and rebellious sound is sure to appeal to fans of classic and modern rock alike. wsdfsdfsdf
              </center>
              </p>
              </div>
            <div className="md:w-1/2 flex flex-col items-center">
              <div className='border-8 border-white'>
                  <Image src='/images/logo.png' height={150} width={150} />
              </div>
              
            </div>
          </div>
        

        <div className="flex flex-col justify-between text-center ">

          <iframe className="bg-[#282828] w-3/4 md:w-1/3 place-self-center my-10" src="https://open.spotify.com/embed/track/0s8wlLadanezwfSW5s4MgU?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

          <div className='md:w-1/3 text-xl py-5 border-8 border-white'>
            <h3>Upcoming Shows:</h3>
            <li>
              <ul>Example. sdfsdfsdf</ul>
              <ul>Example.</ul>
              <ul>Example.</ul>
              <ul>Example.</ul>
              <ul>Example.</ul>
            </li>
          </div>
          
        <p className='bg-neutral/25 md:w-1/3 text-xl p-10 border-8 border-white'>Here's some placeholder text - Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt veritatis in accusantium, veniam sint architecto quod? Voluptatibus omnis doloremque quidem quibusdam. Doloribus eveniet quasi unde omnis neque saepe, consectetur dicta?</p>
        </div>
      </main>

      <Footer />
    </>
  )
}