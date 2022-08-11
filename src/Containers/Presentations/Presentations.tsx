import { DD } from "../../Components"
import { Resources } from "../../Resources/Resources"
import { useState } from "react"


const Presentations = ({scrollRef}) => {

  const [presSelected, setPresSelected] = useState(null)

  return (

  <section id="presentations" className="flexco" ref={scrollRef}>

    <h3 className="section-header"> Presentaciones </h3>

    <div className="pres-div">

    {Resources.Presentaciones.map((pres, index) => {
      return <DD key={`pres-${index}`} 
      title={pres.title} 
      source={pres.source} 
      position={index}
      setSelected={setPresSelected} 
      currentSelected={presSelected}/>
    })}

    </div>

    <style>
      {
        `
        #presentations {
          justify-content: center !important;
          justify-items: center !important;
        }
        .pres-div {  
          transition: height 0.4s ease;
          width: 1200px;
        }
        
        @media only screen and (max-width: 1200px) {  
          .pres-div, .dd-div  {  
            width: 1000px;
          }
          .dd-title {
            font-size: 22px;
            text-overflow: ellipsis;
          }

        }

        @media only screen and (max-width: 999px) {  
          .pres-div, .dd-div  {  
            width: 399px;
          }
          .pres-div {
            margin-top: 20px;
          }

          .dd-title {
            font-size: 16px; 
          }

          .dd-vid-container, .dd-vid-container iframe, .dd-display {
            height: 250px;
            width: 399px;
          }
        }

        @media only screen and (max-width: 382px) {  
          .pres-div, .dd-div  {  
            width: 320px;
          }
          .dd-vid-container, .dd-vid-container iframe, .dd-display {
            height: 200px;
            width: 320px;
          }

        }
        `
      }
    </style>
  </section>
  )
}

export default Presentations