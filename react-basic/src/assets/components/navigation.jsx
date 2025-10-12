const Navigation = ({ listItem }) => {
    return (
        <nav className="bg-green-500 p-4 flex justify-between">
            <h1 className="text-2xl font-bold flex items-center">Logo</h1>
            <ul className="flex flex-row gap-8 p-5"> 
                {listItem.map((item) => (
                <li className="hover:text-white font-semibold" key={item.id}>
                    <a href="{item.url}">{item.name}</a>
                </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation;