export default function Notifications() {
  
    return (
      <div className="notification-settings">
        <h1>My Notifications</h1>
        <p>Manage your notifications here:</p>
        <form>
          <label>
            <input type="checkbox" /> I receive a new payment
          </label>
          <label>
            <input type="checkbox" /> I see my weekly/monthly summary reports
          </label>
          <label>
            <input type="checkbox" /> Dividends are received
          </label>
          <label>
            <input type="checkbox" /> There's an update in my account settings
          </label>
          <label>
            <input type="checkbox" /> A new feature is introduced
          </label>
          <label>
            <input type="checkbox" /> There's something that needs my attention
          </label>
          <label>
            <input type="checkbox" /> Expenses outweigh my income
          </label>
          <label>
            <input type="checkbox" /> My portfolio value changes significantly
          </label>
          <label>
            <input type="checkbox" /> A recurring expense is due
          </label>
        </form>
      </div>
    );
  }
  