import UseLocalStorage from './UseLocalStorage'
import './Theme.css'

export default function LightDark() {

    const [theme,setTheme] = UseLocalStorage('theme','light')

    const handleToggleTheme = () => {

        setTheme(theme === 'light' ? 'dark':'light')
    }
    console.log(theme)
  return (
    <div className='light-dark' data-theme = {theme}>
      <div className="container">
        <p>Hello World!</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  )
}
