import { useEffect, useState } from "react";
const Fav = () => {
    let[favourite,setFav]=useState([
        {
            title:"Sita Ramam ",
            genre:"Love",
            language:"Malayalam ",
            rating:"5",
            id:"1"
        },
        {
            title:"Vikram ",
            genre:" Action",
            language:" Tamil",
            rating:" 4.5",
            id:"2"
        },
        {
            title:" Ponniyin Selvan ",
            genre:"Drama ",
            language:"Tamil,Malayalam,Kanada ",
            rating:" 4.0",
            id:"3"
        },
        {
            title:"  Jai Bhim ",
            genre:" Revolution",
            language:"Tamil ",
            rating:"5 ",
            id:"4"
        },
        {
            title:"Soorarai Pottru",
            genre:"DRAMA",
            language:" Tamil",
            rating:"3 ",
            id:"5"
        }
    
    ])
        
     
   

       
        let handledelete=(id)=>{
            setFav(favourite.filter(x => x.id !=id))

        }

        useEffect( ()=>{
            fetch( 'http://localhost:4000/fav')
            .then(res =>{
                return res.json()
            })
            .then( data =>{
                setFav(data)
            })

        } , [] )
    
    return ( 
        <div className="favs">
            <h1>{title}</h1>
            {favourite.map((data)=>{
                    return(
                       <div className="list">
                            <h1>{data.title}</h1>
                            <p>{data.rating}</p>
                            <p>{data.genre}</p>
                            <p>{data.language}</p>
                            <p>{data.id}</p>
                            <button onClick={()=>handledelete(data.id)}>Delete</button>
                            
                        </div>
                    )
                })

                }
        </div>
     );
}
 
export default Fav;