import  React , {useState}from "react"
import './masonryGallery.scss';
import RichText from "../richText/richText";
import Masonry from 'react-masonry-css'


function MasonryGallery({data}) {
    const [imageUrl, setImageUrl] = useState(null)
    const [activePopup, setactivePopup] = useState(false)
    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        700: 2,
        500: 1
      };

    function getImageUrl(e) {
        e.stopPropagation()
        const imageurl = e.currentTarget.dataset.url;
        setImageUrl(imageurl)
        setactivePopup(true)
        document.body.classList.add('active-popup')
    }

    function hidePopup () {
        setImageUrl()
        setactivePopup(false)
        document.body.classList.remove('active-popup')
    }
    const imagesData =[...data.images]
    return(
        <section className="section-gallery"  style={{backgroundColor: data.bgColor ?  data.bgColor : '' }} >
            <div className="container">
                {data.title &&  <h2 className="title" style={{color: data.colorText ? data.colorText : '#0000' }}>{data.title}</h2> }
                {data?.description &&  <RichText data={data?.description} colorText={ data.colorText}/>}
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {imagesData.map((image) => (
                    <div className="image-masonry" key={image.id}>
                        <img src={image.url} alt={image.title} />
                        <div className="icon-wrapper" data-url={image.url} onClick={(e)=> {getImageUrl(e)}}>
                            <span className="icon" >&#x1F50E;&#xFE0E;</span>
                        </div>
                        
                    </div>
                    ))}
                </Masonry>
            </div>
            <div className={activePopup? 'popup-wrapper active' : 'popup-wrapper'}>
                
                <div className="popup-body">
                    <span onClick={hidePopup}> &#9587;</span>
                      <div className="popup-image">
                            <img src={imageUrl} alt='our project' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MasonryGallery;

