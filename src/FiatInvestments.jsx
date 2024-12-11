import { useLoaderData } from "react-router-dom";
import AmountList from "./AmountList.jsx";
import AmountTitle from "./AmountTitle.jsx";
import FilterButton from "./FilterButton.jsx";
import DownloadReport from "./DownloadReport.jsx";
import InputField from "./InputField.jsx";


export default function FiatInvestments(){

    const amountData = useLoaderData() || [];

    return(
        <div className="right-side-details-container"> 
            {/* Filter Button and Amount Title Component*/}
            <div className="filter-and-amount-container">
                <div className="filter-button-container">
                    <FilterButton filterNumber = {8}/>
                </div>

                <AmountTitle componentTitle="Total Fiat Investments" amountOfMoney={980000} />
            </div>

            {/* Amount List and Download Report Component */}
            <div className="amount-list-and-report-container">
                <div className="amount-lists">
                    {amountData.length > 0 ? (
                        amountData.map((data, index) => (
                            <div key={index}>
                                <AmountList amount={data.amount} date={data.date} />
                            </div>
                        ))
                    ) : (
                        <p>No fiat investments data available.</p>
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

export const fiatInvestmentsLoader = async ()=>{
    const response = await fetch("http://localhost:3000/income")
    return response.json()
}
