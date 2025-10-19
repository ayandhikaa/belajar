import {Link} from 'react-router-dom'

const Navigation = ({ listItem }) => {
    return (
        <nav className="bg-green-800 p-4 flex justify-between">
            <h1 className="text-2xl font-bold flex items-center text-green-500">Logo</h1>
            <ul className="flex flex-row gap-8 p-5"> 
                {listItem.map((item) => (
                <li className="hover:text-white font-semibold text-green-500" key={item.id}>
                    <Link to={item.url}>{item.name}</Link>
                </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation;