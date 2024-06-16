import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <ul
            className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
            id="accordionSidebar"
        >
            {/* Sidebar - Brand */}
            <a
                className="sidebar-brand d-flex align-items-center justify-content-center"
                href="#"
            >
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-car"></i>
                </div>
                <Link to="/">
                    <div
                        className="sidebar-brand-text mx-3"
                        style={{
                            color: '#fff',
                            fontWeight: '800',
                            fontSize: '1.5em',
                        }}
                    >
                        SYNRGY
                    </div>
                </Link>
            </a>
            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </a>
            </li>
            {/* Nav Item - Add New Car */}
            <li className="nav-item active">
                <a className="nav-link" href="/cars/create">
                    <i className="fas fa-car"></i>
                    <span>Cars</span>
                </a>
            </li>
        </ul>
    );
}
