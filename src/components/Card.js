import React from 'react'
import CardItem from './CardItem'
import './Card.css'
function Card() {
  return (
    <div className='cards'>
        <h1>Check out this EPIC destinations</h1>
        <div className='cards__container'>
         <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem 
                src='images/img-9.jpg'
                text='Explore the hidden water falls in the Amazon jungle'
                label='Adventure'
                path='/Services'
                />
                <CardItem
                src='images/img-2.jpg'
                text='Travel through the islands of Bali in a Private Cruise'
                label='Luxury'
                path='/Services'
                />
                <CardItem
                src='images/img-3.jpg'
                text='Set sail in the Atlantic Ocean uncharted waters'
                label='Mystery'
                path='/Services'
                />
                <CardItem
                src='images/img-4.jpg'
                text='Exprerince Football on Top of the mountains'
                label='Adventure'
                path='/Services'
                />
                 <CardItem
                src='images/img-8.jpg'
                text='Ride through the sahara dessert camel tour'
                label='Adrenaline'
                path='/Services'
                />
            </ul>
            </div>   
        </div>
    </div>
  )
}

export default Card