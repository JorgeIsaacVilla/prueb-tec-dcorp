//https://gateway.marvel.com:443/v1/public/characters?apikey=1c2d4212924ae11ca5d67594b1762bdf
//key publica: 1c2d4212924ae11ca5d67594b1762bdf
//key privada: fd93eee8548fd6961ee6e795cb453322cd23bc78
//ts: 1

//md5: 11c2d4212924ae11ca5d67594b1762bdffd93eee8548fd6961ee6e795cb453322cd23bc78
//resultado md5 (hash): 661fb1840b87a56040614df1ba6d94c5
import md5 from 'md5';

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import '../style.css';

import axios from "axios";

export const ThirdComponent = () => {
const [personajes, setPersonajes] = useState([])

useEffect(() => {
  const publicKey = "1c2d4212924ae11ca5d67594b1762bdf";
    const privateKey = "fd93eee8548fd6961ee6e795cb453322cd23bc78";
    const timestamp = Date.now().toString();
    const hash = md5(timestamp + privateKey + publicKey).toString();

    const url = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

    axios
    .get(url)
    .then((res) => {
      setPersonajes(res.data.data.results);
      console.log(res.data.data.results);
    })
    .catch((error) => console.log(error));
}, []); 

    console.log(personajes)

  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  };
 
  return (
    <>
    <Swiper
      onSwiper={setSwiperRef}
      slidesPerView={5}
      centeredSlides={true}
      spaceBetween={30}
      pagination={{
        type: "fraction",
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper">

      {personajes.map(per =>(

            <SwiperSlide key={per.id} className="tarjetSwiper">
                <div className="dataAvatar">
                    <div className="nameAvatar">
                    <h3> {per.name} </h3>
                    </div>
                    <div className="avatarImage">
                      <div className='frame'>
                      <img src={`${per.thumbnail.path}.${per.thumbnail.extension}`} />
                      </div>
                      
                    </div>
                    <div className="infoAvatar">
                      <p>Comics:</p>
                      <h3> {per.series.available} </h3>
                    </div>
                    <div className="infoAvatar">
                      <p>Películas:</p>
                      <h3>{ per.stories.available}</h3> 
                    </div>
                </div>
            </SwiperSlide>

        ))
        
      }
    </Swiper>
  </>
  )
}
