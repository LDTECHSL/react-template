import "../Common/css/footer.css"
import env from "../env"

export default function Footer(){
    return(
        <div className="footer">
            <span className="version-txt">
                Version : {env.VERSION}
            </span>
        </div>
    )
}
