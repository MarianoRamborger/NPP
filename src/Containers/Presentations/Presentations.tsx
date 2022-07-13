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
      return <DD title={pres.title} 
      source={pres.source} 
      position={index}
      setSelected={setPresSelected} 
      currentSelected={presSelected}/>
    })}

    
    
    {/* <DD title={} source={}/> */}
    </div>

    <style>
      {
        `
        #presentations {
          margin-top: 100px;
        }
        .pres-div {  
          transition: height 0.4s ease;
       
          width: 1200px;
        }

     

        `
      }
    </style>
  </section>
  )
}

export default Presentations