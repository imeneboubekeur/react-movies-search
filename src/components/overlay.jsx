import { Element } from "./element"
export function Close({ handleClose }) {
    return (<div className="container">
        <button className=".material-symbols-outlined " onClick={() => handleClose()}>
            <span className="material-symbols-outlined">
                close_small
            </span></button>

    </div>


    )
}

export function Search({ text, enterText }) {
    return (<form className="searchBar">

        <input name="search" type="text"
            value={text} placeholder="Search..."
            onChange={(e) => enterText(e.target.value)} />


    </form>)
}

export function Movies({ data, text }) {
    return <div className="movies"> {data.map(data => {
        if (data.title.toLowerCase().replace(/\s+/g, '').indexOf(text.toLowerCase().replace(/\s+/g, '')) === -1) {
            return
        } else {
            return <Element key={data.id} data={data}></Element>

        }
    })} </div>
}

export function Overlay({ showSearchPage, isClosing, text, enterText, handleClose, data }) {
    if (!showSearchPage) { return null }
    return (


        <div className={`overlay ${isClosing ? "hide" : ""}`}
            style={{
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                backdropFilter: "blur(10px)",
                position: "fixed",
                top: 0, left: 0, right: 0, bottom: 0,

                zIndex: 1000,
                padding: "20px"
            }}
        >
            <Close handleClose={handleClose} />
            <Search text={text} enterText={enterText} />
            <Movies data={data} text={text}></Movies>
            {/*<div className="movies">{movies}</div>*/}
        </div>



    )
}


