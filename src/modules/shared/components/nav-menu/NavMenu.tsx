
import { NavMenuButton } from './NavMenuButton'
import { NavCartButton } from './NavCartButton'
import { NavMenuSearchInput } from './NavMenuSearchInput'

export const NavMenu = () => {
    return (
        <nav className='navbar'>
            <div className="navbar__container">
                <NavMenuButton/>

                <NavMenuSearchInput/>

                
                <NavCartButton/>
            </div>
        </nav>
    )
}
