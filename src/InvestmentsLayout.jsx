import { Outlet } from "react-router-dom";
import Investments from "./Investments";

export default function InvestmentsLayout(){

    return(

        <div className="income-layout-container">
            <Investments />
            <Outlet />
        </div>
    )
}