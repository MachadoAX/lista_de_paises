import './globals.css'
import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import Image from 'next/image'

const nunitoSans = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lista de paises',
  description: 'Uma lista de paises criada com next 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <main className='bg-slate-800 min-h-screen flex flex-col items-center text-center'>
          <nav className="w-full bg-white h-16 flex items-center justify-center"> 
            <section className="container flex items-center gap-3  justify-center ">
              <h1 className='font-bold flex text-2xl text-center'>Lista de países</h1>
            </section>
          </nav>
           {children}
        </main>
      </body>
    </html>
  )
}
