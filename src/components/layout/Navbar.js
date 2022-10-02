import {FaGithub} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

const Navbar = ({ title }) => {
    return (
        <nav className='navbar mb-12 shadow-lg bg-neutral text-neutrat-content'>
            <div className="container mx-auto text-primary-content">
                <div className="flex-none px-2 mx-2">
                    <FaGithub className='inline pr-2 text-3xl' />
                    <NavLink to='/' className='text-lg font-bold align-middle'>
                        {title}
                    </NavLink>
                </div>

                <div className="flex-1 px-2 mx-2">
                    <div className="flex justify-end">
                        <NavLink to='/' exact='true'
                        className='btn btn-ghost btn-sm rounded-btn'>
                            Home
                        </NavLink>
                        <NavLink to='/about' className='btn btn-ghost btn-sm rounded-btn ml-2'>
                            About
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'Github Finder'
}

Navbar.propTypes = {
    title: PropTypes.string
}

export default Navbar
