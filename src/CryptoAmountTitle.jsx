
export default function CryptoAmountTitle({componentTitle, amountOfCrypto}){

    return(
            <div className="amount-title-container">
            <div className="left-content">
                <h1>{componentTitle}</h1>
            </div>

            <div className="right-content">
                <h1>{amountOfCrypto}</h1>
                <select name="crypto">
                    <option value="usd">BTC</option>
                    <option value="eur">ETH</option>
                    <option value="ngn">BNB</option>
                </select>
            </div>
        </div>
    )
}