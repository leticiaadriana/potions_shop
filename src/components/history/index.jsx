import {Link} from 'react-router-dom'
import imgStore from '../../assets/store_5.jpg'
import divideBar from '../../assets/divideBar.svg'
import './style.css'

function History () {
    return(
        <div className='history'>
            <img src={divideBar}></img>
            <h3>Nossa História:</h3>
            <div className='content'>
                <img src={imgStore} className='imgStore'></img>
                <div className='text'> 
                    <p>Nossa loja atende a comunidade mágica há mais de 150 anos Beco Vertical. 
                    Combinamos métodos ancestrais com descobertas modernas na arte mágica, 
                    preparando cada poção com muita qualidade e amor.</p>
                    <Link to="/about">
                        <button>Saiba mais!</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default History;