import { COLORS } from "../../Constants/colors"



const DD = ({title, source, position, setSelected, currentSelected}) => {
  return (
  <div className="dd-div" onClick={()=>{setSelected(position)}}>

  <div className='dd-title'>
      {title}
  </div>

  <div className={`dd-content ${currentSelected === position && 'dd-display'} `}>
  {/* ? I could have used the Youtube api. Feel free to ask me why I didn't! */}
     
        {currentSelected === position ? (
          <div className="dd-vid-container loader"> 
            <iframe className="dd-video"
            src={source} title={title}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            
          </div>
        ) :
        <div className="dd-vid-container">  </div>
        }
  </div>

  <style>
    {
      `
        .dd-div {
          width: 1200px; 
        }

        .dd-title {
          font-size: 26px;
          padding: 15px;
          color: white;
          background-color: ${COLORS.accent};
          border: 2px solid ${COLORS.accent};
          
        }
        .dd-title:hover {
          cursor: pointer;
        }

        .dd-content {
          height: 0px;
          overflow: hidden;
          transition: height 0.35s ease;
         
        }
        .dd-display {
          height: 500px;
          width: 100%;
          
        }
        .dd-vid-container {
          height: 500px;
          width: 1200px;
          background-color: black;
        }
        
        .dd-vid-container iframe {
          height: 500px;
          width: 1200px;
        }

      `
    }
  </style>
  </div>
  )
}


export default DD