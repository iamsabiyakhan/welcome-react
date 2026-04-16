import { IMG_CDN } from "../utils/constants"

const RestrauntCard = ({resData})=>{
   console.log(resData)
   const {name,cuisines,avgRating,costForTwo,cloudinaryImageId} = resData.info;
  
   return(
      <>  
            <div className="restroCard">
               <img src={IMG_CDN+cloudinaryImageId}/>
               <h3>{name}</h3>
               <h4>{cuisines.join(", ")}</h4>
               <h4>{avgRating}</h4>
               <h4>{costForTwo}</h4>
            </div>
        
      </>
   )
}
export default RestrauntCard
