import React from 'react'
import "./ImageSearch.css"
const ImageSearch=({handleGetRequest})=> {
    //this keyword doesnot work inside functional components
    
    return (
        <div className="imageSearch">
           <form onSubmit={handleGetRequest} className="imageSearch__form">
               <input type="text" name="searchValue" placeholder="Search..."/>
               <button>Search</button>
           </form> 
                     
        </div>

          

    )
}

export default ImageSearch
