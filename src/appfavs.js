const Add_favs = () => { 
    return ( 
        <div className="addFavs">
            <div className="form">
                <img  height="100" width="200"src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/web_footer_logo._CB462908456_.png" alt="" />
                <form action="">
                    <input type="text" placeholder="Title"/>
                    <input type="text" placeholder="Genre"/>
                    <input type="text" placeholder="Language"/>
                    <input type="number" min="0"  max="10" placeholder="Rating"/>
                    <button>Add</button>
                </form>
            </div>
            <div className="content">
                <h1>Add Your Favourite<br></br> Movies And <br></br> TV Shows.</h1>
            </div>
        </div>
    );
}
 
export default Add_favs;