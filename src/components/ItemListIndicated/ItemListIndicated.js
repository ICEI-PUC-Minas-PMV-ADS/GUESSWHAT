import './ItemListIndicated.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ItemListIndicated({title, data}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
      };
    return (
    <div className='item-list-indicated'>
        <header>
            <p className='title-item-list-indicated'>
                {title}
            </p>
        </header>
        <Slider {...settings} className="slider">
            {data.map(item => (
                <div>
                    <h3>{item}</h3>
                </div>
            ))}         
        </Slider>
    </div>
    )
}

export default ItemListIndicated;
