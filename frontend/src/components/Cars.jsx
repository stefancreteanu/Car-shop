import React, { useEffect, useState } from 'react';

const Cars = () => {
    const [masini, setMasini] = useState([])
    const [total, setTotal] = useState([]);

    useEffect(() => {
        fetchCars();
        totalCars();
    }, []);

    const fetchCars = async () => {
        const data = await fetch('http://localhost:8080/masini');

        const car = await data.json();
        setMasini(car.masina);
    }

    const totalCars = async () => {
        const data = await fetch('http://localhost:8080/get-car');

        const totalCar = await data.json();
        setTotal(totalCar.getCar);
    }

    return(
        <div className='container'>
            <div className="total-cars">
                {total.map(totalCar => (
                    <h1>Numar total masini: {totalCar.count}</h1>
                ))}
            </div>
            <table className='car-list'>
                    <thead>
                        <tr>
                            <th>Numar masina</th>
                            <th>Marca</th>
                            <th>Tip masina</th>
                            <th>Serie motor</th>
                            <th>Serie caroserie</th>
                            <th>Carburant</th>
                            <th>Culoare</th>
                            <th>Capacitate cilindrica</th>
                            <th>Pret (euro)</th>
                        </tr>
                    </thead>
                    <tbody>
                            {masini.map(car => (
                                <tr>
                                    <td><p>{car.nrvehicul}</p></td>
                                    <td><p>{car.marca}</p></td>
                                    <td><p>{car.tip}</p></td>
                                    <td><p>{car.seriemotor}</p></td>
                                    <td><p>{car.seriecaroserie}</p></td>
                                    <td><p>{car.carburant}</p></td>
                                    <td><p>{car.culoare}</p></td>
                                    <td><p>{car.capacitatecil}</p></td>
                                    <td><p>{car.preteuro}</p></td>
                                </tr>
                            ))}
                    </tbody>
            </table>
        </div>
    )
}

export default Cars;