import React, {useState} from 'react'
import './header.css'
import {BiMenuAltRight} from 'react-icons/bi'


const Header = () => {

  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
      if(document.documentElement.clientWidth <= 800){
        return {right: !menuOpened && "-100%"}
      }
  }


  return (
    <section className='h-wrapper'>
       <div className='flexCenter paddings innerWidth h-container'>
         <img src="https://t4.ftcdn.net/jpg/03/44/54/41/360_F_344544186_sZR2za8K7drhXKc9PexGfbkxs0X5Tz1C.jpg" alt="logo" width={100}/>
         
         <div className='flexCenter h-menu'
         style={getMenuStyles(menuOpened)}
         >
             <a href="">Residencies</a>
             <a href="">Our Values</a>
             <a href="">Contact Us</a>
             <a href="">Get Started</a>
             <button className='button'><a href="">Contact</a></button>
         </div>

         <div className='menu-icon' onClick={() => setMenuOpened((prev) => !prev)}>
        <BiMenuAltRight size={30} />
       </div>
       </div>

      
    </section>
  )
}

export default Header
