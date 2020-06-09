import React, {Fragment} from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropType from 'prop-types';

const Datos = styled.div`
  background-color: #00838F;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  border: none;
  margin-top: 2rem;
  text-align: center;

  h1{
    font-weight: bold;
    font-size: 24px;
  }
`;

const Resultado = styled.div`
  background-color: #76dcec;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #1f8393;
  border: none;
  margin-top: 2rem;
  text-align: center;
  text-transform: uppercase;
`;

const Resumen = ({cotizacion}) => {
  return (
    <Fragment>
      <Datos>
        <h1>Resumen de Cotización</h1>
        <div>
          <p>
            <span>Marca:</span>
            {cotizacion.marca}
          </p>
          <p>
            <span>Año:</span>
            {cotizacion.year}
          </p>
          <p>
            <span>Plan:</span>
            {cotizacion.plan}
          </p>
        </div>
      </Datos>

      <Resultado>
        <TransitionGroup component="p" className="resultado">
          <CSSTransition
            classNames="resultado"
            key={cotizacion.cotizacion}
            timeout={{ enter: 500, exit: 500 }}
          >
            <p>
              <span>El total es: $ </span>
              {cotizacion.cotizacion}
            </p>
          </CSSTransition>
        </TransitionGroup>
      </Resultado>
    </Fragment>
  );
}

Resumen.propTypes = {
  cotizacion: PropType.object.isRequired
}
 
export default Resumen;