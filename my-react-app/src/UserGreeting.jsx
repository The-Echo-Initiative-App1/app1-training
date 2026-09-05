import PropTypes from 'prop-types'
function UserGreeting(props){
    const welcomeMessage=<h2 className="welcome-message">welcome {props.username}</h2>
    const loginPrompt=<h2 className="login-prompt"> please log in to continue</h2>
    return(props.isLogged ? welcomeMessage : loginPrompt)

}
UserGreeting.proptypes={
    isLogged: PropTypes.bool,
    username: PropTypes.string
}
UserGreeting.defaultProps={
    isLogged: false,
    username: "guest"
}
export default UserGreeting