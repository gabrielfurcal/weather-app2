import React from 'react'
import { render } from '@testing-library/react'
import CityInfo from './CityInfo' //SUT: Subject Under Testing

test("CityInfo render", async () => {
    //AAA
    //Arrange
    //Act
    const city = "Buenos Aires"
    const country = "República Dominicana"
    
    //Render: renderiza el componente y retorna una serie de funciones de utilidad
    //En este caso utilizamos "findAllByRole" para "consultar" a nuestro componenete
    //Vamos a analizar su estado en el "Assert"
    const { findAllByRole } = render(<CityInfo city={city} country={country}/>)
    
    //Assert
    //findAllByRole nos va a buscar todos los componenetes que sean "heading" => H1, H2, H3... etc
    //El resultado es un array de componentes
    const cityAndCountryComponent = await findAllByRole("heading")

    //¿Cuándo el test va a ser correcto?
    //Definición:
    //Cuando en el primer elemento (heading) se encuentre la ciudad "Santo Domingo"
    //y cuando en el segundo elemento se encuentre el país "República Dominicana"
    expect(cityAndCountryComponent[0]).toHaveTextContent(city)
    expect(cityAndCountryComponent[1]).toHaveTextContent(country)

    //Si estas condiciones se cumplen (expect), el test está "ok"
})