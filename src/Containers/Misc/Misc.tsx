
import { Resources } from '../../Resources/Resources';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper';
import 'swiper/css';

const Misc = ({scrollRef}) => {
  return (

    <section id="Misc" ref={scrollRef}>

      <div className="misc-div flexco">

        <h3 className="section-header"> Actividades </h3>

      <div className='carousel-div'>
        <Swiper className="mySwiper"
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={true}
        >

        {Resources.Misc.map((res,index) => {
          return <SwiperSlide
          >
            <img key={`miscimg-${index}`}
            src={require(`${res.imgUrl}`)} 
            alt={res.title}/>
       
          </SwiperSlide>

        })}

        </Swiper>
      </div>

      </div>

      <style>
        {`
          .carousel-div {
            width: 1200px;
          }
          .swiper-slide img {
            display: block;
            width: 100%;
            height: 800px ;
            border-radius: 20px;
            object-fit: cover;
          }

      
        `
        }
      </style>

    </section>
  )
}

export default Misc