import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import HomeCarousel from './components/HomeCarousel';
import MovieList from './components/MovieList';
import { fetchBanners, fetchMovies } from './thunk';
const Home = () => {
    const [useSearch, setUseSearch] = useSearchParams();
    const dispatch = useDispatch()

    // dùng useSearch để lưu đường dẫn url 
    // user có vào trang sign in sau đó return cũng vẫn còn nguyên trang hiện tại
    useEffect(() => {
        dispatch(fetchBanners);
        dispatch(fetchMovies(useSearch.get('page')));
    }, [dispatch])


    useEffect(() => {
        dispatch(fetchMovies(useSearch.get('page')));
    }, [useSearch.get('page')]);
    return (
        <div>
            <HomeCarousel />
            <MovieList />
        </div>
    );
};

export default Home;