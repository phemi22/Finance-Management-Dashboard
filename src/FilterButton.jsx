import filterIcon from "./assets/filter.svg"
import {Link} from "react-router-dom"

export default function FilterButton({filterNumber}){

    return(
        <div>
            <Link>
                <div className="filter-income-button">
                    <p>Filter Applied: {filterNumber}</p>
                    <img src={filterIcon} alt="filter" />
                </div>
            </Link>          
        </div>
    )
}