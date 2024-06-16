import Sidebar from '../components/Sidebar';
import CarPage from './CarPage';

export default function Car() {
    return (
        <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <CarPage />
            </div>
        </div>
    );
}
