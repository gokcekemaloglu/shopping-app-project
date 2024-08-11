import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({urun, getData}) => {

  const {id, name, price, image, dampingRate, amount} = urun

  const navigate = useNavigate()

  const BASE_URL = "https://63f4e5583f99f5855db9e941.mockapi.io/products"

  const handleDelete = async() => {
    await axios.delete(`${BASE_URL}/${id}`)
    getData()
  }

  const handleIncrease = async() => {
    await axios.put(`${BASE_URL}/${id}`, {...urun, amount: amount + 1})
    getData()
  }
   
  
  const handleDecrease = async() => {
    if (amount > 1) {
      await axios.put(`${BASE_URL}/${id}`, {...urun, amount: amount - 1})
    getData()
    }else {
      alert("You can't decrease the amount below 1. Do you want to delete the product?")
      handleDelete()
    }    
  }  
 
  return (
    <div className="card shadow-lg mb-3">
      <div className="row g-0">
        <div className="col-md-5">
          <img
            src={image}
            className="w-100 h-100 rounded-start"
            alt={"name"}
            title={""}
            onClick={()=>navigate("/update-product", {state:{urun}})}
          />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title" role="button">
              {name}
            </h5>
            <div className="product-price d-flex flex-wrap align-items-center">
                <span className="damping-price text-warning h2">$ {parseFloat(price*dampingRate).toFixed(2)}</span>
                <span className="h5 text-dark text-decoration-line-through">
                  {parseFloat(price).toFixed(2)}
                </span>
            </div>
            <div className="border border-1 border-dark shadow-lg d-flex justify-content-center p-2">
              <div className="quantity-controller">
                <button onClick={handleDecrease} className="btn btn-secondary btn-sm">
                  <i className="fas fa-minus"></i>
                </button>
                <p className="d-inline mx-4" id="product-quantity">
                  {amount}
                </p>
                <button onClick={handleIncrease} className="btn btn-secondary btn-sm">
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>
            <div className="product-removal mt-4">
              <button 
                onClick={handleDelete} 
                className="btn btn-danger btn-sm w-100 remove-product"
              >
                <i className="fa-solid fa-trash-can me-2"></i>Remove
              </button>
            </div>
            <div className="mt-2">
              Product Total: $<span className="product-line-price">{parseFloat(price*dampingRate*amount).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
