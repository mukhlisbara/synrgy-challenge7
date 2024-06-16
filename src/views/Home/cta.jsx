export default function cta() {
    return (
        <div
            className="container text-center"
            style={{ color: 'white', marginTop: '100px' }}
        >
            <div
                className="row align-items-center justify-content-center p-5 m-2"
                style={{ backgroundColor: '#0d28a6', borderRadius: '15px' }}
            >
                <div className="col-md-8">
                    <h1 id="faq" className="fw-bold contentSewaMobil">
                        Sewa Mobil di Surabaya Sekarang
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                    <a href="/cars">
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
                    </a>
                </div>
            </div>
        </div>
    );
}
