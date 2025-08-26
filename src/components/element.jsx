export function Element({ data }) {
    return (<div className="elements" >
        <img src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}></img>

        <div className="title">{data.title}</div>
    </div>
    )

}

export function Elements({ data }) {
    return data.map(data => {
        return <Element key={data.id} data={data}></Element>
    })
}