export default function NotificationItem({ notification }) {
    return (
        <li className="notification-item">
            <div className="notification-header">
                <h3>{notification.title}</h3>
                <span>{notification.timestamp}</span>
            </div>
            <p>{notification.description}</p>
        </li>
    );
}
