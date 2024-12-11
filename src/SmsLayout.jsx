import { Outlet } from "react-router-dom";

export default function SmsLayout() {
    return (
        <div className="sms-layout-container">
            <header className="header">
                {/* <h1>SMS Notifications</h1>
                <select>
                    <option value="All">All</option>
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                </select> */}
            </header>
            <Outlet />
        </div>
    );
}
