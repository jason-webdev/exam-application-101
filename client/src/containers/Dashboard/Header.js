import React from 'react'
import { Link } from 'react-router-dom'


const Header = (props) => {
    return (
        <header className="toolbar fixed-top">
            <nav className="toolbar__navigation">
                <div className="toolbar__logo">
                    <Link
                        to='/dashboard'
                        className="link-title"
                    >
                        Dashboard
                    </Link>
                </div>
                <div className="spacer" />
                <div className="toolbar_navigation-items">
                    <Link
                        to='/families'
                        className="link-title"
                    >
                        Families
                    </Link>
                </div>
            </nav>
        </header>
    )
}
export default Header