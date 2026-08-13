'use client'

const teamsData = [
  { name: 'Mercedes', color: '#00D2BE', drivers: ['Placeholder', 'Placeholder'] },
  { name: 'Red Bull Racing', color: '#0600EF', drivers: ['Placeholder', 'Placeholder'] },
  { name: 'Ferrari', color: '#DC0000', drivers: ['Placeholder', 'Placeholder'] },
  { name: 'McLaren', color: '#FF8700', drivers: ['Placeholder', 'Placeholder'] },
  { name: 'Aston Martin', color: '#006C3E', drivers: ['Placeholder', 'Placeholder'] },
  { name: 'Alpine', color: '#0093D0', drivers: ['Placeholder', 'Placeholder'] },
  { name: 'Haas', color: '#FFFFFF', drivers: ['Placeholder', 'Placeholder'] },
  { name: 'Alfa Romeo', color: '#C92D4B', drivers: ['Placeholder', 'Placeholder'] },
  { name: 'Williams', color: '#0082FA', drivers: ['Placeholder', 'Placeholder'] },
  { name: 'Kick Sauber', color: '#64C4FF', drivers: ['Placeholder', 'Placeholder'] },
  { name: 'Racing Point', color: '#FF69B4', drivers: ['Placeholder', 'Placeholder'] },
]

export default function Teams() {
  return (
    <div id="teams" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {teamsData.map((team, idx) => (
        <div 
          key={idx} 
          className="bg-league-card rounded-lg overflow-hidden border-4 hover:scale-105 transition transform"
          style={{ borderColor: team.color }}
        >
          <div 
            className="h-24 w-full flex items-center justify-center"
            style={{ backgroundColor: team.color, opacity: 0.2 }}
          >
            <div 
              className="h-20 w-20 rounded-full"
              style={{ backgroundColor: team.color, opacity: 0.3 }}
            ></div>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4" style={{ color: team.color }}>
              {team.name}
            </h3>
            
            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-sm mb-1">Drivers</p>
                <ul className="space-y-1">
                  {team.drivers.map((driver, i) => (
                    <li key={i} className="text-white">{driver}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
