import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {navigate} from "@reach/router"

const ProductEdit = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [errs, setErrs] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${props.id}`)
        .then(res =>{
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
        })
        .catch(err =>  console.log(err))
    },[])


    const onUpdate = e =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/update/${props.id}`, {
            title,
            price,
            description
        })
        .then(res => 
            {
                if(res.data.error){
                    setErrs(res.data.error.errors);
                }else{
                    navigate(`/product/${props.id}`)
                }
            })
        .catch(err => console.log(err))
    }
    return(
        <div className="container">
        <h2>Update Product</h2>
        <form onSubmit={onUpdate}>
            <div className="form-group">
                <label>Title</label>
                <input className="form-control form-control-sm w-50" type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                {errs.title ? <p className="text-danger small">{errs.title.message}</p>: null}
            </div>
            <div className="form-group">
                <label>Price</label>
                <input className="form-control form-control-sm w-50" type="price" name="price" value={price}  onChange={(e) => setPrice(e.target.value)}/>
                {errs.price ? <p className="text-danger small">{errs.price.message}</p>: null}
            </div>
            <div className="form-group">
                <label>Description</label>
                <input className="form-control form-control-sm w-50" type="description" name="description" value={description}  onChange={(e) => setDescription(e.target.value)}/>
                {errs.description ? <p className="text-danger small">{errs.description.message}</p>: null}
            </div>
            <input className="btn btn-primary btn-lg m-1" type="submit"/>
            <button className="btn btn-secondary btn-lg m-1" onClick={() => navigate(`/product/${props.id}`)}>Go Back</button>
        </form>
        </div>
    )
}
export default ProductEdit;