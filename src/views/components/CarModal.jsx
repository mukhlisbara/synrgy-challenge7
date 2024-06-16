import { useState, useEffect } from 'react';

export default function CarModal({ show, onClose, onCarAdded, car }) {
    const [model, setModel] = useState('');
    const [rentPerDay, setRentPerDay] = useState('');
    const [capacity, setCapacity] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        if (car) {
            setModel(car.model);
            setRentPerDay(car.rentPerDay);
            setCapacity(car.capacity);
            setImage(car.image);
        } else {
            setModel('');
            setRentPerDay('');
            setCapacity('');
            setImage('');
        }
    }, [car]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedCar = { model, rentPerDay, capacity, image };

        const url = car
            ? `http://localhost:8000/cars/${car.id}`
            : 'http://localhost:8000/cars';
        const method = car ? 'PUT' : 'POST';

        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedCar),
        })
            .then((response) => response.json())
            .then(() => {
                onCarAdded();
                onClose();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div
            className={`modal ${show ? 'd-block' : 'd-none'}`}
            tabIndex="-1"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">
                            {car ? 'Edit Car' : 'Add New Car'}
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    name="model"
                                    id="name"
                                    className="form-control"
                                    value={model}
                                    onChange={(e) => setModel(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Price:</label>
                                <input
                                    type="number"
                                    name="rentPerDay"
                                    id="price"
                                    className="form-control"
                                    value={rentPerDay}
                                    onChange={(e) =>
                                        setRentPerDay(e.target.value)
                                    }
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="size">Size:</label>
                                <select
                                    name="capacity"
                                    id="size"
                                    className="form-control"
                                    value={capacity}
                                    onChange={(e) =>
                                        setCapacity(e.target.value)
                                    }
                                    required
                                >
                                    <option value="2">Small</option>
                                    <option value="4">Medium</option>
                                    <option value="6">Large</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="img">Image:</label>
                                <input
                                    type="text"
                                    name="image"
                                    id="img"
                                    className="form-control"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                {car ? 'Update Car' : 'Add Car'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
