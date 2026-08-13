'use client'

export default function Header() {
  return (
    <header className="bg-league-dark border-b-2 border-league-green sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-league-green to-league-yellow rounded-lg flex items-center justify-center">
            <span className="text-league-dark font-bold text-xl">AG</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-league-green">AussieGP</h1>
            <p className="text-league-yellow text-sm">Formula 1 League</p>
          </div>
        </div>
        
        <nav className="flex gap-8">
          <a href="#" className="text-white hover:text-league-green transition">Home</a>
          <a href="#standings" className="text-white hover:text-league-green transition">Standings</a>
          <a href="#results" className="text-white hover:text-league-green transition">Results</a>
          <a href="#teams" className="text-white hover:text-league-green transition">Teams</a>
        </nav>
      </div>
    </header>
  )
}