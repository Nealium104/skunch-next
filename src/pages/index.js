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
        <div className='md:flex mx-auto items-center'>
          <div className='flex items-center'>
            <Image
              className="mx-10"
              src="/images/skunchFrontReduced.jpg"
              alt="Skunch in a sick pose"
              height={500}
              width={500}
            />
            <div className="text-5xl text-primary">
            <div className='flex-col items-center justify-center'>
              <h2>This is</h2>
              <div className=''>
                <Image src='/images/logo.png' height={400} width={400} />
              </div>
              </div>
                <p className='text-white text-lg w-1/2 h-20 bg-opacity-70 bg-black rounded-md'>
                  Skunch is a high-energy grunge/rock n roll band that will get your head banging with heavy guitar riffs and gritty vocals. Their raw and rebellious sound is sure to appeal to fans of classic and modern rock alike.
                </p>
              </div>
            </div>
            </div>
        <div className="flex flex-col justify-between text-center md:flex-row">
          <iframe className="bg-[#282828] md:w-1/3 md:h-1/2 py-5 my-5 mx-auto" src="https://open.spotify.com/embed/track/0s8wlLadanezwfSW5s4MgU?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          <div className='md:w-1/3 text-xl py-5'>
            <h3>Upcoming Shows:</h3>
            <li>
              <ul>Example</ul>
              <ul>Example</ul>
              <ul>Example</ul>
              <ul>Example</ul>
              <ul>Example</ul>
            </li>
          </div>
        <p className='bg-neutral/25 md:w-1/3 text-xl py-5'>Here's some placeholder text - Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt veritatis in accusantium, veniam sint architecto quod? Voluptatibus omnis doloremque quidem quibusdam. Doloribus eveniet quasi unde omnis neque saepe, consectetur dicta?</p>
        </div>
      </main>
      <Footer />
    </>
  )
}