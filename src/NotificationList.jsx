import NotificationItem from "./NotificationItem";

export default function NotificationList({ notifications }) {
    return (
        <ul className="notification-list">
            {notifications.map((notification) => (
                <NotificationItem key={notification.id} notification={notification} />
            ))}
        </ul>
    );
}
