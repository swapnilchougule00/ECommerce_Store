import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Cart() {

  const dispatch =useDispatch()

  const decrement = (id)=>{
    dispatch({
      type: 'decrement',
      payload : id
        })
        dispatch({ type: 'calculate' })

  }

  const increment = (id)=>{
    dispatch({
  type: 'addToCart',
  payload : {id}
    })
    dispatch({ type: 'calculate' })
  }

  const remove = (id)=>{
    dispatch({
      type: 'remove',
      payload : id
        })
    dispatch({ type: 'calculate' })

  }

const {cartItems ,subtotal , shipping , tax , Total} = useSelector(state=>state.cart)

  return (
  <div className=' text-white '>
  
  <div className='pt-16 p-8'>

    <h1 className='text-3xl tracking-wider mb-4'>Card Details</h1>
<div className='flex border-b text-center border-black pb-3'>
  <h3 className='md:text-2xl text-lg w-[40%] text-rose-700'>Product Details</h3>
  <h3 className='md:text-2xl text-lg w-[20%] text-rose-700'>Quantity</h3>
  <h3 className='md:text-2xl text-lg w-[20%] text-rose-700'>Price</h3>
  <h3 className='md:text-2xl text-lg w-[20%] text-rose-700'>Remove Item</h3>
  
</div>
  </div>
{
  cartItems.length >0 ? (
    cartItems.map((i)=>{
      const {quantity, title ,id, price , image} = i;
      return(
        <div key={id} id='cart' className='px-8 '>

   <div className='border-b  border-black pb-6'>
   <div className='pt-6 flex text-center items-center'>
      <div className='flex items-center pl-2 md:pl-10 space-x-4  md:space-x-14 w-[40%]'>
        <img src={image} alt="Product" className='w-[50px] h-[50px] md:w-[100px] md:h-[100px] border object-contain'/>
        <h3 className=''>{title.slice(0,11)}</h3>
      </div>
      <div className='w-[20%] flex justify-evenly items-center'>
      <button onClick={()=>decrement(id)} className="px-1.5 rounded-md md:w-[20px]  md:h-[20px] h-[18px]
       flex items-center justify-center pb-0.5 bg-black text-md font-bold  ">-</button>
        <h1>{quantity}</h1>
        <button onClick={()=>increment(id) }className=" px-1 rounded-md md:w-[20px] h-[18px] md:h-[20px] 
         flex items-center pb-1 justify-center bg-black text-md font-bold  " >+</button>
      </div>
      <div className='w-[20%]'>
        <h1>{quantity* price}</h1>
      </div>
      <div className='w-[20%]'>
        <button className='bg-black p-1 rounded-lg px-2 text-sm md:text-lg' onClick={()=>remove(id)}>Remove</button>
      </div>
     </div>
   </div>

    </div>
    )})
  ): <h1 className='p-20 text-3xl flex justify-center '>Cart is empty</h1>
}
<div className='pb-10'>
   <div className='flex flex-col space-y-4 border border-white/10  w-[50%] mx-auto text-left text-xl p-5 mt-16'>
    <h2>Subtotal: ${subtotal}</h2>
    <h2>Shipping: ${shipping}</h2>
    <h2>Tax: ${tax}</h2>
    <h2 className='w-full  border-t border-white/10 pt-2'>Total: ${Total}</h2>
   </div>
   </div>
  </div>
  )
}

export default Cart
