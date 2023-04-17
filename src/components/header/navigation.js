import  React , {useEffect} from "react"
import { Link}  from "gatsby"
import  './header.scss';

const Navigation = ({navData}) => {

  function subMenuInit() {
  
    const submenuOpeners = Array.from( document.querySelectorAll('.link-with-submenu'));
    const closeBtn = Array.from(document.querySelectorAll('.close-btn'));
    
    submenuOpeners.map((item) => {
        item.addEventListener("click", (event) => {
            event.preventDefault()
            item.classList.toggle('active')
            closeBtn.map((closeBTn)=> {
                    closeBTn.addEventListener("click", (event) => {
                    event.preventDefault()
                    item.classList.remove('active')
                })
            })
        })
    })
}
useEffect(() => {
  subMenuInit()
}, [])
   return (
        <ul className="header__list">
            { navData.map((element)=> {
                if(element.textUrl) {
                  return (
                    <li key={element?.id} className="header__list-item">
                      <Link to={element.textUrl}>{element.textNavigationLink}</Link>
                    </li>
                  )
                } 
            })}
        </ul>
   )
}




export default Navigation