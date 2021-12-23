import React, { useState } from "react"
import styles from "../styles/EmailOptin.module.scss"

const EmailOptin = ({ }) => {
  function toggleformstate() {
    setFormstate(!formstate);
  }
  const [formstate,setFormstate] = useState(false);
  return (
    
    <div className={styles.emailoptin}>
      <div className={styles.optinbutton} onClick={() => toggleformstate()}>Keep me posted through the newsletter</div>
      {<iframe width="540" height="305" src="https://1ad00253.sibforms.com/serve/MUIEAI7QpfImfpj0tCP6yELaGBhBRvsPR8uJFjgEztIa2JHVVMXz8NNnkxFXHZ5XP7cjxwf8-MZkZ18s8WppZqFWKGMQhIbkNKaNCGxbXdQszAszZW-Oj9LguLyQksZoIosTpeZ-3xUtt2rI8Syykip8XieQCCzjTCwD_RhRTOpc8ozXEGKLuUHUnHajboo7EZYC8TnWuWuQ19jR" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>}
    </div>
  );
};

export default EmailOptin;
