import profilePic from './assets/echo.jpg'
function Card(){
    return(
        <div className="card">
            <img className="card-img" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">anna</h2>
            <p className="card-text">play video games</p>
        </div>
    )
}
export default Card 