import DD from "../../Components/DD/DD" //! Raw import in case I need to change the name

const Presentations = ({scrollRef}) => {

  return (

  <section id="presentations" className="flexco" ref={scrollRef}>

    <h3 className="section-header"> Presentaciones </h3>

    <DD title={"📺 ¿Cuanto tiempo deben jugar nuestros peques? (Diario TODO JUJUY 2021"} source={"https://youtu.be/ud8y_6izO_4"}/>
    <DD title={"📺 ¿Qué es la psicología del videojuego? (Universidad Nacional de Córdoba 2021)"} source={"https://youtu.be/wYG3ZT1Sfc0"}/>
    <DD title={"📺 La naturaleza psíquica del juego (El último arte 2021 Chile)"} source={"https://youtu.be/Y04Gt2uyaqs"}/>
    <DD title={"🎙️Toxicidad en videojuegos online (Podcast - Pensar es pensar 2020)"} source={"https://youtu.be/dQ9d9uraUdo"}/>
    <DD title={"📝 Entrevistas laborales (Webinars - ADVA 2019)"} source={"https://youtu.be/IFdcfX_mNFU"}/>
    <DD title={"📝 Sistemas de recompensas y aversión en el diseño de juegos (Webinars - ADVA 2020)"} source={"https://youtu.be/3WyEQm2vxLU"}/>


    <style>
      {
        `
        #presentations {

          margin-top: 100px;
        }
        `
      }
    </style>
  </section>
  )
}

export default Presentations