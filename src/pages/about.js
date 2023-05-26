import Nav from "@/components/Nav"
import Footer from '../components/Footer'
import Image from 'next/image'

export default function About () {
    return (
        <>
         <main className=''>
          <div className='flex flex-col items-center'>
            <Nav/> 
          </div>
          <div class="pt-30 justify-items-center grid grid-cols-2 gap-1 place-content-center h-45 ... p-20">
            <Image
              className="px-10"
              src="/images/heroTest.jpg"
              alt="tester"
              height={350}
              width={600}
            /> 

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sapien libero, facilisis non ante vel, lobortis iaculis tortor. Aliquam pellentesque eu erat luctus dignissim. Mauris quam ipsum, pulvinar ut blandit eget, porttitor at lorem. Pellentesque porttitor a velit vel lobortis. Quisque euismod, nulla non pellentesque finibus, tellus massa mollis mauris, non commodo dolor massa ac lacus. Phasellus ultrices volutpat ipsum aliquet iaculis. Donec mauris sem, tincidunt a turpis in, pellentesque tincidunt neque.
         
         Sed cursus consequat nisi vel vehicula. Vivamus iaculis urna eget metus consectetur, eu blandit mi mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque eu sodales erat. Nulla tempor, urna vel finibus facilisis, risus purus venenatis velit, fringilla cursus felis enim at libero. Fusce placerat dolor gravida lacus rutrum efficitur. Aliquam erat volutpat. Suspendisse potenti. Vestibulum pellentesque lacinia urna eu vulputate. Fusce turpis mauris, pellentesque non pharetra a, interdum accumsan elit.
            </div>
            
           

         </main>
        </>
    )
}
