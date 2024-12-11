import { Outlet } from "react-router-dom";
import Expenses from "./Expenses";

export default function ExpensesLayout(){

    return(
        <div className="income-layout-container">
            <Expenses />
            <Outlet />
        </div>
    )
}