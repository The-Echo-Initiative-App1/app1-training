import profilePic from '../assets/Profile.jpg';
function Card(){
    return(
        <div className="card">
            <img  className="img"src={profilePic} alt="profilePicture" ></img>
            <h2 class="cardTitle">Yasmine</h2>
            <p class="cardText">A high school student -MAth major</p>

        </div>
    );

}
export default Card;