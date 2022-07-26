import { Avatar, DestDisplay } from "../../Components"
import { Resources } from "../../Resources/Resources"
import { useState } from "react"
import { COLORS } from "../../Constants/colors"

const Destacados = ({scrollRef}) => {
  const [selDest, setSelDest] = useState("")
  const [destLoading, setDestLoading] = useState(false)

  const calch8 = () => {
    //@ts-ignore
    switch(selDest.type) {
      case "youtube": return "500px"
      case "spotify": return "238px"
      default: return "200px"
    }
  }

  return <section id="destacados" className="flexco" ref={scrollRef}>

    <h3 style={{marginTop: 0}} className="section-header"> Cartelera </h3>

    <div className="destacados-div">

      {Resources.Destacados.map((r,index) => {
        return <Avatar key={`dest-${index}`} img={require(`${r.imgUrl}`)} disabled={destLoading}
        alt={r.title}  title={r.title} src={r.url} cb={()=>{ !destLoading &&  setDestLoading(true);setSelDest(r)}}
       />

      })}
     
    </div>

    <div className={`destacados-display`}> 
        <DestDisplay element={selDest} setDestLoading={setDestLoading}/>
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
        border: 2px solid ${COLORS.background};
        width: 1200px;
        height: ${calch8()};
        transition: height 0.35s ease;

      }

   

      `}
    </style>
  </section>
}

export default Destacados