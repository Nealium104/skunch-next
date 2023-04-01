import '@/styles/globals.css'
import { Oswald } from '@next/font/google'

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${oswald.variable}`}>
      <Component {...pageProps} />
    </main>
    )
}
