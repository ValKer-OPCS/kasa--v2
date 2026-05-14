import styles from './styles.module.scss'
import Banner from '../components/banner/banner'
import CardContainer from '../components/cardContainer/CardContainer'

const Home = () => {
  return (
    <main>
      <Banner image="/homeBanner.png" imageAlt={'Banniere du site'} overlayOpacity={0.6} imgWidth={1600} imgHeight={1600} >
        <div className={styles.text_container}>
          <p>Chez vous,&nbsp;</p>
          <p>partout et ailleurs</p>
        </div>
      </Banner>
      <CardContainer />
    </main>
  )
}
export default Home