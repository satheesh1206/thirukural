import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './thirukural.css'

export function Thirukural() {
    const [kural, setKural] = useState([])
    const [show, setShow] = useState(false)
    const showDatils = (e) => {
        setShow(current => !current)
    }
    useEffect(() => {
        fetch("http://localhost:3000/firstclass/thirukural.json")
            .then(add => add.json())
            .then(hor => setKural(hor))
    })
    return (
        <>
            <h1 className="text-center color-danger line">Thirukkural</h1>
            <div className="container">
                <div className="row">
                    {
                        kural.map((value, index) => (
                            <>
                                <div className="col-lg-12 text-center background_color text-light p-3">
                                    <h2>{value.Number}</h2>
                                    <h2>{value.Line1}</h2>
                                    <h2>{value.Line2}</h2>
                                    <h2>{value.Translation}</h2>
                                    {show && (<div><h2>{value.couplet}</h2>
                                        <h2>{value.transliteration1}</h2>
                                        <h2>{value.transliteration2}</h2>
                                    </div>)}
                                    <button className="buttion text-light" onClick={showDatils}>Explain</button>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    );
}




