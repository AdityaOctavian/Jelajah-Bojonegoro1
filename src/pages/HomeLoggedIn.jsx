import TravelHomeLayout from '../components/TravelHomeLayout'

function HomeLoggedIn({ user, onLogout, onUmkm, onPrivacy, onTerms }) {
  return <TravelHomeLayout user={user} onLogout={onLogout} onUmkm={onUmkm} onPrivacy={onPrivacy} onTerms={onTerms} />
}

export default HomeLoggedIn
