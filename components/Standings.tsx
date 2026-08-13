'use client'

const standingsData = [
  { position: 1, team: 'Mercedes', points: 385, color: 'team-mercedes' },
  { position: 2, team: 'Red Bull Racing', points: 378, color: 'team-redbull' },
  { position: 3, team: 'Ferrari', points: 356, color: 'team-ferrari' },
  { position: 4, team: 'McLaren', points: 341, color: 'team-mclaren' },
  { position: 5, team: 'Aston Martin', points: 288, color: 'team-aston' },
  { position: 6, team: 'Alpine', points: 215, color: 'team-alpine' },
  { position: 7, team: 'Haas', points: 147, color: 'team-haas' },
  { position: 8, team: 'Alfa Romeo', points: 89, color: 'team-alfa' },
  { position: 9, team: 'Williams', points: 65, color: 'team-williams' },
  { position: 10, team: 'Kick Sauber', points: 34, color: 'team-kick' },
  { position: 11, team: 'Racing Point', points: 18, color: 'team-racingpoint' },
]

const teamColorMap: { [key: string]: string } = {
  'team-mercedes': '#00D2BE',
  'team-redbull': '#0600EF',
  'team-ferrari': '#DC0000',
  'team-mclaren': '#FF8700',
  'team-aston': '#006C3E',
  'team-alpine': '#0093D0',
  'team-haas': '#FFFFFF',
  'team-alfa': '#C92D4B',
  'team-williams': '#0082FA',
  'team-kick': '#64C4FF',
  'team-racingpoint': '#FF69B4',
}

export default function Standings() {
  return (
    <div id="standings" className="bg-league-card rounded-lg overflow-hidden border-2 border-league-green">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-league-green text-league-dark">
            <tr>
              <th className="px-6 py-4 text-left font-bold">Position</th>
              <th className="px-6 py-4 text-left font-bold">Team</th>
              <th className="px-6 py-4 text-left font-bold">Driver</th>
              <th className="px-6 py-4 text-right font-bold">Points</th>
            </tr>
          </thead>
          <tbody>
            {standingsData.map((entry) => (
              <tr key={entry.position} className="border-t border-gray-700 hover:bg-league-dark transition">
                <td className="px-6 py-4 font-bold text-league-yellow text-lg">{entry.position}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{backgroundColor: teamColorMap[entry.color]}}></div>
                    <span className="text-white font-semibold">{entry.team}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-300">Placeholder</td>
                <td className="px-6 py-4 text-right font-bold text-league-green text-lg">{entry.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}