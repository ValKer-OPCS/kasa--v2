import aboutDropdown from '@/components/dropdown/dropdownAbout.module.scss'
import Banner from '../../components/banner/banner'
import Dropdown from '../../components/dropdown/dropdown'

const About = () => {
	const dropdownData = [
{
		"id": "1",
		"title": "Fiabilité",
		"text": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
},
{
		"id": "2",
		"title": "Respect",
		"text": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
},
{
		"id": "3",
		"title": "Service",
		"text": "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
},
{
		"id": "4",
		"title": "Sécurité",
		"text": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
}
]
  return (
    <main>
      <Banner image="/aboutBanner.png" imageAlt={'Banniere de la page A Propos'} overlayOpacity={0.3} imgWidth={1600} imgHeight={1600}  />
      {dropdownData.map((dropdown, index) => (
        <Dropdown key={dropdown.id ?? index} title={dropdown.title} styles={aboutDropdown}>
          <p>{dropdown.text}</p>
        </Dropdown>
      ))}
    </main>
  )
};

export default About
