import styles from './Button.module.css'
function Button(){

    const styles={
        backgroundColor: "aquamarine",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }
    
    return(
        <button className={styles.button}>click me</button>
    )
}
export default Button