import React from 'react'
import "./footer.css";

const Footer = () => {
  return (
    <section className='f-wrapper'>
      <div className='f-container paddings innerWidth flexCenter'>
        {/*  Left Side */}

        <div className='flexColStart f-left'>
            <img src='./https://media.istockphoto.com/id/1409298953/photo/real-estate-agents-shake-hands-after-the-signing-of-the-contract-agreement-is-complete.jpg?b=1&s=170667a&w=0&k=20&c=41IYPuvIWQmDRUXdhWELlGb3IeQulHGQwRCJ_5MtgSo=' alt="" width={120}/>

            <span className='secondaryText'>
                lorem text lorem text lorem text lorem text
            </span>
        </div>


        {/*  Right Side */}

        <div className='f-right flexColStart'>
            <span className='primaryText'>
               Information
            </span>
            <span className='secondaryText'>
                 [Address of the business operation]
            </span>

            <div className='f-menu flexCenter'>
                 <span>Property</span>
                 <span>Services</span>
                 <span>Product</span>
                 <span>About Us</span>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
