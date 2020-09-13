import React, {useEffect, useState} from 'react'
import {Link} from '@reach/router'
import axios from 'axios'

const ProductList = () => {
    const [list, setlist] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/")
        .then(res => setlist(res.data.product))
        .catch(err =>  console.log(err))
    },[])
    return(
        <div className="container">
            <h2>All Product List</h2>
            {
                list.map((product, idx) => (
                    <div>
                        <Link key={idx} to={`/product/${product._id}`}>
                            <button className="btn btn-info btn-m m-1">{product.title}</button>
                        </Link>
                    </div>

                ))
            }
        </div>
    )
}
export default ProductList;