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
        <h1 className='text-4xl text-center py-5'>This is Skunch</h1>
        <div className='md:flex items-center mx-5'>
          <Image
          className="mx-auto"
          src="/images/skunchFront.jpg"
          alt="Skunch in a sick pose"
          width={400}
          height={600} />
          <p className='m-5'>Skunch is a high-energy grunge/rock n roll band that will get your head banging with heavy guitar riffs and gritty vocals. Their raw and rebellious sound is sure to appeal to fans of classic and modern rock alike.</p>
        </div>
        <iframe className="bg-[#282828] w-3/4 mx-auto" src="https://open.spotify.com/embed/track/0s8wlLadanezwfSW5s4MgU?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </main>
      <Footer />
    </>
  )
}
