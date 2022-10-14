const Footer = () => {
    let footer_links=[{link:"terms and privacy notice"},
    {link:"send us feedback"},
    {link:"Help"}]
    return ( 
        <div className="footer">
            <div className="footer_logo">
                <img width="100"src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/web_footer_logo._CB462908456_.png " alt=" "/>
            </div>
            <div className="footer_links">
                {footer_links.map((data)=>{
                    return(
                        <a href="">{data.link}</a>
                    )
                }
                )}
            </div>
            <div className="footer_desc">
                <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
            </div>
            
        </div>
     );
}
 
export default Footer;