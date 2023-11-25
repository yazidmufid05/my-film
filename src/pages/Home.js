  import { useEffect, useState } from "react";
  import Hero from "../components/Hero/Hero";
  import Movies from "../components/Movies/Movies";
  import GetDataTrending from "../utils/networks/GetDataTrending";

  // Home Component
  const Home = () => {
    const [movies, setMovies]  = useState([])

      const getData = async() => {
          const data = await GetDataTrending()
          await setMovies(data.results)
          
      }

      useEffect(
          function(){
              getData()
          }, []
      )

      return (
        <div>
          <Hero />
          <Movies item={movies} title={"Trending Movies"}/>
        </div>
      );
    }
    

  export default Home;