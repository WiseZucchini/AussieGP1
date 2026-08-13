'use client'

const resultsData = [
  {
    race: 'Albert Park Grand Prix',
    round: 'Round 1',
    winner: 'Mercedes',
    secondPlace: 'Red Bull Racing',
    thirdPlace: 'Ferrari',
    date: 'Aug 10, 2026'
  },
  {
    race: 'Silverstone Grand Prix',
    round: 'Round 2',
    winner: 'Red Bull Racing',
    secondPlace: 'Mercedes',
    thirdPlace: 'McLaren',
    date: 'Aug 3, 2026'
  },
  {
    race: 'Monza Grand Prix',
    round: 'Round 3',
    winner: 'Ferrari',
    secondPlace: 'McLaren',
    thirdPlace: 'Mercedes',
    date: 'Jul 27, 2026'
  },
]

const teamColors: { [key: string]: string } = {
  'Mercedes': '#00D2BE',
  'Red Bull Racing': '#0600EF',
  'Ferrari': '#DC0000',
  'McLaren': '#FF8700',
  'Aston Martin': '#006C3E',
  'Alpine': '#0093D0',
  'Haas': '#FFFFFF',
  'Alfa Romeo': '#C92D4B',
  'Williams': '#0082FA',
  'Kick Sauber': '#64C4FF',
  'Racing Point': '#FF69B4',
}

export default function Results() {
  return (
    <div id="results" className="grid gap-6">
      {resultsData.map((result, idx) => (
        <div key={idx} className="bg-league-card rounded-lg border-2 border-league-yellow p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-league-green">{result.race}</h3>
              <p className="text-league-yellow">{result.round}</p>
            </div>
            <p className="text-gray-400 text-sm">{result.date}</p>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-league-dark rounded-lg p-4 border-l-4" style={{borderColor: teamColors[result.winner] || '#FFD700'}}>
              <p className="text-gray-400 text-sm mb-2">🥇 1st Place</p>
              <p className="text-white font-bold text-lg">{result.winner}</p>
              <p className="text-gray-500 text-sm">Placeholder</p>
            </div>
            
            <div className="bg-league-dark rounded-lg p-4 border-l-4" style={{borderColor: teamColors[result.secondPlace] || '#FFD700'}}>
              <p className="text-gray-400 text-sm mb-2">🥈 2nd Place</p>
              <p className="text-white font-bold text-lg">{result.secondPlace}</p>
              <p className="text-gray-500 text-sm">Placeholder</p>
            </div>
            
            <div className="bg-league-dark rounded-lg p-4 border-l-4" style={{borderColor: teamColors[result.thirdPlace] || '#FFD700'}}>
              <p className="text-gray-400 text-sm mb-2">🥉 3rd Place</p>
              <p className="text-white font-bold text-lg">{result.thirdPlace}</p>
              <p className="text-gray-500 text-sm">Placeholder</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}