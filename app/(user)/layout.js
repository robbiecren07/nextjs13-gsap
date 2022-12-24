import { Inter } from '@next/font/google'
import Header from '../../components/Header'
import './globals.css'

const inter = Inter({ variable: '--font-reg' })

export default function RootLayout({ children }) {
    
  return (
    <html lang="en" className={inter.variable}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
