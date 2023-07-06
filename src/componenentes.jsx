export function Saludar({habilidad}){
    return <div>
        <h1> Hola ReactJS </h1>
        <p> Este es un componente ejemplo que enuncia mis habilidades clave, estas son: </p>
        <p> {habilidad} </p>
    </div>
}

export function Nombrar(){
    const name = 'Ric'
    const x = <div>
        <h2> Mi nombre es {name} </h2>
    </div>

    return x
}


export function Header(){
    return <header class="header">
    <img src="img/RFM_logo-removebg.png" alt="logo de Reporte de felicidad de México" width="120px"></img>
    <div class="links-header">
        <a href="">Blog</a>
        <a href="">Base de datos</a>
        <a href="">About</a>
        <a href="">FAQ</a>
    </div>
</header>
}

export default Header