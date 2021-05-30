import React, {useState} from 'react';
import axios from 'axios';

const AddCarForm = () => {
    const [Nrmasina, setNrmasina] = useState('');
    const [Marca, setMarca] = useState('');
    const [Tip, setTip] = useState('');
    const [SerieMotor, setSerieMotor] = useState('');
    const [SerieCaroserie, setSerieCaroserie] = useState('');
    const [Carburant, setCarburant] = useState('');
    const [Culoare, setCuloare] = useState('');
    const [Capacitate, setCapacitate] = useState('');
    const [Pret, setPret] = useState('');

    const addCar = () => {
        axios.post('http://localhost:8080/add-car', {
            nrmasina: Nrmasina,
            marca: Marca,
            tip: Tip,
            seriemotor: SerieMotor,
            seriecaroserie: SerieCaroserie,
            carburant: Carburant,
            culoare: Culoare,
            capacitatecilindrica: Capacitate,
            preteuro: Pret
        })
    }

    return (
        <div className="container">
            <div className="form">
                <div className="add-logo">
                    <h3>Add a new car</h3>
                </div>
                <div className="car-info">
                    <input className='car-field' type="text" placeholder='Numar masina' onChange = {(e) => {setNrmasina(e.target.value)}}/>
                    <input className='car-field' type="text" placeholder='Marca' onChange = {(e) => {setMarca(e.target.value)}}/>
                    <input className='car-field' type="text" placeholder='Tip' onChange = {(e) => {setTip(e.target.value)}}/>
                    <input className='car-field' type="text" placeholder='Serie motor' onChange = {(e) => {setSerieMotor(e.target.value)}}/>
                    <input className='car-field' type="text" placeholder='Serie caroserie' onChange = {(e) => {setSerieCaroserie(e.target.value)}}/>
                    <input className='car-field' type="text" placeholder='Carburant' onChange = {(e) => {setCarburant(e.target.value)}}/>
                    <input className='car-field' type="text" placeholder='Culoare' onChange = {(e) => {setCuloare(e.target.value)}}/>
                    <input className='car-field' type="text" placeholder='Capacitate cilindrica' onChange = {(e) => {setCapacitate(e.target.value)}}/>
                    <input className='car-field' type="text" placeholder='Pret (euro)' onChange = {(e) => {setPret(e.target.value)}}/>
                </div>
                <div className="submit-btn">
                    <input type="submit" className='btn' value='Add car' onClick={addCar}/>
                </div>
            </div>
        </div>
    )
}

export default AddCarForm;