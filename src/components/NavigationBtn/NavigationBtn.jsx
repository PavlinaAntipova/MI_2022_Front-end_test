import { Link } from "react-router-dom";

export default function NavigationBtn({path, text, img}) {
    return <Link to={path}>
        <div>
            <img src={img} alt={text} />
        </div>
        <div>{text}</div>
    </Link>
}