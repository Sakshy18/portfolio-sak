const NavigationGrid = ({ activeSection, onTileClick }) => {
  const sections = [
    { id: '01', label: 'Overview' },
    { id: '02', label: 'Research' },
    { id: '03', label: 'Journey' },
    { id: '04', label: 'Decisions' },
    { id: '05', label: 'Designs' },
    { id: '06', label: 'Outcome' },
    { id: '07', label: 'Reflection' },
  ];

  return (
    <div className="grid grid-cols-4 gap-3 max-w-md mt-12">
      {sections.map((s) => (
        <button
          key={s.id}
          onClick={() => onTileClick(s.id)}
          className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300
            ${activeSection === s.id 
              ? 'bg-white/10 border-white/40 scale-105' 
              : 'bg-glass-bg border-glass-border hover:border-white/20'}`}
        >
          <span className="text-xs opacity-50 font-mono mb-1">{s.id}</span>
          <span className="text-[10px] uppercase tracking-wider font-semibold">{s.label}</span>
        </button>
      ))}
    </div>
  );
};