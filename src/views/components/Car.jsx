export default function Car({ car }) {
    return (
        <div
            className="col-md-3 col-sm-12 p-3 mb-4 mx-2 border"
            style={{
                width: '335px !important',
                borderRadius: '5px',
                boxShadow: '0px 0px 4px 0px #00000026',
            }}
        >
            <div className="card-cars">
                <img
                    className="cars-img mb-3 object-fit-cover"
                    style={{ width: '100%', height: '230px' }}
                    src={`/assets/img/${car.image}`}
                    alt=""
                />
                <div className="title-cars">
                    <h5>
                        {car.manufacture}/{car.model}
                    </h5>
                    <h4
                        className="my-2"
                        style={{ fontWeight: 'bold', fontSize: '1.5rem' }}
                    >
                        Rp {car.rentPerDay?.toLocaleString()} / hari
                    </h4>
                    <p>{car.description}</p>
                </div>
            </div>
            <div>
                <div className="my-2 d-flex justify-content-start">
                    <img
                        className="spec-img me-2"
                        style={{ width: '20px', height: '20px' }}
                        src="./assets/img/fi_users.png"
                        alt=""
                    />
                    <p className="align-self-center mb-0">
                        {car.capacity} orang
                    </p>
                </div>
                <div className="my-2 d-flex justify-content-start">
                    <img
                        className="spec-img me-2"
                        style={{ width: '20px', height: '20px' }}
                        src="./assets/img/fi_settings.png"
                        alt=""
                    />
                    <p className="align-self-center mb-0">{car.transmission}</p>
                </div>
                <div className="my-2 d-flex justify-content-start">
                    <img
                        className="spec-img me-2"
                        style={{ width: '20px', height: '20px' }}
                        src="./assets/img/fi_calendar.png"
                        alt=""
                    />
                    <p className="align-self-center mb-0">{car.year}</p>
                </div>
            </div>
            <div className="choose-cars my-2 mt-3" style={{ width: '100%' }}>
                <button
                    className="btn btn-choose-cars"
                    style={{
                        backgroundColor: '#5cb85f',
                        width: '100%',
                        height: '48px',
                        color: 'white',
                        borderRadius: '3px',
                        fontWeight: '600',
                    }}
                >
                    Pilih Mobil
                </button>
            </div>
        </div>
    );
}
