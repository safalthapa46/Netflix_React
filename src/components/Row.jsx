import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Movie from './Movie';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'





const Row = ({ title, fetchURL, rowID }) => {
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        axios.get(fetchURL).then((Response) => {
            const temporaryResult=Response.data.results;
            const permanentResult=temporaryResult.filter(temporaryResult=>temporaryResult.backdrop_path!= null);
            setMovies(permanentResult)
        })
    }, [fetchURL])
        console.log(movies)
    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
    }


    const slideRight = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft + 500;
    }


 

    return (
        <>
            <h2
                className='text-white font-bold md:text-xl p-4'>
                {title}
            </h2>
            <div className='relative flex items-center group'>

                <MdChevronLeft
                    onClick={slideLeft}
                    className='left-0 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block bg-white rounded-full absolute opacity-50'
                    size={40}
                />

                <div
                    className=' relative w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'
                    id={'slider'+ rowID}>
                    {movies.map((item, id) => (
                        <Movie key={id} item={item} />
                    ))};
                </div>

                <MdChevronRight
                    onClick={slideRight}
                    className='right-0 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block bg-white rounded-full absolute opacity-50'
                    size={40} />
            </div>
        </>
    )
}

export default Row
