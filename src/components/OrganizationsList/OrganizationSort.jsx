import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { getProducts } from '../../store/products/productsActions';
// import { setSortByRating } from '../../store/products/productsSlice';

const OrganizationSort = () => {
    // const { sortByRating } = useSelector(state => state.products);
    const [sortBy, setSortBy] = useState('');
    const dispatch = useDispatch();

    // useEffect(() => {
    //   dispatch(setSortByRating({ sortByRating: sortBy }));
    //   dispatch(getProducts());
    // }, [sortBy]);

    // useEffect(() => {
    //   if(!sortByRating) {
    //     setSortBy('');
    //   };
    // }, [sortByRating]);

  return (
    <select className="relative w-50 border border-gray-500 rounded p-2.5" onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
        <option value="">Без сортировки</option>
        <option value="asc">По убыванию</option>
        <option value="desc">По возрастанию</option>
    </select>
  )
}

export default OrganizationSort