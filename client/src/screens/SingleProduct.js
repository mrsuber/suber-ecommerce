import React,{useState, useEffect} from 'react'
import { Link,useParams } from 'react-router-dom';
import { Header, Rating } from "../components";
import Message from "../components/loadingError/Error";
import axios from 'axios'


const SingleProduct = ({match}) => {
  let params = useParams();
  const [product, setProduct]=useState({})

  useEffect(()=>{
    const fetchproduct = async() =>{
      const {data} = await axios.get(`/api/products/${params.id}`)
      setProduct(data)
    }

    fetchproduct()
  },[params.id])

 
  // const product = products.find((p) => p._id === params.id)
  return (
    <>
      <Header/>
      <div className='container single-product'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='single-image'>
              <img src={product.image} alt={product.name} />
            </div>
          </div>
          <div className='col-md-6'>
            <div className='product-dtl'>
              <div className='product-info'>
                <div className='product-name'>{product.name}</div>
              </div>
              <p>{product.description}</p>
              <div className='product-count col-lg-7'>
                <div className='flex-box d-flex justify-content-between align-items-center'>
                  <h6>Price</h6>
                  <span>${product.price}</span>
                </div>
                <div className='flex-box d-flex justify-content-between align-items-center'>
                  <h6>Status</h6>
                  {product.countInStock > 0 ? (
                    <span>In Stock</span>
                  ):(
                  <span>unavailable</span>
                  )}
                </div>
                <div className='flex-box d-flex justify-content-between align-items-center'>
                  <h6>Reviews</h6>
                  <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                  />
                </div>
                {product.countInStock > 0 ? (
                  <>
                  <div className='flex-box d-flex justify-content-between align-items-center'>
                    <h6>Quantity</h6>
                    <select>
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                            {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button className='round-black-btn'>Add To Cart</button>
                  </>
                ):null}
              </div>
            </div>
          </div>
        </div>
        {/**Rating */}
        <div className='row my-5'>
            <div className='col-md-6'>
                <h6 className='mb-3'>REVIEWS</h6>
                <Message variant={'alert-info mt-3'}>No Reviews</Message>
                <div className='mb-5 mb-md-3 bg-light p-3 shadow-sm rounded'>
                  <strong>Admin Doe</strong>
                  <Rating/>
                  <span>Jan 12 2021</span>
                  <div className='alert alert-info mt-3'>
                    this sis some paragraph wher the you wl i tiis like it ooru onot oi is up to you 
                    i really do not care ai fpji  aksk ask the ma n e i he knows the reall sroty and if 
                    he does not do not blame any one
                  </div>
                </div>
            </div>
            <div className='col-md-6'>
                  <h6>WRITE A CUSTOMER REVIEW</h6>
                  <div className='my-4'></div>

                  <form>
                    <div className='my-4'>
                        <strong>Rating</strong>
                        <select className='col-12 bg-light p-3 mt-2 border-0 rounded'>
                         
                            <option value="">Select...</option>
                            <option value="1">1 - Poor</option>
                            <option value="2">2 - Fair</option>
                            <option value="3">3 - Good</option>
                            <option value="4">4 - Very Good</option>
                            <option value="5">5 - Excellent</option>
                         
                        </select>
                    </div>
                    <div className='my-4'>
                      <strong>Comment</strong>
                      <textarea row="3" className='col-12 bg-light p-3 mt-2 border-0 rounded'></textarea>
                    </div>
                    <div className='my-3'>
                      <button className='col-12 bg-black border-0 p-3 rounded text-white'>SUBMIT</button>
                    </div>
                  </form>
                  <div className='my-3'>
                        <Message variant={'alert-warning'}>
                          please{" "} 
                          <Link to='/login'>
                          " <strong>Login</strong> "
                          </Link>{" "}
                          to write a review{" "}
                        </Message>
                  </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default SingleProduct