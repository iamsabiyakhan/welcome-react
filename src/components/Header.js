import { LOGO_URL } from "../utils/constants"
const Header = ()=>{
   return(
      <>
         <div className="header">
            <div className ="logo-div">
               <img src={LOGO_URL}/>
            </div>
            <div className="nav-items">
               <ul className="items">
                  <li>home</li>
                  <li>contact us</li>
                  <li>cart</li>
               </ul>
            </div>
         </div>
      </>
   )
}
export default Header