import { Outlet } from "react-router-dom";
import SportsNavbar from "../SportsNavbar";
import '../../App.css';

export default function HomePage(props) {
    return <>
        <SportsNavbar />
        <br/>
        <Outlet />
    </>
}