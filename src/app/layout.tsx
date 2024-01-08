import type { Metadata } from 'next'
import '../index.css'
import '../../tailwind/variables.css'
import { Roboto_Condensed } from 'next/font/google'
import Provider from '../utils/Providers'

const roboto = Roboto_Condensed({
  subsets: ['latin-ext'],
  weight: '700',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Promarketing App',
  description: 'Promarketing Test App'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
