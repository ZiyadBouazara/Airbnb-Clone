import AboutText from "../components/about/AboutText"
import AboutContributors from "../components/about/AboutContributors"

const About: React.FC = () => {
    return (
  <div className="flex flex-col mx-3 md:px-10 lg:px-20">
    <section className="mt-6">
      <div className="flex flex-col gap-2 mb-6 text-sm">
        <AboutText />
        <AboutContributors />
      </div>
    </section>
  </div>
  )
}
  
  export default About