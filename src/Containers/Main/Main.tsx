
import withMain from "./withMain"
import {Landing, Destacados, Articles, Presentations, Misc, Footer} from '../index'
import {COLORS} from '../../Constants/colors'


const Main = ({sections, scroll, destacados}) => {
  const {landing, articles, presentations, misc, footer,} = sections

    return <div>

      <Landing  scrollRef={landing} scroll={scroll}/>
     
       <Destacados scrollRef={destacados}/>

      <Presentations scrollRef={presentations}/>

      <Articles scrollRef={articles}/>

      <Misc  scrollRef={misc}/>
  

      <Footer scrollRef={footer} scroll={scroll} /> 



    <style>
      {`
      body {
        background-color: ${COLORS.background};
      }
      .section-header {
        font-size: 64px; 
        color: ${COLORS.primary};
      }

      .flexco {
        display: flex;
        flex-flow: column nowrap;
        align-content: center;
        align-items: center;
      }
      
      a {
        color: ${COLORS.primaryDark};
        text-decoration: none;
      }
      a:visited {
        color: ${COLORS.primary};
      }
      a:hover {
        color: ${COLORS.primaryBright}
      }

      @media only screen and (max-width: 999px) {  
        .section-header {
          margin-top: 5px; 
        }
      }

    
      `}
    </style>
    </div>
}

export default withMain(Main)
