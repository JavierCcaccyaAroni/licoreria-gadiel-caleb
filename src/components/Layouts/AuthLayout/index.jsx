import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectorUser } from "../../../selectors/userSelector";

export default function AuthLayout() {

  const user = useSelector(selectorUser);

  if (user) return <Navigate to="/addproducts" />

  return (
    <>
      <Outlet />
    </>
  )
}