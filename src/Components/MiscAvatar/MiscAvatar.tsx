import { COLORS } from "../../Constants/colors"
const MiscAvatar = ({img,src,alt = "", title=""}) => {

  return <a className="misc-avatar" href={src} target="_blank" rel="noreferrer"  >
      <img src={img} alt={alt} />
      <p> {title} </p>

    <style>
      {`
      .misc-avatar img {     
          border-radius: 300px;
          width: 250px;
          height: 250px;
        }
      .misc-avatar img:hover {
          outline: 5px solid ${COLORS.accent};
          cursor: pointer;
        }
      .misc-avatar p {
        font-size: 24px;
        color: ${COLORS.primary};
        text-align: center;
        font-weight: bold;
      }
      
      `}
    </style>
  </a>
} 

export default MiscAvatar