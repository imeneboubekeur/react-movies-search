import { useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
import { Elements } from "./components/element";
import Movies from "./components/movies";
import Header from "./components/header";
import { Overlay } from "./components/overlay"

export default function App() {
  const [data, setData] = useState(null);
  const [text, setText] = useState("");
  const [showSearchPage, setShowSearchPage] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7c1df1bd8915cee5d5406945b86e9839&language=en-US&page=1`)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setData(json.results);
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if (showSearchPage) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = scrollBarWidth + "px";
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
  }, [showSearchPage]);

  if (!data) return <div>Loading...</div>;


  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowSearchPage(false);
      setIsClosing(false);
    }, 400); // match CSS animation time
  };

  return (
    <div className="app">
      <div className="main">
        <Header searchPage={() => setShowSearchPage(true)} />
        <Movies>
          <Elements data={data} />
        </Movies>
      </div>
      <Overlay
        showSearchPage={showSearchPage}
        isClosing={isClosing}
        text={text}
        enterText={setText}
        handleClose={() => handleClose()}
        data={data}
      />
    </div>
  )
}

