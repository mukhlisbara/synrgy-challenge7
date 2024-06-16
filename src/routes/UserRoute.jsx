import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import CariMobil from '../views/CariMobil';
import Login from '../views/Auth/Login';

export default function UserRoute() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/cari-mobil" element={<CariMobil />} />

            <Route path="/login" element={<Login />} />
        </Routes>
    );
}
