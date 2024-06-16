import { useState } from 'react';

export default function CarForm({ onSearch }) {
    const [formData, setFormData] = useState({
        typeDriver: '',
        date: '',
        time: '',
        passenger: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSearch = () => {
        onSearch(formData);
    };

    return (
        <div
            className="container"
            style={{
                width: '75%',
                position: 'absolute',
                left: 0,
                right: 0,
                top: '420px',
            }}
        >
            <div className="card form-car">
                <div
                    className="form-content row mx-2 my-3"
                    style={{ fontSize: '0.8rem' }}
                >
                    <div className="col-sm p-0 m-1 d-flex flex-column">
                        <label htmlFor="typeDriver" className="mb-2">
                            Tipe Driver
                        </label>
                        <select
                            className="form-select px-2"
                            name="typeDriver"
                            value={formData.typeDriver}
                            onChange={handleChange}
                            required
                        >
                            <option selected disabled value="">
                                Pilih Tipe Driver
                            </option>
                            <option value="Dengan Sopir">Dengan Sopir</option>
                            <option value="Tanpa Sopir (Lepas Kunci)">
                                Tanpa Sopir (Lepas Kunci)
                            </option>
                        </select>
                    </div>
                    <div className="col-sm p-0 m-1 d-flex flex-column">
                        <label htmlFor="date" className="mb-2">
                            Tanggal
                        </label>
                        <input
                            className="form-control px-2"
                            id="datepicker"
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-sm p-0 m-1 d-flex flex-column">
                        <label htmlFor="time" className="mb-2">
                            Waktu Jemput/Ambil
                        </label>
                        <select
                            className="form-control px-2"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                        >
                            <option selected disabled value="">
                                Pilih Waktu
                            </option>
                            <option value="08.00">08.00</option>
                            <option value="09.00">09.00</option>
                            <option value="10.00">10.00</option>
                            <option value="11.00">11.00</option>
                            <option value="12.00">12.00</option>
                        </select>
                    </div>
                    <div className="col-sm p-0 m-1 d-flex flex-column">
                        <label htmlFor="passenger" className="mb-2">
                            Jumlah Penumpang (optional)
                        </label>
                        <input
                            className="form-control px-2"
                            type="text"
                            name="passenger"
                            value={formData.passenger}
                            onChange={handleChange}
                            placeholder="Jumlah Penumpang"
                        />
                    </div>
                    <div
                        className="col-2 p-0 m-1 d-flex flex-column"
                        style={{ width: '92px' }}
                    >
                        <p className="mb-2">&nbsp;</p>
                        <button
                            className="btn submit"
                            style={{
                                backgroundColor: '#5cb85f',
                                color: 'white',
                                borderRadius: '3px',
                                fontWeight: '500',
                                fontSize: '0.8rem',
                                height: '36px',
                            }}
                            onClick={handleSearch}
                        >
                            Cari Mobil
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
