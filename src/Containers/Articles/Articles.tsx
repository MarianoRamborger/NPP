const Articles = () => {
  return <section id='articles' className="flexco">

      <h3 className='section-header'> Leeme en... </h3>

      <div className="articles-div">

      <a href={"https://wg4fest.com/ludorama-revista-videojuegos"} target="_blank" rel="noreferrer">
        <img src={require('./imgs/lud.webp')} alt='Ludorama' />
      </a>
      <a href={"https://fueradelacaja.mitiendanube.com/productos/desayunos-con-disenadores-2-preventa"}  target="_blank" rel="noreferrer">
        <img src={require('./imgs/dis.jpeg')} alt='Desayuno con diseñadores' />
      </a>

      </div>
  
    <style>
    {`
      #articles {
        margin-top: 40px;
       
      }

      .articles-div {
        display: flex;
        flex flow: row wrap;
        justify-content: center;
        width: 1200px;
        justify-content: space-between; 
      }

      .articles-div img {
        width: 400px;
        -webkit-box-shadow: 0px 0px 2px 1px #000000; 
        box-shadow: 0px 0px 2px 1px #000000;
        border-radius:  5px;
      }

      .articles-div img:hover {
        cursor: pointer;
        animation: grow-shadow 0.20s forwards ;
        animation-delay: 0s;
      }

      @keyframes grow-shadow {
   
        100% {
          -webkit-box-shadow: 0px 0px 16px 3px #000000; 
          box-shadow: 0px 0px 16px 3px #000000;
        }
      }
    `}
    </style>
  </section>

}

export default Articles