import Cookie from "js-cookie"
import { Route,Redirect } from "react-router-dom"

const ProtectedRoute = (props)=>
{
    if (Cookie.get("JWT_TOKEN")===undefined)
    {
        return <Redirect to="/" />
    }

    return <Route {...props} />
}


export default ProtectedRoute