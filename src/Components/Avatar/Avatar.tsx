import { COLORS } from "../../Constants/colors"
const Avatar = ({img,src,alt = "", title="", cb, disabled = false, className=""}) => {

  return <div className={`misc-avatar ${className}`} onClick={cb}>
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
          outline: 5px solid ${ !disabled && COLORS.accent};
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
  </div>
} 

export default Avatar