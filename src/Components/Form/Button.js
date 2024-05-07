import styles from '../../styles/compontentes/Button.module.css';


function Button({text}){

    return (
        <button className={styles.botao}>{text}</button>
    )
}

export default Button