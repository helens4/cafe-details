import { Link } from 'react-router-dom';
import './Thumbnail.css';


function Thumbnail({ image, title }) {
    return (
        <Link to={"/details/" + title} className="thumbnail-component"
        >
            <div>
                <img src={image} alt={title} />
            </div>
            <p>{title}</p>
        </Link>
    );
}
export default Thumbnail;