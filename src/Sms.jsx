import { useState } from "react";
import NotificationList from "./NotificationList";

const Sms = () => {

    const [filter, setFilter] = useState("All")

    const notifications = [
        {
            id: 1,
            title: "Bonus Payment",
            description: "$1500 bonus added to your account",
            timestamp: "yesterday",
            type: "income",
        },
        {
            id: 2,
            title: "Utility Bill",
            description: "$120 paid for electricity bill",
            timestamp: "1 day ago",
            type: "expense",
        },
        {
            id: 3,
            title: "Dividend Payout",
            description: "$11,350 received from your Apple (AAPL) holdings",
            timestamp: "3 days ago",
            type: "income",
        },
        {
            id: 4,
            title: "Consulting Fee",
            description: "$3,000 payment received for consulting services",
            timestamp: "4 days ago",
            type: "income",
        },
        {
            id: 5,
            title: "Consulting Fee",
            description: "$5,000 payment received for consulting services",
            timestamp: "7 days ago",
            type: "income",
        },
        {
            id: 6,
            title: "Groceries Purchase",
            description: "$180 spent on weekly shopping",
            timestamp: "2 weeks ago",
            type: "expense",
        },
    ];

    const filteredNotifications =
        filter === "All"
            ? notifications
            : notifications.filter((notification) => notification.type === filter.toLowerCase());

    return (
        <div>
            <header className="header">
                <h1>SMS Notifications</h1>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                </select>
            </header>
            <NotificationList notifications={filteredNotifications} />
        </div>
    )    
};

export default Sms;
