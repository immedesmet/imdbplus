import styles from "../styles/NavigationMobile.module.scss"
import React, { useState } from "react"

const NavigationMobile = ({ locale, locales }) => {

  const resolveMovies = {
    en: 'Continents',
    nl: 'Continenten',
  }
  const resolvePeople = {
    en: 'Countries',
    nl: 'Landen',
  }
  const resolveNews = {
    en: 'News',
    nl: 'Nieuws',
  }
  const resolveMerchandise = {
    en: 'Shop',
    nl: 'Winkel',
  }
  function togglenav() {
    setNavstate(result.data.stories);
  }

  const [navstate,setNavstate] = useState(false);
  //setNavstate(true);

  const defaultLocale = locale === 'en' ? '/' : `/${locale}/`
  return (
    <header className={styles.navigationmobilewrapper}>
      <nav className={styles.navigationmobile} role="navigation">

        <div className={styles.navlogo}>
          <a href="/">
            <img
              src="/Wanderlust.jpg"
              alt="Wanderlust Logo"
              className=""
              width="250" height="40"
            />
          </a>
        </div>
        <div className={styles.hamburger} onClick={() => setNavstate(!navstate)}><div className={styles.line}></div><div className={styles.line}></div><div className={styles.line}></div></div>
        {navstate&&<div className={styles.navlinkswrapper}>
          <div className={styles.navlinks}>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/movies`} className={styles.movie}>{resolveMovies[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/people`} className={styles.personality}>{resolvePeople[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/news`} className={styles.newsitem}>{resolveNews[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/shop`} className={styles.product}>{resolveMerchandise[locale]}</a>
            </div>
          </div>
          <div className={styles.navlocales}>
            {
              locales.map(loc => {
                return (<div className={styles.navlocale} key={loc}>
                  <a href={`/${loc}`} className={`${locale === loc ? "selected" : ""}`}>{loc}</a>
                </div>)
              })
            }
          </div>
        </div>}

      </nav>
    </header>
  )
}

export default NavigationMobile
