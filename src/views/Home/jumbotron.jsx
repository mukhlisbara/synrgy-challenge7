import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function jumbotron() {
    return (
        <div className="container-fluid bg-body-tertiary px-0">
            <Header />

            {/* Landing Content */}
            <div className="container mt-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1
                            className="lh-base fw-bold"
                            style={{ fontSize: '2rem' }}
                            id="landing"
                        >
                            Sewa & Rental Mobil Terbaik di kawasan Surabaya
                        </h1>
                        <p className="mt-4 text-wrap">
                            Selamat datang di Binar Car Rental. Kami menyediakan
                            mobil kualitas terbaik dengan harga terjangkau.
                            Selalu siap melayani kebutuhanmu untuk sewa mobil
                            selama 24 jam.
                        </p>
                        <Link to="/cari-mobil">
                            <button
                                className="btn mb-4"
                                style={{
                                    backgroundColor: '#5cb85f',
                                    color: 'white',
                                    borderRadius: '3px',
                                    fontWeight: '600',
                                }}
                            >
                                Mulai Sewa Mobil
                            </button>
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <img
                            src="/assets/img/img_car.png"
                            className="img-fluid"
                            alt="..."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
