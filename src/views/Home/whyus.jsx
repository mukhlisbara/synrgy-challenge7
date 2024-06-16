export default function whyus() {
    return (
        <div className="container" style={{ marginTop: '100px' }}>
            <h1
                id="whyus"
                className="fw-bold whyUsContent"
                style={{ fontSize: '1.5rem' }}
            >
                Why Us?
            </h1>
            <p className="mt-4 mb-3 whyUsContent">
                Mengapa harus pilih Binar Car Rental?
            </p>
            <div className="row mt-4">
                <div className="col-md-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <img
                                src="/assets/img/icon_complete.png"
                                alt=""
                                className="img-fluid mb-4"
                            />
                            <h6 className="card-subtitle mb-2 text-body-secondary">
                                Mobil Lengkap
                            </h6>
                            <p className="card-text">
                                Tersedia banyak pilihan mobil, kondisi masih
                                baru, bersih dan terawat
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <img
                                src="/assets/img/icon_price.png"
                                alt=""
                                className="img-fluid mb-4"
                            />
                            <h6 className="card-subtitle mb-2 text-body-secondary">
                                Harga Murah
                            </h6>
                            <p className="card-text">
                                Harga murah dan bersaing, bisa bandingkan harga
                                kami dengan rental mobil lain
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <img
                                src="/assets/img/icon_24hrs.png"
                                alt=""
                                className="img-fluid mb-4"
                            />
                            <h6 className="card-subtitle mb-2 text-body-secondary">
                                Layanan 24 Jam
                            </h6>
                            <p className="card-text">
                                Siap melayani kebutuhan Anda selama 24 jam
                                nonstop. Kami juga tersedia di akhir minggu
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <img
                                src="/assets/img/icon_professional.png"
                                alt=""
                                className="img-fluid mb-4"
                            />
                            <h6 className="card-subtitle mb-2 text-body-secondary">
                                Sopir Profesional
                            </h6>
                            <p className="card-text">
                                Sopir yang profesional, berpengalaman, jujur,
                                ramah dan selalu tepat waktu
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
