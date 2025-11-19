import imgElixir from '../../assets/elixir.jpg'
import imgPotion from '../../assets/potion.jpg'
import imgTradition from '../../assets/tradition.jpg'
import divideBar from '../../assets/divideBar.svg'
import './style.css'

function Advantages () {
    return(
    <div className='advantages'>
        <img src={divideBar}></img>
        <h3>Um novo capítulo em sua jornada:</h3>
        <div className='icons'>
            <div className='icon'>
                <img src={imgElixir} className='iconImg'></img>
                <p>Elixires</p>
            </div>
            <div className='icon'>
                <img src={imgPotion} className='iconImg'></img>
                <p>Poções</p>
            </div>
            <div className='icon'>
                <img src={imgTradition} className='iconImg'></img>
                <p>Tradição</p>
            </div>
        </div>
    </div>
    );
}

export default Advantages;