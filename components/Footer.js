import styles from "../styles/Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footerwrapper}>
      <div className={styles.footer}>

        <div className="">
          <img
            src="/Wanderlust.jpg"
            alt="Wanderlust"
            className=""
          />
        </div>
        <p>The irresistible urge or desire to travel and explore the world; a strong longing for or impulse toward wandering.</p>
      </div>
    </footer>



  )
}

export default Footer
