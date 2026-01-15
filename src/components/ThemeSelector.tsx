import { useTheme } from '../contexts/ThemeContext';

export default function ThemeSelector() {
  const { currentTheme, setTheme, availableThemes } = useTheme();

  return (
    <div className="fixed top-4 right-4 z-50">
      <select
        value={currentTheme}
        onChange={(e) => setTheme(e.target.value)}
        className="px-3 py-2 rounded-lg border shadow-lg"
        style={{
          backgroundColor: 'var(--color-card)',
          color: 'var(--color-card-foreground)',
          borderColor: 'var(--color-border)'
        }}
      >
        {availableThemes.map((themeName) => (
          <option key={themeName} value={themeName}>
            {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
