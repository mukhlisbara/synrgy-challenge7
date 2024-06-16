export default function footer() {
    return (
        <footer className="container mt-5">
            <div className="row">
                {/* Total per row = 12 */}
                <div className="col-md-4">
                    <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                    <p>binarcarrental@gmail.com</p>
                    <p>081-233-334-806</p>
                </div>
                <div className="col-md-2">
                    <p>
                        <a href="#service" className="nav-link fw-bold">
                            Our Services
                        </a>
                    </p>
                    <p>
                        <a href="#whyus" className="nav-link fw-bold">
                            Why Us
                        </a>
                    </p>
                    <p>
                        <a href="#testimonial" className="nav-link fw-bold">
                            Testimonial
                        </a>
                    </p>
                    <p>
                        <a href="#faq" className="nav-link fw-bold">
                            FAQ
                        </a>
                    </p>
                </div>
                <div className="col-md-3 mb-3">
                    <p>Connect with us</p>
                    <div className="row">
                        <div className="col-2">
                            <a href="">
                                <img
                                    src="/assets/img/icon_facebook.png"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="col-2">
                            <a href="https://www.instagram.com/_dwiimulya02/">
                                <img
                                    src="/assets/img/icon_instagram.png"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="col-2">
                            <a href="">
                                <img
                                    src="/assets/img/icon_twitter.png"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="col-2">
                            <a href="">
                                <img src="/assets/img/icon_mail.png" alt="" />
                            </a>
                        </div>
                        <div className="col-2">
                            <a href="">
                                <img src="/assets/img/icon_twitch.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <p>Copyright Binar 2022</p>
                    <a
                        className="nav-link"
                        href="#landing"
                        style={{
                            width: '100px',
                            height: '34px',
                            backgroundColor: '#0d28a6',
                        }}
                    ></a>
                </div>
            </div>
        </footer>
    );
}
