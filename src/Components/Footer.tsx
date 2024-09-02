import "../Common/css/footer.css"
import env from "../env"
import text from "../Assets/Text/Text.json"

export default function Footer(){
    return(
        <div className="footer">
            <span className="version-txt">
                {text.footer.version}{env.VERSION}
            </span>
        </div>
    )
}
