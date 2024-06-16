import { useState, useEffect } from 'react';
import CarCard from '../components/CarCard';
import CarModal from '../components/CarModal';
import Swal from 'sweetalert2';

export default function CarPage() {
    const [cars, setCars] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentCar, setCurrentCar] = useState(null);

    useEffect(() => {
        fetchCars();
    }, []);

    const fetchCars = () => {
        fetch('http://localhost:8000/cars')
            .then((response) => response.json())
            .then((data) => {
                setCars(data.reverse()); // Reverse the fetched cars array to order by latest added
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    const handleShowModal = () => {
        setShowModal(true);
        setCurrentCar(null); // Reset the current car to null when showing modal for adding new car
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleCarAdded = () => {
        fetchCars(); // Fetch the updated list of cars
    };

    const handleEdit = (car) => {
        setCurrentCar(car);
        setShowModal(true);
    };

    const handleDelete = (carId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this car!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:8000/cars/${carId}`, {
                    method: 'DELETE',
                })
                    .then((response) => response.json())
                    .then(() => {
                        Swal.fire(
                            'Deleted!',
                            'Your car has been deleted.',
                            'success'
                        );
                        fetchCars(); // Refresh the car list
                    })
                    .catch((error) => {
                        console.error('Error deleting car:', error);
                    });
            }
        });
    };

    return (
        <div className="container-fluid">
            {/* Page Heading */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4 mt-4">
                <h1 className="h3 mb-0 text-gray-800">
                    Car Management Dashboard
                </h1>
                <button className="btn btn-primary" onClick={handleShowModal}>
                    Add New Car
                </button>
            </div>
            <div className="mb-4">
                <span>Filter </span>
                <button className="btn btn-sm btn-outline-primary filter-btn">
                    Small
                </button>
                <button className="btn btn-sm btn-outline-primary filter-btn">
                    Medium
                </button>
                <button className="btn btn-sm btn-outline-primary filter-btn">
                    Large
                </button>
            </div>
            {/* Content Row */}
            <div className="row">
                {cars.map((car, index) => (
                    <CarCard
                        key={index}
                        car={car}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                ))}
            </div>
            {/* Car Modal */}
            <CarModal
                show={showModal}
                onClose={handleCloseModal}
                onCarAdded={handleCarAdded}
                car={currentCar}
            />
        </div>
    );
}
