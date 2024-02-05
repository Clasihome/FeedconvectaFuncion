import { useContext, useReducer } from 'react';
import context from '../context';
import { useLocation } from '@reach/router';

export default (values)=> {
  const location = useLocation();
  const { typeId, officeId } = useContext(context);

  // Obtén los parámetros de la URL y asigna valores predeterminados si no existen
  const searchParams = Object.fromEntries(new URLSearchParams(location.search).entries());

  // Utiliza useReducer para manejar los valores del formulario
  const [params, setParams] = useReducer((current, next) => ({ ...current, ...next }), { ...values, ...searchParams });

  // Función para manejar cambios en el formulario
  const onChange = (e) => {
    setParams({ [e.target.id]: e.target.value });
  }

  // Función para obtener la URL completa con los parámetros
  const getUrl = ()=> {
    const fixedParams = `/properties/?status=PUBLICADA,ARRENDADA,VENDIDA&email=katy@morelpropiedades.cl&email=massiel@morelpropiedades.cl&typeId=${typeId}&id=${officeId}`;

    // Agrega el parámetro "address" a la URL si existe en los parámetros del formulario
    if(params.address !== ''){
      return fixedParams + `&address=${encodeURIComponent(params.address)}`;
    }

    // Agrega el parámetro "searchString" si existe
    if(params.stringSearch !== ''){
      return fixedParams + `&searchString=${encodeURIComponent(params.stringSearch)}`;
    }

    // Agrega los demás parámetros a la URL
    return fixedParams + "&" + new URLSearchParams(params).toString();
  }

  return {
    values: params,
    setValues: setParams,
    onChange,
    getUrl,
  };
}
