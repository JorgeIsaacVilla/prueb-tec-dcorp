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
  const [personajes, setPersonajes] = useState([]);
  const [selectedPersonaje, setSelectedPersonaje] = useState(null);

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
        /*console.log(res.data.data.results);*/
      })
      .catch((error) => console.log(error));
  }, []);
  /*console.log(personajes);*/

  const handleAvatarClick = (personaje) => {

    const tarjetPersonaje = document.querySelector(".tarjetPersonaje");
    tarjetPersonaje.classList.remove("appear");

    setSelectedPersonaje(personaje);
  };

  const desappearTarjet = () => {
    const closeTarjet = document.querySelector(".close");
    const tarjetPersonaje = document.querySelector(".tarjetPersonaje");
    closeTarjet.addEventListener("click",()=>{
      tarjetPersonaje.classList.add("appear");
    });
  };

  return (
    <>
    <div className='tarjetPersonaje appear'>
      <div className="dataAvatar-tarjet">

        <h2>{selectedPersonaje ? selectedPersonaje.name : "nombre del personaje"}</h2>
        {selectedPersonaje && selectedPersonaje.thumbnail && (
          <img src={`${selectedPersonaje.thumbnail.path}.${selectedPersonaje.thumbnail.extension}`} alt={selectedPersonaje.name} />
          )};
        <p>{selectedPersonaje ? selectedPersonaje.description : "descripción del personaje"}</p>
        <a href={selectedPersonaje ? selectedPersonaje.resourceURI : "descripción del personaje"}>Más información: {selectedPersonaje ? selectedPersonaje.resourceURI : " URL del personaje"}</a>

    </div>
      <button onClick={desappearTarjet} className='close'>CERRAR</button>
    </div>

      <Swiper
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper desk"
      >
        {personajes.map((per) => (
          <SwiperSlide key={per.id} className="tarjetSwiper">
            <div className="dataAvatar" onClick={() => handleAvatarClick(per)}>
              <div className="nameAvatar">
                <h3>{per.name}</h3>
              </div>
              <div className="avatarImage">
                <div className='frame'></div>
                <img src={`${per.thumbnail.path}.${per.thumbnail.extension}`} alt={per.name} />
              </div>
              <div className="infoAvatar">
                <p>Comics:</p>
                <h3>{per.series.available}</h3>
              </div>
              <div className="infoAvatar">
                <p>Películas:</p>
                <h3>{per.stories.available}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper phone"
      >
        {personajes.map((per) => (
          <SwiperSlide key={per.id} className="tarjetSwiper">
            <div className="dataAvatar" onClick={() => handleAvatarClick(per)}>
              <div className="nameAvatar">
                <h3>{per.name}</h3>
              </div>
              <div className="avatarImage">
                <div className='frame'></div>
                <img src={`${per.thumbnail.path}.${per.thumbnail.extension}`} alt={per.name} />
              </div>
              <div className="infoAvatar">
                <p>Comics:</p>
                <h3>{per.series.available}</h3>
              </div>
              <div className="infoAvatar">
                <p>Películas:</p>
                <h3>{per.stories.available}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>       
    </>
  );
};
