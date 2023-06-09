import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import { Rating, Pagination  } from "../../components";
import {useDispatch,useSelector} from "react-redux";
import { listProduct } from '../../Redux/Actions/ProductActions';
import Loading from '../loadingError/Loading';
import Message from '../loadingError/Error';


const ShopSection = () => {
  const productList = useSelector((state)=> state.productList)
  const {loading,error,products} = productList
  const dispatch = useDispatch()


  useEffect(()=>{
    dispatch(listProduct())
  },[dispatch])

  return (
    <>
     <div className='container'>
        <div className='section'>
            <div className='row'>
              <div className='col-lg-12 col-md-12 article'>
                <div className='shopcontainer row'>
                  {loading ? (
                    <div className='mb-5'>
                      <Loading/>
                    </div>
                  
                  ) : error ? (<Message variant="alert-danger">{error}</Message>):
                  (
                    <>
                    {products?.data?.map((product)=>(
                      <div className='shop col-lg-4 col-md-6 col-sm-6' key={product?._id}>
                        <div className='border-product'>
                            <Link to={`/products/${product?._id}`}>
                              <div className='shopBack'>
                                <img src={product?.image} alt={product?.name} />
                              </div>
                            </Link>
                            <div className='shoptext'>
                              <p>
                                <Link to={`/products/${product?._id}`}>
                                {product?.name}
                                </Link>
                              </p>

                              <Rating
                                value={product?.rating}
                                text={`${product?.numReviews} reviews`}
                              />
                              <h3>${product?.price}</h3>
                            </div>
                        </div>
                      </div>
                    ))
                  }
                    </>
                  )
                  }
                  
                  {/*pagination*/}
                  <Pagination />
                </div>
              </div>
            </div>
        </div>
      </div> 
    </>
  )
}

export default ShopSection
