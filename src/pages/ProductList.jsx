
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import axios from "axios";



const ProductList = () => {
  const BASE_URL ="https://63f4e5583f99f5855db9e941.mockapi.io/products"

  const [urunler, setUrunler] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const getData = async()=> {

    try {
      const {data} = await axios(BASE_URL)
      setUrunler(data)
      setLoading(false)
    } catch (err) {
      setError(true)
    }    
    
  }

  useEffect(()=>{
    getData()
  },[])

  if(error){
    return <p>Something went wrong</p>
  }
  
  return (
    <div className="container mt-3">
      <div className={"bg-light d-sm-block d-md-flex"}>
        {
          loading ? (
            <p className="text-center text-danger w-100">Loading....</p>
          ) : (
            <>
              <article id="product-panel" className="col-md-6">
                {urunler.map((urun)=>(
                  <ProductCard key={urun.id} urun={urun} getData={getData}/>
                ))}                
              </article>
              <article className="col-md-4 m-3">
                <CardTotal urunler={urunler}/>
              </article>
            </>
          )
        }      

        <p className="text-center text-danger w-100">No products data...</p>
      </div>
    </div>
  );
};

export default ProductList;
