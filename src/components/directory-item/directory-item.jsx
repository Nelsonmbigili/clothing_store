import './directory-item.scss'

const DirectoryItem = ({category})=>{
    const {imageUrl,title} = category;
    return (
        <div className="directory-item-container">
            <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}/>
                <div className="directory-item-body">
                <h2>{title}</h2>
                <p>shop</p>
            </div>
      </div>

    )}

    export default DirectoryItem ;