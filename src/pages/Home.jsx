import TravelHomeLayout from '../components/TravelHomeLayout'

function Home({ onLogin, onUmkm, onPrivacy, onTerms }) {
  return <TravelHomeLayout onLogin={onLogin} onUmkm={onUmkm} onPrivacy={onPrivacy} onTerms={onTerms} />
}

export default Home
