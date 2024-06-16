import { useState } from 'react';
import CarForm from '../components/CarForm';
import CarsList from '../components/CarList';
import Header from '../components/Header';
import Jumbotro from '../components/Jumbotron';
import Footer from '../components/Footer';

export default function CariMobil() {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (formData) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('http://localhost:8000/cars');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // Filter the data based on formData
            const filteredCars = data.filter((car) => {
                let isValid = true;
                if (formData.typeDriver) {
                    isValid =
                        formData.typeDriver === 'Dengan Sopir'
                            ? car.available
                            : !car.available;
                }
                if (formData.date) {
                    const year = parseInt(formData.date.slice(0, 4));
                    const month = parseInt(formData.date.slice(5, 7));
                    const day = parseInt(formData.date.slice(8, 10));
                    if (
                        year > 2022 ||
                        (year === 2022 && month > 3) ||
                        (year === 2022 && month === 3 && day >= 24)
                    ) {
                        isValid = false;
                    }
                }
                if (formData.passenger) {
                    isValid = car.capacity >= parseInt(formData.passenger);
                }
                return isValid;
            });
            setCars(filteredCars);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container-fluid bg-body-tertiary px-0 pb-5">
            <Header />
            <Jumbotro />

            <CarForm onSearch={handleSearch} />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {cars.length === 0 && !loading && !error && (
                <div className="container d-flex justify-content-center align-items-center text-center">
                    <p className="my-0">Mobil Tidak Ditemukan!</p>
                </div>
            )}
            <CarsList cars={cars} />

            <Footer />
        </div>
    );
}
