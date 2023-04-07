import { Link } from "react-router-dom"

const AboutText: React.FC = () => {
  return (
    <>
        <h1 className="font-semibold text-xl">Infos – ImmoFab Société Immobilière à Québec</h1>
        <p>Vous avez un projet de maison, de jumelé ou de condo bien précis en tête et cherchez un entrepreneur en construction expérimenté qui possède toutes les qualifications requises pour réaliser le rêve de votre vie? Une entreprise soucieuse des détails et qui a fait de la satisfaction de sa clientèle sa priorité au fil des ans? Vous avez frappé à la bonne porte.</p>
        <p>Spécialisé en construction résidentielle en tous genres à Québec, le groupe ImmoFab saura concrétiser toutes vos idées de construction, des plus petites aux plus grandes. Fondée en 2012 par Marcel Bouchard et Pierre Gagné, deux entrepreneurs en construction possédant chacun plus de 25 ans d’expérience, l’entreprise vous offrira un produit de la plus haute qualité, personnalisé en fonction de vos besoins et de votre budget.</p>
        <p>Vous n’avez pas de plan précis en tête, mais aimeriez profiter de l’expertise et du savoir-faire unique d’une compagnie qui ne cesse d’innover dans le secteur de la construction résidentielle à Québec?</p>
        <p>L’entreprise possède également une vaste sélection de maisons à vendre à Québec et à Sillery, déjà prêtes à vous accueillir ou encore en chantier, sur le point de voir le jour. Se déclinant en une multitude de modèles des plus tendance, les maisons unifamiliales et les jumelés à vendre à Québec valent également la peine qu’on s’y attarde.</p>
        <p>ImmoFab se démarque en outre par la qualité et le design de ses propriétés et par son service à la clientèle irréprochable. En effet, sachant que la construction d’une maison est souvent une des étapes les plus importantes dans la vie d’une personne, l’équipe d’ImmoFab ne ménage aucun effort pour satisfaire les exigences de confort et de bien-être de sa clientèle.</p>
        <p>En choisissant ImmoFab comme partenaire, les futurs propriétaires bénéficieront d’un service clés en main du début à la fin. En effet, ces derniers seront accompagnés à toutes les étapes de la construction de leurs projet afin de s’assurer que le produit fini reflète leurs préférences.</p>
        <p>Du choix du terrain à la sélection des matériaux de construction, en passant par la finition et le terrassement, les aspirants propriétaires seront encadrés par une équipe d’experts, qui sont tous reconnus comme des chefs de file dans le domaine de la construction de maisons neuves à Québec.</p>
        <p>Chez ImmoFab, vous verrez qu’il n’y a aucun compromis possible sur la qualité du choix de matériaux et des techniques de construction. Qu’il s’agisse d’une maison unifamiliale, d’un jumelé ou d’un projet de condo de petite ou de grande envergure à Québec, vous pouvez entièrement vous en remettre aux mains des experts d’ImmoFab pour prendre en charge et réaliser tous vos projets de construction résidentielle.</p>
        <p>Les professionnels de la compagnie font de la satisfaction de leurs clients leur priorité et ils se donnent à 110% pour leur offrir le meilleur rapport qualité-prix du marché, et ce, jour après jour.</p>
        <p><Link to="/contact" className="text-blue-700 hover:underline visited:text-purple-600">Contactez-nous</Link> dès maintenant pour en savoir plus sur nos maisons neuves à vendre à Sillery et Québec ou pour prendre rendez-vous avec l’un de nos experts dès maintenant. Notre expertise fera toute la différence.</p>
    </>
  )
}

export default AboutText