import React from 'react';
import BuyButton from './BuyButton';
import FavouriteButton from './FavouriteButton';
import img from '../../assets/mob-image.jpg';
import {Data} from '../../utils/data';
function Card() {
  const data=[
    {'ItemName':'Laptop',
    'Price':'$600'},
  ]
	const listItems = Data.map((element)=>{ return(
	<div className='h-[20rem] w-[14rem] group'>
		<div className=''> 
			<img className=' hover:object-center hover:border-solid hover:border-2 group-hover:border-yellow-400' src={img} alt='' />
		</div>
		<div>
			<p className='text-lg text-blue-500 font-semibold'>{element.ItemName}</p>
			<div className='flex justify-between m-3 opacity-0 group-hover:opacity-100 '>
			<p className='text-lg text-blue-500'>{element.Price}</p>
			<div className='flex '>
				<FavouriteButton className='mr-2' />
				<BuyButton className='' />
			</div>
		</div>
	</div>
</div>
)})
//   return (
//  	<div className='flex'>{listItems}</div>
//   )
  
}

export default Card