export default function CarCard({ car, onEdit, onDelete }) {
    return (
        <div className="col-lg-4 mb-4">
            <div className="card">
                <img
                    src={`/assets/img/${car.image}`}
                    className="card-img-top"
                    alt={car.model}
                />
                <div className="card-body">
                    <h5 className="card-title">{car.model}</h5>
                    <p className="card-text">Rp{car.rentPerDay} / Hari</p>
                    <p className="card-text">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="bi bi-clock"
                            width="16"
                            height="16"
                        >
                            <path d="M9.25 4a.75.75 0 0 1 .75.75v4.794l3.02 1.809a.75.75 0 1 1-.75 1.298l-3.77-2.262a.75.75 0 0 1-.25-.56V4.75a.75.75 0 0 1 .75-.75z" />
                            <path
                                fillRule="evenodd"
                                d="M10 1a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm0 1a8 8 0 1 1 0 16 8 8 0 0 1 0-16z"
                            />
                        </svg>
                        Updated At {new Date(car.updatedAt).toDateString()}
                    </p>
                    <button
                        onClick={() => onEdit(car)}
                        className="btn btn-warning btn-sm mr-2"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => onDelete(car.id)}
                        className="btn btn-danger btn-sm delete-car"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
