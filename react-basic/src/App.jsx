import Navigation from './assets/components/navigation.jsx'
import Footer from './assets/components/footer.jsx'

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
        <main className='h-screen'>
            <h1 className='text-4xl font-bold text-center'>Hello World</h1>
        </main>
        <Footer />
    </>
 )
}

export default App
