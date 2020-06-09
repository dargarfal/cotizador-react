import React, {useState} from 'react';
import styled from '@emotion/styled';

//Componentes
import Header from './components/Header';
import Formmulario from './components/Formulario';
import Resumen from './components/Reumen';
import Spinner from './components/Spinner'


const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;



function App() {

  const [cotizacion, guardarCotizacion] = useState({
                                                     cotizacion: '',
                                                     marca: '',
                                                     year: '',
                                                     plan: '' 
                                                    })

  const [verspinner, guardarVerSpinner] = useState(false);
  return (
    <Contenedor>
      <Header
        titulo='Cotizador de seguros'
      />
      <ContenedorFormulario>
        <Formmulario 
          guardarCotizacion={guardarCotizacion}
          guardarVerSpinner={guardarVerSpinner}
        />
        {verspinner ? <Spinner /> : null}
        
       {(cotizacion.cotizacion !== '' && !verspinner) ? 
        <Resumen 
          cotizacion={cotizacion}
        />
        :
        null}  
      </ContenedorFormulario>

   
    </Contenedor>  
  );
}

export default App;
