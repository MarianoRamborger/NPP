import { Avatar, DestDisplay } from "../../Components"
import { Resources } from "../../Resources/Resources"
import { useState } from "react"
import { COLORS } from "../../Constants/colors"

const Destacados = ({scrollRef}) => {
  const [selDest, setSelDest] = useState({type: ''})
  const [destLoading, setDestLoading] = useState(false)

  const calch8 = () => {
    //@ts-ignore
    switch(selDest.type) {
      case "youtube": return "600px"
      case "spotify": return "238px"
      default: return "0px"
    }
  }
  

  return <section id="destacados" className="flexco" ref={scrollRef}>

    <h3 style={{marginTop: 0}} className="section-header"> Cartelera </h3>

    <div className="destacados-div">

      {Resources.Destacados.map((r,index) => {
        return <Avatar key={`dest-${index}`} img={require(`${r.imgUrl}`)} disabled={destLoading}
        alt={r.title}  title={r.title} src={r.url} cb={()=>{ !destLoading &&  setDestLoading(true);setSelDest(r)}}
        className={"avatar-resp"}
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
        margin-top: 48px;
      }
      .spotiframe {
        width: 550px;
      }

      .destacados-display {
        margin-top: 48px;
        border: 2px solid ${COLORS.background};
        width: 1200px;
        height: ${calch8()};
        transition: height 0.35s ease;
      }

      
      ${selDest.type === "youtube" ? `
        .destacados-display iframe { 
          height: 600px;
        }` : ''}
      

        @media only screen and (max-width: 1200px) {
        .destacados-div, .destacados-display {
          width: 1000px;
        
        }
        
        ${selDest.type === "youtube" ? `
        .destacados-display iframe { 
          height: 450px;
        }` : ''}

        .avatar-resp img {
          width: 200px;
          height: 200px;
        }

        .avatar-resp p {
          font-size: 20px;
        }
        
      }

      @media only screen and (max-width: 999px) {   
          
        .destacados-div, .destacados-display  {
          width: 399px;
        }

        .section-header {
          padding-top: 10px;
          margin-bottom: 0px;
        }

        .section-header {
          font-size: 48px !important;
        }

        ${selDest.type === "youtube" ? `
        .destacados-display iframe, .destacados-display { 
          height: 250px;
        }` : ''}


        .avatar-resp img {
          width: 100px;
          height: 100px;
        }
        .avatar-resp p {
          display: none;
        }
      }

      @media only screen and (max-width: 382px) { 
        .destacados-div, .destacados-display  {
          width: 320px;
        
          margin-left: 0px;
          padding: 0px;
        }
        .avatar-resp img {
          width: 90px;
          height: 90px;
        }

        .section-header {
          font-size: 40px !important;
        }

        ${selDest.type === "youtube" ? `
        .destacados-display iframe, .destacados-display { 
          height: 200px;
        }` : ''}
        
        .avatar-resp p {
          display: none;
        }
        

      }


   

      `}
    </style>
  </section>
}

export default Destacados