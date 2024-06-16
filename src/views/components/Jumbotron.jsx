export default function Jumbotro() {
    return (
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
                        mobil kualitas terbaik dengan harga terjangkau. Selalu
                        siap melayani kebutuhanmu untuk sewa mobil selama 24
                        jam.
                    </p>
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
    );
}
