import './globals.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { orbitron } from '../fonts'

export const metadata = {
    title: {
        default: 'Indie Gamer',
        template:  `%s | Indie Gamer`,
    },
    description: {
        default: 'The best indie games',
    },
}

export default function RootLayout({children}){
    return(
        <html lang="en" className={orbitron.variable}>
            <body className='bg-orange-50 px-4 py-2 flex flex-col min-h-screen'>
            <header>
                <NavBar/>
                </header>

                <main className='grow py-3'>
                {children}
                </main>

            <Footer/>

            </body>
        </html>
    )
}