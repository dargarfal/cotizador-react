import React, {useState} from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { 
          obtenerDiferenciaYear, 
          obtenerTotalSegunMarca, 
          obtenerSegunPlan
        } from '../helpers/helper';

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Boton = styled.button`
  background-color: #00838F;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color .3s ease;
  margin-top: 2rem;

  &:hover {
    cursor: pointer;
    background-color: #26C6DA;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  text-align: center;
  margin-bottom: 1rem; 
`;

const Formulario = ({guardarCotizacion, guardarVerSpinner}) => {

  const [datos, guardarDatos] = useState({
    marca: '',
    year: '',
    plan: ''
  });

  const [error, guardarError] = useState(false);

  const {marca, year, plan} = datos;

  const obtenerDatosFormulario = e => {
    guardarDatos({
      ...datos,
      [e.target.name] : e.target.value
    })
  }

  const cotizarSeguro = e => {
    e.preventDefault();

    if(marca.trim() === '' || year.trim() === '' || plan.trim() === ''){
      guardarError(true);
      return;
    }

    guardarError(false);

    let resultado = 2000;

    const difYear = obtenerDiferenciaYear(year);
    console.log(difYear);

    resultado -= ((difYear * 3) * resultado) / 100;

    resultado = resultado * obtenerTotalSegunMarca(marca);

    resultado = (resultado * obtenerSegunPlan(plan)).toFixed(2);
    console.log(resultado);
    
    const cotizacionFinal = {
      cotizacion : resultado,
      marca : marca,
      year : year,
      plan : plan
    }

    guardarVerSpinner(true);

    setTimeout(() => {
      guardarVerSpinner(false);
      guardarCotizacion(cotizacionFinal);
    }, 2000)

    

  }

  return ( 

    <form onSubmit={cotizarSeguro}>

      {error ? 
        <Error>Todos los campos deben ser llenados</Error>
      : 
        null
      }
      <Campo>
        <Label>Marca</Label>
        <Select
          name="marca"
          value={marca}
          onChange={obtenerDatosFormulario}
        >
          <option value="">--Seleccione--</option>
          <option value="americano">--Americano--</option>
          <option value="europeo">--Europeo--</option>
          <option value="asia">--Asia--</option>
        </Select>
      </Campo>

      <Campo>
        <Label>Año</Label>
          <Select
            name="year"
            value={year}
            onChange={obtenerDatosFormulario}
          >
            <option value="">-- Seleccione --</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
          </Select>
      </Campo>
      
      <Campo>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basico"
          checked={plan === "basico"}
          onChange={obtenerDatosFormulario}
        /> Basico

        <InputRadio
          type="radio"
          name="plan" 
          value="completo"
          checked={plan === "completo"}
          onChange={obtenerDatosFormulario}
        /> Completo
      </Campo>

      <Boton type="submit">Cotizar</Boton>
    </form>

   );
}

Formulario.propTypes = {
  guardarCotizacion : PropTypes.func.isRequired, 
  guardarVerSpinner: PropTypes.func.isRequired
}
 
export default Formulario;