const Home = () => {
    let images=[
        {img:"https://wallpapercave.com/dwp1x/wp11372848.jpg"},
        {img:"https://stat1.bollywoodhungama.in/wp-content/uploads/2021/08/Chup-5-306x393.jpg"},
        {img:"https://wallpapercave.com/dwp1x/wp5711404.jpg"},
        {img:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/Ajith_1200x768.jpeg?F18fGZ8epvkyMBLUT9jV._JYsczgriQ1&size=770:433"},
        {img:"https://cdn.cinematerial.com/p/297x/px8heirc/ponniyin-selvan-part-one-indian-movie-poster-md.jpg?v=1646313123"},
        {img:"https://stat1.bollywoodhungama.in/wp-content/uploads/2022/02/Valimai-1-558x800.jpeg"},
        {img:"https://th.bing.com/th?q=Spartacus+Season&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"},
        {img:"https://th.bing.com/th/id/OIP.qr-etWRf6jOx8sOYL1iMjgHaLH?w=203&h=304&c=7&r=0&o=5&dpr=1.5&pid=1.7"}
        
    ]
    return ( 
        <div className="home">
            <div className="poster">
                <img  width="1400" height="500" src="https://www.bollywoodhungama.com/wp-content/uploads/2021/08/Chup.jpg"/>
            </div>
            <div className="movies_list">
                {images.map((data)=>{
                    return(
                        <img width="300" height="250" src={data.img} alt=""/>
                    )
                })

                }
            </div>    
        </div> 
    );
}
 
export default Home;