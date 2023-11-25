import React, { useEffect, useState } from 'react';
import GetDataPopular from '../utils/networks/GetDataPopular';
import Movies from '../components/Movies/Movies';
import Hero from '../components/Hero/Hero';
import Button from '../components/ui/Button';

    const Popular = () => {

        const[movies, setMovies] = useState([])
        const [pages, setPages] = useState(1)

        const getData = async(number) => {
            const data = await GetDataPopular(number)
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
                <Movies item={movies} title={"Popular Movies"}/>
                <Button onClick={handleBefore} variant="primary">Kembali</Button>
                <Button onClick={handleNext} variant="secondary">Maju</Button>
            </div>
        );
    }

    export default Popular;