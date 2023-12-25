
import ShowingBusinessDetails from "../showingBusinessDetails/ShowingBusinessDetails";
import BusinessServices from "../../stores/businessServices";
import LogIn from "../logIn/Login";
import { Outlet ,Link} from "react-router-dom";
import { observer } from "mobx-react";
import { useEffect } from "react";
import businessServices from "../../stores/businessServices";
const Admin = observer(() => {
  useEffect(() => {
if(localStorage.getItem("isLogin")==='true')   
BusinessServices.setIsLogin(true)
}, [])
  return (
    <>
     <ShowingBusinessDetails></ShowingBusinessDetails>
     {BusinessServices.isLogin?
     <> 
           <Link to="./services">services</Link>
        |  <Link to="./meeting">meeting</Link>
      <Outlet />
      </>:<LogIn/>}
    </>
  )
})
 export default Admin