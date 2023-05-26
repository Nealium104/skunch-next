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
        
        <Nav/>
        
        <div className='opacity-70'>
          
          <Image
              className="object-contain w-screen md:w-full md:col-span-2 border-8 border-white "
              src="/images/heroTest.jpg"
              alt="Brush"
              height={1600}
              width={1600}
            />
          </div>

            
          
          <p className='py-10 text-xl text-black/75 w-9/12 indent-20 text-center'>
                
                Skunch is a high-energy grunge/rock n roll band that will get your head banging with heavy guitar riffs and gritty vocals. Their raw and rebellious sound is sure to appeal to fans of classic and modern rock alike.      
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sapien libero, facilisis non ante vel, lobortis iaculis tortor. Aliquam pellentesque eu erat luctus dignissim. Mauris quam ipsum, pulvinar ut blandit eget, porttitor at lorem. Pellentesque porttitor a velit vel lobortis. Quisque euismod, nulla non pellentesque finibus, tellus massa mollis mauris, non commodo dolor massa ac lacus. Phasellus ultrices volutpat ipsum aliquet iaculis. Donec mauris sem, tincidunt a turpis in, pellentesque tincidunt neque.
         
                Sed cursus consequat nisi vel vehicula. Vivamus iaculis urna eget metus consectetur, eu blandit mi mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque eu sodales erat. Nulla tempor, urna vel finibus facilisis, risus purus venenatis velit, fringilla cursus felis enim at libero. Fusce placerat dolor gravida lacus rutrum efficitur. Aliquam erat volutpat. Suspendisse potenti. Vestibulum pellentesque lacinia urna eu vulputate. Fusce turpis mauris, pellentesque non pharetra a, interdum accumsan elit.
              
              </p>

            </div>
            
        

        <div className="flex flex-col">

          <iframe className="bg-[#282828] w-3/4 md:w-1/3 place-self-center my-10" src="https://open.spotify.com/embed/track/0s8wlLadanezwfSW5s4MgU?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        
        </div>

      </main>

      <Footer />
    </>
  )
}