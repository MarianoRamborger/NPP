
const DD = ({title, source}) => {
  return (
  <div className="dd-div">

  <div className='dd-title'>
    <a href={source} target="_blank" rel="noreferrer">
      {title}
    </a>
  </div>

  <style>
    {
      `
        .dd-title {
          font-size: 26px;
          margin: 20px 0px;

        }
      `
    }
  </style>
  </div>
  )
}


export default DD