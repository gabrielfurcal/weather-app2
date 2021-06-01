import { useRef, useEffect, useState } from 'react'

const useVanta = () => {
    const myRefDiv = useRef(null)

    const [vanta/*, setVanta*/] = useState(0) //vanta va a ser inicializado en "0"

    useEffect(() => {
        //Solo pasa una vez por dentro del if
        //vanta === 0, es igual a "vanta == false"
        if(!vanta) {
            //SOLO PASA UNA VEZ
            //Acá vamos a hacer la inicialización del "vanta"
            //Activo el efecto "clouds"

            // setVanta(Birds({
            //     el: myRefDiv.current,
            //     THREE
            // })) // vanta != 0, es diferente de falso
        }
        // Al salir de la pantalla debemos detener el efecto y des-asociar todos los recursos (div + vanta effect)
        return () => {
            //Dentro de esta función se va a realizar la tarea de destruir los recursos tomados por "vanta"
            if(vanta) {
                vanta.destroy()
            }
        }
    }, [vanta]) //Con esto me aseguro que siga funcionando bien si tuviera más variabels "use"

    return myRefDiv
}

export default useVanta