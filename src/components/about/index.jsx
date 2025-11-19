import imgStore1 from '../../assets/store_1.jpg'
import imgStore2 from '../../assets/store_2.jpg'
import imgStore3 from '../../assets/store_3.jpg'
import imgStore5 from '../../assets/store_5.jpg'
import imgStore6 from '../../assets/store_6.jpg'
import divideBar from '../../assets/divideBar.svg'
import './style.css'

function About() {
    return(
        <div className='about'>
            <img src={divideBar}></img>
            <h3>Nossa História:</h3>
            <p> Há mais de um século e meio, a  Poções & Soluções tem sido o destino confiável para aqueles que  buscam excelência em preparados mágicos. 
                Localizada no histórico Beco  Vertical, nossa loja mantém viva a tradição familiar de criar poções com precisão artesanal e ingredientes da mais fina qualidade. 
                Cada elixir  em nossa coleção é cuidadosamente formulado para atender às necessidades específicas da comunidade mágica, desde soluções cotidianas até  preparações especiais para ocasiões únicas.
            </p>
            <p>
                Em um mundo onde a pressa muitas vezes compromete a qualidade, nós nos  mantemos fiéis aos métodos tradicionais que consagraram nossa reputação. 
                Nossos mestres potioneiros combinam conhecimento ancestral com  rigorosos padrões de segurança, garantindo que cada frasco entregue em  suas mãos represente o ápice da arte potioneira. 
                Explore nosso catálogo e descubra por que gerações de bruxos e bruxas confiam em nós para suas  necessidades mágicas.
            </p>
            <h3>Visite nossa loja!</h3>
            <div className='img1'>
                <img src={imgStore5}></img>
                <img src={imgStore2}></img>
                <img src={imgStore3}></img>
            </div>
            <div className='img2'>
                <img src={imgStore1}></img>
                <img src={imgStore6}></img>
            </div>
        </div>
    );
}

export default About;