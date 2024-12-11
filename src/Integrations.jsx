export default function Integrations() {
    return (
      
      <div className="integration-settings">
        <h1>My Integrations</h1>
        <p>Connect your bank account and crypto wallet for easy tracking:</p>
        <div className="integration-item">
          <h2>Bank</h2>
          <p>Add your bank accounts to manage and track your finances.</p>
          <button>Disconnect</button>
        </div>
        <div className="integration-item">
          <h2>Crypto Wallet</h2>
          <p>Link your crypto wallet to track your digital assets.</p>
          <button>Connect</button>
        </div>
      </div>
    );
  }
  