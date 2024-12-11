export default function AmountTitle({componentTitle, amountOfMoney}){

    return(
        <div className="amount-title-container">
            <div className="left-content">
                <h1>{componentTitle}</h1>
            </div>

            <div className="right-content">
                <h1>{amountOfMoney}</h1>
                <select name="currency">
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="ngn">NGN</option>
                </select>
            </div>
        </div>
    )
}