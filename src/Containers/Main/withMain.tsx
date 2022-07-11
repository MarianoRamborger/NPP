import { useCtxValue } from "../../Context/context"
import { useRef } from "react"

const withMain = Component  => props => {
    const [context, dispatch] : any = useCtxValue()
    

    const landing = useRef(null)
    const destacados = useRef(null)
    const presentations = useRef(null)
    const articles = useRef(null)
    const misc = useRef(null)
    const footer = useRef(null)

    const scroll = (target) => {
  
      let ref = getRef(target)
      ref.current.scrollIntoView({
        behavior: 'smooth'
      })
    }

    const getRef = (target) => {
      
      switch(target) {
        case 'landing':
          return landing
        case 'destacados':
          return destacados;
        case 'presentations':
          return presentations
        case 'articles':
          return articles
        case 'misc':
          return misc
        case 'footer':
          return footer
        default:
          return landing;
      }
    }

    let sections = { landing, articles, presentations, misc, footer, destacados}



    const mainActions = {
        context, dispatch, sections, scroll, destacados,
        ...props,
        
    }

    return <Component {...mainActions} />
}

export default withMain