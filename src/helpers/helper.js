//Obtiene la diferencia de años
export function obtenerDiferenciaYear(year){
  return new Date().getFullYear() - year;
}

//calcula el total a pagar segun la marca
export function obtenerTotalSegunMarca(marca){
  let incremento;

  switch (marca) {
    case 'americano':
        incremento = 1.30;
      break;
    case 'europeo':
        incremento = 1.15;
      break;
    case 'asia':
        incremento = 1.05;     
      break;
    default:
      break;
  }

  return incremento;
}

export function obtenerSegunPlan(plan){
  let incremento;

  if(plan === 'basico'){
    incremento = 1.20;
  }else{
    incremento = 1.50;
  }

  return incremento;
}