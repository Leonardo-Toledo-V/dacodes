import './globals.css'
import type { Metadata } from 'next'
import { poppins, PoppinsBold } from './fonts'
import { PageContextProvider } from '@/hooks/PageProvider'


export const metadata: Metadata = {
  title: 'Dacodes - Movies',
  description: 'Movies app by RustyDev for DaCodes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <PageContextProvider>
        <body className={`${poppins.variable} ${PoppinsBold.variable}`}>{children}</body>
      </PageContextProvider>
    </html>
  )
}
