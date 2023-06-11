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
      <main className='flex flex-row overflow-x-scroll'>
        <div className='min-w-max'>
          <div className='flex'>
            <Image
              className="object-contain h-screen max-w-screen-sm border-8 border-white"
              src="/images/skunchFront.jpg"
              alt="Skunch in a sick pose"
              height={500}
              width={500}
            />
            <div className="flex flex-col w-screen max-w-screen-sm justify-center items-center">
              <div className='p-10 border-8 border-white bg-primary w-full flex'>
              <a className="mx-auto" href="https://www.linktr.ee/skunch">
                  <Image src='/images/logo.png' height={400} width={400} />
              </a>
              </div>
              <p className='p-10 text-xl border-8 border-white bg-black/75 text-white/75 whitespace-normal'>
                Skunch is a high-energy grunge/rock n roll band that will get your head banging with heavy guitar riffs and gritty vocals. Their raw and rebellious sound is sure to appeal to fans of classic and modern rock alike.
              </p>
            </div>
          </div>
        </div>
        <div className="min-w-max max-w-screen-sm">
          <iframe className="bg-[#282828] w-screen max-w-screen-sm place-self-center my-10 border-8 border-white h-1/2" src="https://open.spotify.com/embed/track/0s8wlLadanezwfSW5s4MgU?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          <div className='w-screen max-w-screen-sm text-3xl text-center py-5 bg-base-200 border-8 border-white'>
            <h3>Upcoming Shows:</h3>
            <ul>
              <li>Example</li>
              <li>Example</li>
              <li>Example</li>
              <li>Example</li>
              <li>Example</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}