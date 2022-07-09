import { COLORS } from "../Constants/colors"

const Button = ({ type = 'primary', width=0, ...props}) => {

  return <button {...props} className={`btn-${type} ${props.className ? props.className : ''}`} >
    {props.children}
    <style>{`

  .btn-primary {
    font-size: clamp(25px, 30px, 45px);
    background-color: ${COLORS.primary};
    border: 2px solid ${COLORS.primary};
    color: ${COLORS.textPrimary};
    padding: 12px 24px;
    border-radius: 15px;
    margin: 0px 10px;
    transition: background-color 450ms linear, border 450ms linear;
    transition-timing-function: ease-in-out;
    width: ${width||450}px;
    cursor: pointer;
  
  }

  .btn-primary:hover  {
    background-color: ${COLORS.accent};
    border: 2px solid ${COLORS.accent}
  }

  .btn-secondary , .btn-tertiary {
    font-size:  clamp(25px, 30px, 45px);
    transition: background-color 250ms linear, border 250ms linear;
    transition-timing-function: ease-in-out;
    border-radius: 5px;
    padding: 5px 15px;
    margin: 0px 20px;
    cursor: pointer;
    width: ${width||125}px
  }

  .btn-secondary {
    background-color: ${COLORS.primary};
      border: 2px solid ${COLORS.primary};
      color: ${COLORS.textPrimary};
      
  }

  .btn-secondary:hover {
    background-color: ${COLORS.accent};
    color: ${COLORS.primary};

  }

    
  .btn-tertiary {
    background-color: transparent;
    border: 2px solid ${COLORS.primary};
    color: ${COLORS.textPrimary};
  }

  .btn-tertiary:hover {
    background-color: ${COLORS.primarySoft};
    border: 2px solid ${COLORS.primarySoft};

  }



  
  `}</style>
  </button>



}



export default Button