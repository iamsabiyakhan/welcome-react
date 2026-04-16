import { resList } from "../utils/mockData";
import RestrauntCard from "./RestrauntCard";
import { useState } from "react";
const Body = ()=>{
   const [listOfRestraunts,setListOfRestraunt] = useState(resList)
   return(
         <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    
                    const filteredList = listOfRestraunts.filter((res)=>{
                       return res.info.avgRating>4;
                    })
                    setListOfRestraunt(filteredList)
                    console.log(filteredList)
                }}>
                    filter button
                </button>
            </div>
            <div className="restro-card-div">
                 {
                  listOfRestraunts.map((restraunts)=>
                     <RestrauntCard key={restraunts.info.id} resData={restraunts}/>
                  )
               }
            </div>
              
         </div>
   
   ) 
}
export default Body