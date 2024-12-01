import React from 'react'

interface props {
    productId: string,
    reviewId: string
}

const reviewDetail = ({params} : {
    params: {
        productId : string;
        reviewId : string;
    }
}) => {
  return (
    <div>Review {params.reviewId} for product {params.productId}</div>
  )
}

export default reviewDetail