// import { COLORS } from "../../Constants/colors"


const Destacados = ({scrollRef}) => {
  return <section id="destacados" className="flexco" ref={scrollRef}>

    <h3 style={{marginTop: 0}} className="section-header"> Cartelera </h3>

    <div className="destacados-div">
      <div className="spotiframe">
        <iframe style={{borderRadius: 12}} title="Videojuegos adictivos?" src="https://open.spotify.com/embed/episode/6DFaO6qWq9UoaKfoclNHMI?utm_source=generator" width="100%" height="232" frameBorder="0" allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      </div>

      <div className="spotiframe">
        <iframe style={{borderRadius: 12}} title="El juego del desestres" src="https://open.spotify.com/embed/episode/1wbRjWp7uFXNLZv6OSkled?utm_source=generator" width="100%" height="232" frameBorder="0" allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      </div>


    </div>

    <style>
      {`
      #destacados {
        
      }
      
      .destacados-div {
        display: flex;
        flex-flow: row wrap;
        width: 1200px;
        justify-content: space-between; 

      }
      .spotiframe {
        width: 550px;
      }
      `}
    </style>
  </section>
}

export default Destacados