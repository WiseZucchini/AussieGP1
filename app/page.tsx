import Header from '@/components/Header'
import Standings from '@/components/Standings'
import Teams from '@/components/Teams'
import Results from '@/components/Results'

export default function Home() {
  return (
    <main className="min-h-screen bg-league-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-league-dark via-league-dark to-league-card text-white py-20 px-4 border-b-4 border-league-green">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl font-bold mb-4 text-league-green">AussieGP</h1>
          <p className="text-2xl text-league-yellow mb-2">Australian Formula 1 League</p>
          <p className="text-lg text-gray-300">Experience the thrill of competitive racing</p>
        </div>
      </section>

      {/* Standings Section */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold mb-8 text-league-green">Championship Standings</h2>
        <Standings />
      </section>

      {/* Latest Results Section */}
      <section className="bg-league-card py-16 px-4 border-y-4 border-league-yellow">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-league-yellow">Latest Results</h2>
          <Results />
        </div>
      </section>

      {/* Teams Section */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold mb-8 text-league-green">Teams</h2>
        <Teams />
      </section>
    </main>
  )
}
