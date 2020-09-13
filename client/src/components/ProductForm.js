import React, { useState } from 'react'
import axios from 'axios'
import {navigate} from "@reach/router"

const ProductForm = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [errs, setErrs] = useState("");


    const onSubmit = e =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/product/new', {
            title,
            price,
            description
        })
        .then(res => {
            if(res.data.error){
                setErrs(res.data.error.errors);
            }else{
                navigate(`/product/${res.data._id}`)
            }
        })
        .catch(err => console.log(err))
    }
    return(
        <div className="container">
        <h2>Add New Product</h2>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>Title</label>
                <input className="form-control form-control-sm w-50" type="text" name="title" onChange={(e) => setTitle(e.target.value)}/>
                {errs.title ? <p>{errs.title.message}</p>: null}
            </div>
            <div className="form-group">
                <label>Price</label>
                <input className="form-control form-control-sm w-50" type="price" name="price" onChange={(e) => setPrice(e.target.value)}/>
                {errs.price ? <p>{errs.price.message}</p>: null}
            </div>
            <div className="form-group">
                <label>Description</label>
                <input className="form-control form-control-sm w-50" type="description" name="description" onChange={(e) => setDescription(e.target.value)}/>
                {errs.description ? <p>{errs.description.message}</p>: null}
            </div>
            <input className="btn btn-primary btn-lg" type="submit"/>
        </form>
        </div>
    )
}
export default ProductForm;