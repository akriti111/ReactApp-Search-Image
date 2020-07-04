import React from 'react'
import "./ImageList.css"
const ImageList=(props)=> {
    console.log(props)
    return (
        <div className="container">
            <div className="row">
               <h4>{props.msgs} </h4>
            {    
                props.images.map(({id, largeImageURL})=>{
                    return (
                        <div key={id} className="col-lg-3 col-md-4 col-sm-6 col-xs-12" style={{
                            marginBottom: "2rem"
                        }}>
                            <h2></h2>
                           <div className="imageList__container">
                           <img className="imageList__image" src={largeImageURL}/>
                           </div>
                        </div>

                    )
                })
            }
            </div>
       </div>
    )
}

export default ImageList










// another way 

{/* { props.images.map((image)=> {
                return <p key={image.id}>
                    {
                        image.tags
                    }
                </p>
            })} */}

            