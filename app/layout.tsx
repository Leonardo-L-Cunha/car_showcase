import { Footer, NavBar } from '@/components'
import './globals.css'


export const metadata = {
  title: 'Car Hub',
  description: 'Descruba os melhores carros do mundo.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
