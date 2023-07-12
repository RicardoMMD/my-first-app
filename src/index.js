import React from 'react'
import ReactDOM from 'react-dom/client'
import SuperHeader, {Card, Nombrar, Titular} from './componenentes'
import './sass/styles.scss'


const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)


root.render(<>  
    <SuperHeader/>
    <Titular/>
    <Card titulo ='matemáticas' />
    <Card titulo={24} />
    <Card titulo={[7,'mundo',547]} />
    <Nombrar />
    </>)