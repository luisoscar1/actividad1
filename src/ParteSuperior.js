import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const imagenUrl = "https://www.creativefabrica.com/wp-content/uploads/2023/05/08/Video-Game-Controller-Logo-Graphics-69127373-1-1-580x387.png";

const ParteSuperior = () => {
    return (
        <div className="parte-superior">
            <h1>Reseñas de VideoJuegos</h1>
            <img src={imagenUrl} alt="Descripción de la imagen" className="imagen" />

            <InputGroup className="mb-2">
                <Form.Control
                    size="sm"  // Ajusta el tamaño a "sm" (small)
                    placeholder="Buscar"
                    aria-label="Buscar"
                    aria-describedby="basic-addon2"
                    className="ml-auto" // Mueve el campo de búsqueda a la derecha
                />
                <InputGroup.Text id="basic-addon2">Buscar</InputGroup.Text>
            </InputGroup>


        </div >

    );
};

export default ParteSuperior;
