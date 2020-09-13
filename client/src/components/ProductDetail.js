import React, {useEffect, useState} from 'react'
import {navigate} from '@reach/router'
import axios from 'axios'

const ProductDetail = (props) => {
    const [prod, setProd] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${props.id}`)
        .then(res => setProd(res.data))
        .catch(err =>  console.log(err))
    },[])
    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/product/delete/${props.id}`)
        .then(res => navigate("/products"))
        .catch(err => console.log(err))
    }
    return(
        <div className="card text-center">
            <div className="card-header font-weight-bold">{prod.title}</div>
            <div className="card-body">
                <p className="card-title">{prod.price}$</p>
                <p className="card-text">{prod.description}</p>
                <button className="btn btn-danger m-1" onClick={deleteProduct}>Delete</button>
                <button className="btn btn-warning m-1" onClick={()=> navigate(`/product/update/${props.id}`)}>Edit</button>
                <button className="btn btn-secondary m-1" onClick={() => navigate("/products")}>Go Back</button>
            </div>
            
        </div>
    )
}
export default ProductDetail;