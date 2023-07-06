import React from 'react'
import ReactDOM from 'react-dom/client'
import SuperHeader, {Saludar, Nombrar, Mates} from './componenentes'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)


root.render(<>  
    <SuperHeader/>
    <Saludar habilidad='matemáticas' />
    <Saludar habilidad='estadística' />
    <Saludar habilidad='programación' />
    <Saludar habilidad={24} />
    <Saludar habilidad={[7,'mundo',547]} />
    <Nombrar />
    </>)