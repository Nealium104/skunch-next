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
      <Nav />
      <main>
        <div className='md:flex mx-auto items-center relative'>
          <div className='w-screen h-screen relative'>
            <Image
              className="static"
              src="/images/skunchFront.jpg"
              alt="Skunch in a sick pose"
              layout="fill"
              objectFit="cover"
            />
            <p className='absolute bottom-1 left-1/2 transform -translate-x-1/2 text-white text-lg w-3/4 max-w-xl p-6 md:bottom-1/4 bg-opacity-70 bg-black rounded-md'>
              Skunch is a high-energy grunge/rock n roll band that will get your head banging with heavy guitar riffs and gritty vocals. Their raw and rebellious sound is sure to appeal to fans of classic and modern rock alike.
            </p>
          </div>
          <div className="text-5xl text-primary absolute inset-0 flex items-start justify-center py-10">
            <div className='flex-col'>
              <h2>This is</h2>
              <div className='skew-y-12 -rotate-90 pt-20 mt-10'>
                <span className='tracking-widest text-8xl inset-0'>Skunch</span>
              </div>
            </div>
          </div>
        </div>
        <iframe className="bg-[#282828] w-3/4 py-5 my-5 mx-auto" src="https://open.spotify.com/embed/track/0s8wlLadanezwfSW5s4MgU?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </main>
      <Footer />
    </>
  )
}