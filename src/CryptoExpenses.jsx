import { useLoaderData } from "react-router-dom";
import FilterButton from "./FilterButton.jsx";
import DownloadReport from "./DownloadReport.jsx";
import InputField from "./InputField.jsx";
import CryptoAmountTitle from "./CryptoAmountTitle.jsx";
import CryptoAmountList from "./CryptoAmountList.jsx";


export default function CryptoExpenses(){

    const amountData = useLoaderData() || [];

    return(
        <div className="right-side-details-container"> 
            {/* Filter Button and Amount Title Component*/}
            <div className="filter-and-amount-container">
                <div className="filter-button-container">
                    <FilterButton filterNumber = {6}/>
                </div>

                <CryptoAmountTitle componentTitle="Total Crypto Income" amountOfCrypto={0.0678} />
            </div>

            {/* Amount List and Download Report Component */}
            <div className="amount-list-and-report-container">
                <div className="amount-lists">
                    {amountData.length > 0 ? (
                        amountData.map((data, index) => (
                            <div key={index}>
                                <CryptoAmountList amount={data.amount} date={data.date} />
                            </div>
                        ))
                    ) : (
                        <p>No crypto expenses data available.</p>
                    )}

                    <div className="report-container">
                        <DownloadReport />
                    </div>
                </div>

                {/* Input Field */}
                <div className="input-container">
                    <InputField />
                </div>
            </div>

        </div>
    );
}

export const cryptoExpensesLoader = async ()=>{
    const response = await fetch("http://localhost:5000/crypto")
    return response.json()
}
