import { Avatar, DestDisplay } from "../../Components"
import { Resources } from "../../Resources/Resources"
import { useState } from "react"

const Destacados = ({scrollRef}) => {
  const [selDest, setSelDest] = useState("")
  const [loading, setLoading] = useState(false)

  const calch8 = () => {
    //@ts-ignore
    switch(selDest.type) {
      case "youtube": return "500px"
      case "spotify": return "300px"
      default: return "200px"
    }
  }

  return <section id="destacados" className="flexco" ref={scrollRef}>

    <h3 style={{marginTop: 0}} className="section-header"> Cartelera </h3>

    <div className="destacados-div">

      {Resources.Destacados.map((r,index) => {
        return <Avatar key={`dest-${index}`} img={require(`${r.imgUrl}`)} disabled={loading}
        alt={r.title}  title={r.title} src={r.url} cb={()=>{ !loading && setSelDest(r)}}
       />

      })}
     
    </div>

    <div className={`destacados-display`}> 
        <DestDisplay element={selDest} />
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

      .destacados-display {
        margin: 0 24px;
        width: 1200px;
        height: ${calch8()};
        transition: height 0.35s ease;
        border: 2px solid red;
      }

      `}
    </style>
  </section>
}

export default Destacados