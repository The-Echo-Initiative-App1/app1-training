import PropTypes from 'prop-types'
function UserGreeting(props){
    const welcome= <h2 className="welcome">Welcome {props.username}</h2>
    const login=<h2 className="login">Please log in to continue</h2>
    return(props.isLoggedIn ?welcome:login);

}
UserGreeting.prototype={
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps={
    isLoggedIn:false,
    username:"guest",

}
export default UserGreeting