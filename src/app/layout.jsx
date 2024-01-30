import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/header/page'
import Footer from './components/footer/page'
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SysAdminHelper v0.3',
  description: 'Генератор паролей | Транслитер',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru-RU">
      <body className={inter.className}>
        <Header />
          <main className='content'>
            {children}
          </main>
        <Footer />
      </body>
    </html>
  )
}
