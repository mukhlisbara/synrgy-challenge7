export default function faq() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-5">
                    <h1 className="mb-3 whyUsContent">
                        Frequently Asked Question
                    </h1>
                    <p className="whyUsContent">
                        Lorem ipsum dolor sit amet. Lorem, ipsum.
                    </p>
                </div>
                <div className="col-md-7">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item my-3">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    Apa saja syarat yang dibutuhkan?
                                </button>
                            </h2>
                            <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Praesentium, iusto ad?
                                    Iusto, nisi provident sit culpa qui dolore
                                    similique in quae omnis commodi ut ad!
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item my-3">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                    style={{
                                        border: '1px solid rgb(237, 237, 237)',
                                    }}
                                >
                                    Berapa hari minimal sewa mobil lepas kunci?
                                </button>
                            </h2>
                            <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Debitis explicabo facere
                                    tempore reprehenderit, officia
                                    exercitationem ipsam cumque sunt nulla rem,
                                    rerum distinctio quia perferendis natus?
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item my-3">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                    style={{
                                        border: '1px solid rgb(237, 237, 237)',
                                    }}
                                >
                                    Berapa hari sebelumnya sebaiknya booking
                                    sewa mobil?
                                </button>
                            </h2>
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Rem hic autem officiis,
                                    eius modi, totam velit libero quas minima
                                    distinctio natus aut quam excepturi sit.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item my-3">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour"
                                    aria-expanded="false"
                                    aria-controls="collapseFour"
                                    style={{
                                        border: '1px solid rgb(237, 237, 237)',
                                    }}
                                >
                                    Apakah Ada biaya antar-jemput?
                                </button>
                            </h2>
                            <div
                                id="collapseFour"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Rem hic autem officiis,
                                    eius modi, totam velit libero quas minima
                                    distinctio natus aut quam excepturi sit.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item my-3">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFive"
                                    aria-expanded="false"
                                    aria-controls="collapseFive"
                                    style={{
                                        border: '1px solid rgb(237, 237, 237)',
                                    }}
                                >
                                    Bagaimana jika terjadi kecelakaan?
                                </button>
                            </h2>
                            <div
                                id="collapseFive"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Rem hic autem officiis,
                                    eius modi, totam velit libero quas minima
                                    distinctio natus aut quam excepturi sit.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
