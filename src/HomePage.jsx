import { Outlet } from "react-router-dom";
import SportsNavbar from "./SportsNavbar";

export default function HomePage(props) {
    return <>
        <SportsNavbar />
        <Outlet />
    </>
}