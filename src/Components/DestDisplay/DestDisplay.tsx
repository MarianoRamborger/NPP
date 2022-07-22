import { useState, useEffect } from "react"
import {Spinner} from '../index'

const DestDisplay = ({element}) => {

  const renderTarget = () => {
    switch(element.type) {

      case 'youtube' : return (
        <iframe className="dd-video" width="1200" height="500" 
              src={element.url} title={element.title}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
      )
  
      case 'spotify': return (
      <iframe style={{borderRadius: 12}} title={element.title} 
      src={element.url} 
      width="100%" height="232" frameBorder="0" allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      )
  
      case '': return <div> </div>
      default: return <div> WAWA </div>
    }
  }

  return <Spinner/> || renderTarget()
  

}

export default DestDisplay