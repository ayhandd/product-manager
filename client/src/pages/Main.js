import React from 'react'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'

const Main = () =>{
    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col">
                    <ProductForm className="col"/>
                </div>
                <div className="col">
                    <ProductList className="col"/>
                </div>
            </div>
        </div>
        
    )
}

export default Main;