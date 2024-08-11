import React, { useState } from "react";

const NewProduct = () => {

  const initialValue = {
    name: "",
    price: 0,
    amount: 0,
    image: "",
    dampingRate: 0.8,
  };

  const [formData,setFormData] = useState(initialValue)

  const handleSubmit = () => {
    
  }

  return (
    <div className="container">
      <article
        id="add-product"
        className="mb-4 mt-4 col col-lg-6 mx-auto border rounded-2 bg-opacity-50 bg-light"
      >
        <h1 className="text-center"> New Product</h1>

        <form onSubmit={handleSubmit} className="p-2">
          <div className="mb-3">
            <label htmlFor="add-name" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              required
              onChange={(e)=>setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="add-price" className="form-label">
              Product Price
            </label>
            <input
              type="number"
              className="form-control"
              name="price"
              value={formData.price}
              required
              onChange={(e)=>setFormData({...formData, price: e.target.value})}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="add-quantity" className="form-label">
              Product Quantity
            </label>
            <input
              type="number"
              className="form-control"
              name="amount"
              value={formData.amount}
              required
              onChange={(e)=>setFormData({...formData, amount: e.target.value})}
            />
          </div>
          <label htmlFor="add-image" className="form-label">
            Product Image
          </label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
              https://example.com/
            </span>
            <input
              type="url"
              className="form-control"
              name="image"
              value={formData.image}
              aria-describedby="basic-addon3"
              required
              onChange={(e)=>setFormData({...formData, image: e.target.value})}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="add-to-cart btn btn-success btn-sm cursor-pointer"
            >
              <i className="fa-solid fa-cart-plus me-2"></i>Save To Product
            </button>
          </div>
        </form>
      </article>
    </div>
  );
};

export default NewProduct;
