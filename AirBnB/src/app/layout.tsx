import NavBar from './components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Air BnB',
  description: 'An Air bnb clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body> <NavBar />{children}</body>
    </html>
  )
}
