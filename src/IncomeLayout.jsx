import { Outlet } from "react-router-dom";
import Income from "./Income.jsx";

export default function IncomeLayout(){

    return(
        <div className="income-layout-container">
            <Income />
            <Outlet />
        </div>
    )
}