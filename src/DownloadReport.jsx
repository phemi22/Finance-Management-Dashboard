import { Link } from "react-router-dom";
import reportIcon from "./assets/report.svg"

export default function DownloadReport(){

    return(
        <Link>
            <div className="download-report">
                <p>Download Report</p>
                <img src={reportIcon} alt="report" />
            </div>
        </Link>
    )
}