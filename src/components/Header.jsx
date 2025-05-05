import logo from '../assets/Globe.png'

export default function Header() {
    return (
        <header>
            <img src={logo} alt='globe icon'/>
            <span>my travel journal.</span>
        </header>
    )
}
