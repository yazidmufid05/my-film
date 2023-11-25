    import React, { useEffect, useState } from 'react';
    import Movies from '../components/Movies/Movies';
    import Button from '../components/ui/Button';
    import Hero from '../components/Hero/Hero';
    import GetDataUpcoming from '../utils/networks/GetDataUpcoming';

    const Upcoming = () => {

        const[movies, setMovies] = useState([])
        const [pages, setPages] = useState(1)

        const getData = async(number) => {
            const data = await GetDataUpcoming(number)
            await setMovies(data.results)
        
    }

    const handleNext = () => {
        const data = pages
        setPages(data+1)
    }

    const handleBefore = () => {
        if(pages > 1) {
            const data = pages
            setPages(data-1)
        } else {
            setPages(1)
        }
    }

    useEffect(
        function(){
            getData(pages)
        }, [pages]
    )

        return (
            <div>
                    <Hero />
                    <Movies item={movies} title={"Upcoming Movies"}/>
                    <Button onClick={handleBefore} variant="primary">Mundur</Button>
                    <Button onClick={handleNext} variant="secondary">Maju</Button>
            </div>
        );
    }

    export default Upcoming;
