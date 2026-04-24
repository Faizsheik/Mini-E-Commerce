import React from 'react';
import { Fragment , useState, useEffect} from 'react';
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'react-router-dom';
export default function Home()
{
    const [products, setProducts] =  useState([]);
    const [searchParams,setSearchParams]=useSearchParams()
    
    useEffect(()=>{
         console.log(`url is ${process.env.REACT_APP_API_URL}`)
         fetch(`${process.env.REACT_APP_API_URL}/products?${searchParams}`)
        .then(res => res.json())
        .then(res => setProducts(res.products))
        .catch(err => console.log("Fetch error:", err))
    },[searchParams])

    console.log(products);   


    //state value is async console.log after setProducts will provide old state.
    // so we can print console after res.json()


    return <Fragment>
    <h1 id="products_heading">Latest Products</h1>

    <section id="products" className="container mt-5">
      <div className="row">
        {products.map(product => <ProductCard product={product}/>)}
      </div>
    </section>

    </Fragment>
}   