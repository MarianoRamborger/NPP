import { useCtxValue } from "../../Context/context"

const withMain = Component  => props => {
    const [context, dispatch] : any = useCtxValue()

    const mainActions = {
        context, dispatch,
        ...props,
        
    }

    return <Component {...mainActions} />
}

export default withMain