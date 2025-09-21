import React from 'react'
import { RiDeleteBin3Line } from "react-icons/ri";

const CartContent = () => {
    const cartProducts = [
        {
            productID : 1,
            name: "T-Shirt",
            size: "M",
            color: "red",
            quantity: 1,
            price: 15,
            image: "https://picsum.photos/200/200?random=1"
        },
        {
            productID : 2,
            name: "Jeans",
            size: "M",
            color: "blue",
            quantity: 1,
            price: 15,
            image: "https://picsum.photos/200/200?random=2"
        }
    ]

  return (
    <div>
        {
            cartProducts.map((product,index)=>(
                <div key={index} className='flex items-start justify-between py-4 border-b' >
                    <div className=' flex items-start '>
                        <img src={product.image} alt={product.name} className=' w-20 h-2/4 object-cover mr-4 rounded' />
                        <div>
                            <h3>{product.name} </h3>
                            <p className=' text-sm text-gray-500 ' > 
                                size: {product.size} | color: {product.color}
                            </p> 
                            <div className=' flex items-center mt-2 ' >
                                <button className=' border border-gray-400 rounded px-2 py-1 text-xl font-medium '>-</button>
                                <span className=' mx-4'> {product.quantity} </span>
                                <button className=' border border-gray-400 rounded px-2 py-1 text-xl font-medium '>+</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>$ {product.price.toLocaleString()} </p>
                        <button>
                            <RiDeleteBin3Line className=' h-6 w-6 mt-2 text-red-600' />
                        </button>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default CartContent