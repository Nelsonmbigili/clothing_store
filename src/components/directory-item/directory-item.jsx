import './directory-item.scss';
import { useNavigate } from 'react-router';

const DirectoryItem = ({category})=>{
    const {imageUrl,title, route} = category;
    const navigate = useNavigate();
    const onNavigateHandler = () => navigate(route);
    return (
        <div className="directory-item-container" onClick={onNavigateHandler}>
            <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}/>
                <div className="directory-item-body">
                <h2>{title}</h2>
                <p>shop</p>
            </div>
      </div>

    )}

    export default DirectoryItem ;