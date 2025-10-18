import Navigation from './assets/components/navigation.jsx'
import Footer from './assets/components/footer.jsx'
import { Outlet } from 'react-router-dom'

function App() {
    const listItem = [
        {
            id: 1,
            name: 'Home',
            url: '/'
        },
        {
            id: 2,
            name: 'About',
            url: '/about'
        },
        {
            id: 3,
            name: 'Contact',
            url: '/contact'
        },
        {
            id: 4,
            name: 'Todo',
            url: '/todo'
        }
    ]
 return (
    <>
        <Navigation listItem={listItem} />
        <main className='mx-auto my-10 max-w-6xl px-20 py-20 h-screen bg-green-100'>
            <Outlet />
        </main>
        <Footer />
    </>
 )
}

export default App
