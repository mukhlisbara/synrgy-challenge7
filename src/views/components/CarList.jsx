import Car from './Car';

export default function CarsList({ cars }) {
    return (
        <div
            className="container d-flex flex-row flex-wrap insert-card-cars justify-content-between"
            style={{ marginTop: '100px' }}
        >
            {cars.map((car) => (
                <Car key={car.id} car={car} />
            ))}
        </div>
    );
}
