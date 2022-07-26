import { useState, useEffect } from "react"
import {Spinner} from '../index'

const DestDisplay = ({element, setDestLoading}) => {
  const [loading,setLoading] = useState(null)

  useEffect(()=>{
    if (element) {
      setLoading(true)
    }

  },[element])

  const renderTarget = () => {
    switch(element.type) {
      
      case 'youtube' : return (
        <div className="embedded-wrapper" key={element.title} > 
          <Spinner loading={loading} setLoading={setLoading} setDestLoading={setDestLoading}/>
        <iframe className="dd-video" width="1200" height="500" 
              src={element.url} title={element.title}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        </div>
      )
  
      case 'spotify': return (
      <div className="embedded-wrapper" key={element.title}> 
     <Spinner loading={loading} setLoading={setLoading} setDestLoading={setDestLoading} />
      <iframe style={{borderRadius: 12}} title={element.title} 
      src={element.url} 
      width="100%" height="232" frameBorder="0" allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      </div>
      )
  
      default: return null
    }
  }

  return  <> 
  {renderTarget()}
  <style> 
    {`
       .embedded-wrapper iframe {
        visibility: ${loading ? 'hidden !important;' : "visible"} 
        
      }
    `}
  </style>
  </>
  

}

export default DestDisplay