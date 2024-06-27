import React from "react";

function NavbarItem({title,onClick}) {
  return(
    <div className='navbar-item' onClick={onClick}>
      {title}
    </div>
  )
}

function HeaderNavBar() {
  function handleClick(navItem) {
    console.log(navItem);
  }
  return (
    <div className='landig-navbar'>
      <NavbarItem title='خانه' onClick={()=>handleClick('home')}/>
      <NavbarItem title='محصولات' onClick={()=>handleClick('products')}/>
      <NavbarItem title='ثبت نام' onClick={()=>handleClick('products')}/>
      <NavbarItem title='درباره ی ما' onClick={()=>handleClick('someshit')}/>

    </div>
  );
}

export default HeaderNavBar;