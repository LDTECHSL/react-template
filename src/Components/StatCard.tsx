import "../Common/css/stat_card.css"

export default function Stat_card(){
    return(
        <div className="stat-outer">
            <div className="stat-header">
                <span className="stat-title">Total Page Views</span>
            </div>
            <div className="stat-content">
                <span className="stat-total">102,485</span>
            </div>
            <div className="space-bar"></div>
            <div className="stat-content">
                <span className="stat-footer">You made an extra 20,000 this week</span>
            </div>
        </div>
    )
}