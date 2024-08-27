import styles from "./styles.module.scss";

const Hero = () => {
    return (
        <section className={styles.heroContainer}>
            <div className={styles.text}>Immerse yourself in a world where culinary mastery is elevated to an art form.</div>
            <button className={styles.button}>Reservation</button>      
        </section>
    )
}

export default  Hero;