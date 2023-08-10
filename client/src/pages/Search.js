import React from 'react';

import { useLocation } from 'react-router-dom';

import useFetch from '../hooks/useFetch';
import CategoryNav from '../components/CategoryNav';
import Product from '../components/Product';


const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('query');
  // console.log(searchTerm);

  const { data } = useFetch(
    `/products?populate=*&filters[title][$contains]=${searchTerm}`
    // `/categories?populate=*&filters[title][products] = ${searchTerm}`
    );

    // if
    
    console.log(data)
    
  return (
    <div className='mb-[30px] pt-40 md:pt-40 lg:pt-0'>
      <div className='mx-6'>
        <div className='flex gap-x-[40px]'>
          <CategoryNav />
          <div>
            <div className='py-3 text-xl uppercase text-center lg:text-left'>
              {data?.length > 0 ? `${data.length} results for ${searchTerm}` :
              `no results found for ${searchTerm}`
              }
            </div>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-[15px] md:gap-[30px]'>
            {data?.map((product) => {
              return <Product product = {product} key={product.id}/>;
            })}
          </div>

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Search;
