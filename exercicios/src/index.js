import React from 'react' //usa jsx
import ReactDOM from 'react-dom'//usa dom

// import Primeiro from './componentes/primeiro'
// import BomDia from './componentes/BomDia'

// import { BoaNoite, BoaTarde } from './componentes/Multiplos'
// import Multi from './componentes/Multiplos'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

const elemento = <h1>React 2</h1> //jsx
ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
        </Pai>
    </div>    
, document.getElementById('root'))//dom