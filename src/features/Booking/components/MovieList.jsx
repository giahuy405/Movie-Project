import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MovieItem from './MovieItem';
import { Pagination } from 'antd';
import { fetchMovies } from '../thunk';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
const MovieList = () => {
  const { movies } = useSelector(state => state.bookingReducer);
  const dispatch = useDispatch();

  // const navigate = useNavigate();
  const [useSearch, setUseSearch] = useSearchParams();
  
  return (
    <div className='container mx-auto'>
      <h1 className='text-4xl text-center my-6 '>MOVIE LIST</h1>
      <div className="grid grid-cols-4 gap-5">
        {movies.items?.map(item =>
          <MovieItem item={item} key={item.id} />
        )}
      </div>
      {/* pageSize phải bằng số soPhanTuTrenTrang */}
      <Pagination current={+useSearch.get('page')} className='mt-6 mb-10' pageSize={8} total={movies.totalCount} onChange={(page, pageSize) => {
        setUseSearch({page})
      }} />
    </div>
  )
}

export default MovieList