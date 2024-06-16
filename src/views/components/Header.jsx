import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <nav className="navbar navbar-expand-md bg-body-tertiary pt-4">
            <div className="container">
                <Link
                    className="navbar-brand"
                    to="/"
                    style={{
                        width: '100px',
                        height: '34px',
                        backgroundColor: '#0d28a6',
                    }}
                ></Link>
                <span
                    className="smallWidth"
                    style={{ fontSize: '30px', cursor: 'pointer' }}
                >
                    &#9776;
                </span>
                {/* Mobile Side */}
                <div id="mySidenav" className="sidenav">
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            position: 'relative',
                            alignItems: 'center',
                        }}
                    >
                        <a className="fw-bold" href="">
                            BCR
                        </a>
                        <a href="javascript:void(0)" className="closebtn">
                            &times;
                        </a>
                    </div>
                    <a href="#service">Our Services</a>
                    <a href="#whyus">Why Us</a>
                    <a href="#testimonial">Testimonial</a>
                    <a href="#faq">FAQ</a>
                    <a href="#">
                        <button
                            className="btn"
                            style={{
                                backgroundColor: '#5cb85f',
                                color: 'white',
                                borderRadius: '3px',
                                fontWeight: '600',
                            }}
                        >
                            Register
                        </button>
                    </a>
                </div>
                {/* End Of Mobile Side */}
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavDropdown"
                >
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-2">
                            <a className="nav-link fw-bold" href="#service">
                                Our Services
                            </a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link fw-bold" href="#whyus">
                                Why Us
                            </a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link fw-bold" href="#testimonial">
                                Testimonial
                            </a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link fw-bold" href="#faq">
                                FAQ
                            </a>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to="/login">
                                <button
                                    className="btn"
                                    style={{
                                        backgroundColor: '#5cb85f',
                                        color: 'white',
                                        borderRadius: '3px',
                                        fontWeight: '600',
                                    }}
                                >
                                    Register
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
