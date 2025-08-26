export default function Header({ searchPage }) {
    return (<div className="container1">
        <h1 className="brand">MOVIES.COM</h1>
        <button className="searchBtn" onClick={searchPage}>
            <span className="material-symbols-outlined search">
                search
            </span></button>

    </div>
    )
}