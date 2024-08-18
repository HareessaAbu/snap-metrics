import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const lightIcon = (<svg width="30" height="30" id="light-icon">
    <circle cx="15" cy="15" r="6" fill="currentColor" />

    <line
      id="ray"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      x1="15"
      y1="1"
      x2="15"
      y2="4"
    ></line>

    <use href="#ray" transform="rotate(45 15 15)" />
    <use href="#ray" transform="rotate(90 15 15)" />
    <use href="#ray" transform="rotate(135 15 15)" />
    <use href="#ray" transform="rotate(180 15 15)" />
    <use href="#ray" transform="rotate(225 15 15)" />
    <use href="#ray" transform="rotate(270 15 15)" />
    <use href="#ray" transform="rotate(315 15 15)" />
  </svg>);

const darkIcon = (<svg width="30" height="30" id="dark-icon">
<path
    fill="currentColor"
    d="
    M 23, 5
    A 12 12 0 1 0 23, 25
    A 12 12 0 0 1 23, 5"
/>
</svg>);

  return (
    <button onClick={toggleTheme} className="p-2">
      {theme === 'dark' ? lightIcon : darkIcon}
    </button>
  );
}
