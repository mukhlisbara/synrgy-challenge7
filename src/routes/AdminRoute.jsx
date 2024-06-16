import { Routes, Route } from 'react-router-dom';
import Car from '../views/Car';
import '../assets/css/sb-admin-2.css';
import '../assets/js/sb-admin-2.js';

export default function AdminRoute() {
    return (
        <Routes>
            <Route path="/car" element={<Car />} />
        </Routes>
    );
}
