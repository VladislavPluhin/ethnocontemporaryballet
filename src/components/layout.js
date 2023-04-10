import  React, {useEffect, useState} from "react"

import Header from "./header/header"
import Footer from "./footer/footer"
import "./layout.scss"

const Layout = ({ children }) => {
  const [isActiveBurger, setIsActiveBurger] = useState(false)
 
  function initBurger() {
    if(isActiveBurger) {
      setIsActiveBurger(false)
    }else{
      setIsActiveBurger(true)
    }
  }
  
  return (
    <div className={isActiveBurger ? "wrapper burger-active" : 'wrapper' } id='wrapper' >
        <Header initBurger={initBurger} />
            <main>{children}</main>
            <Footer/>           
    </div>
  )
}

export default Layout
