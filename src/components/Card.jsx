import "./styles/Card.css";
import avaImage from '../assets/images/ava.png';
function Card(props){
    const postArray = props.postArray;
    const cardArray = postArray.map(data => (
        <div className = "card">
            <div className="card-description">
                <div className="card-description-author">
                    <img src={avaImage} alt="Avatar" className="ava-image" />
                    <p>
                        <strong>{data.name}</strong> in <strong>{data.topic}</strong> · {data.date}
                    </p>
                </div>
                <div className="card-description-content">
                    <p className="card-description-content-title">
                        {data.title}
                    </p>
                    <p className="card-description-content-text">
                        {data.text}
                    </p>
                </div>
                <div className="card-description-information">
                    <div className="card-description-information-left">
                        <div className="card-description-information-left-category">{data.category}</div>
                        <p className="card-description-information-left-data">12 min read · Selected for you</p>
                    </div>
                    <div className="card-description-information-right">
                        <div className="card-description-information-right-rectangle"></div>
                        <div className="card-description-information-right-rectangle"></div>
                        <div className="card-description-information-right-rectangle"></div>
                    </div>
                </div>
            </div>
            <div className="card-image">
            </div>
        </div>
    ));
    
    return(
        cardArray
    );
}
export default Card;