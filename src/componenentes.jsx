import PropTypes from 'prop-types'


export function Card({titulo}){
    return <div>
        <h1> {titulo} </h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum doloremque ducimus voluptates facilis, maxime doloribus sunt, accusamus eveniet sed dignissimos quidem error optio iste! Alias nobis iste ipsam excepturi tempore! </p>
    </div>
}
Card.propTypes = {
    /*Aquí pedimos que el prop "titulo" sea de tipo string y que no pueda omitirse*/
    titulo: PropTypes.string.isRequired
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
    <img src="RFM_logo-removebg.png" alt="logo de Reporte de felicidad de México" width="120px"></img>
    <div class="links-header">
        <a href="">Blog</a>
        <a href="">Base de datos</a>
        <a href="">About</a>
        <a href="">FAQ</a>
    </div>
</header>
}

export function Titular(){
    return <section class="titular">
            <div class="titular-describcion">
                <h1>Reporte de Felicidad de México</h1>
                <p>Medir la felicidad en México siguiendo las premisas del World Happiness Report desarrollado por la SDSN</p>
            </div>
            <div class="img-titular"></div>
        </section>
}

export default Header