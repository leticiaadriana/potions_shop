import { useEffect, useState } from 'react';

function Card({ image, name, price, onClick }) {
  const cardStyle = {
    background: 'linear-gradient(180deg, #0C152B 20%, #141F37 40%, #133146 70%)',
    borderRadius: '20px',
    borderColor: '#FFFFFF',
    boxShadow: '0 0 15px #eeeeeeff',
    width: '250px',
    padding: '30px 50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: "'Playfair Display', serif",
    color: '#FFFFFF',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  };

  return (
    <div
      style={cardStyle}
      onClick={onClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 25px #93E1D3`;
        e.currentTarget.style.transform = 'translateY(-5px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `0 0 15px #FFFFFF`;
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "100px",
          height: "100px",
          objectFit: "contain",
          marginBottom: "20px",
          marginTop: '20px',
        }}
      />
      <h3 style={{ marginLeft: '10px', marginRight: '10px' }}>{name}</h3>
      <p style={{ 
        color: '#93E1D3', 
        fontSize: '18px', 
        marginBottom: '20px', 
        marginTop: '8px' 
      }}>
        {price} moedas
      </p>
    </div>
  );
}

function Modal({ pocaoId, onClose }) {
  const [pocao, setPocao] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    if (!pocaoId) return;

    setLoading(true);
    setErro(null);

    fetch(`http://localhost:5001/api/pocoes/${pocaoId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Erro ao buscar detalhes da poção');
        }
        return res.json();
      })
      .then((data) => {
        setPocao(data);
        setLoading(false);
      })
      .catch((err) => {
        setErro(err.message);
        setLoading(false);
      });
  }, [pocaoId]);

  if (!pocaoId) return null;

  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    animation: 'fadeIn 0.3s ease',
  };

  const modalContentStyle = {
    background: 'linear-gradient(180deg, #0C152B 0%, #141F37 50%, #133146 100%)',
    borderRadius: '20px',
    padding: '40px',
    maxWidth: '600px',
    width: '90%',
    maxHeight: '80vh',
    overflowY: 'auto',
    boxShadow: '0 0 30px #93E1D3',
    border: '2px solid #93E1D3',
    fontFamily: "'Playfair Display', serif",
    color: '#FFFFFF',
    position: 'relative',
    animation: 'slideUp 0.3s ease',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    background: 'transparent',
    border: 'none',
    color: '#93E1D3',
    fontSize: '30px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
    lineHeight: '1',
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const buyButtonStyle = {
    background: 'linear-gradient(90deg, #1E5A8E 0%, #2A7BA8 100%)',
    color: '#FFFFFF',
    border: 'none',
    padding: '15px 40px',
    borderRadius: '10px',
    fontSize: '18px',
    cursor: 'pointer',
    marginTop: '30px',
    fontFamily: "'Playfair Display', serif",
    boxShadow: '0 4px 15px rgba(147, 225, 211, 0.3)',
    transition: 'all 0.3s ease',
    width: '100%',
  };

  return (
    <div style={modalOverlayStyle} onClick={onClose}>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>
      <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        <button
          style={closeButtonStyle}
          onClick={onClose}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(90deg)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(0deg)'}
        >
          ×
        </button>
        
        {loading && (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <p style={{ fontSize: '18px', color: '#93E1D3' }}>
              Carregando detalhes
            </p>
          </div>
        )}

        {erro && (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <p style={{ fontSize: '18px', color: '#FF6B6B' }}>
              Erro ao carregar detalhes: {erro}
            </p>
          </div>
        )}

        {pocao && !loading && !erro && (
          <div style={{ textAlign: 'center' }}>
            <img
              src={pocao.imagem}
              alt={pocao.nome}
              style={{
                width: '150px',
                height: '150px',
                objectFit: 'contain',
                marginBottom: '20px',
              }}
            />
            <h2 style={{ 
              fontSize: '32px', 
              marginBottom: '10px',
              color: '#93E1D3' 
            }}>
              {pocao.nome}
            </h2>
            
            <p style={{ 
              fontSize: '24px', 
              color: '#93E1D3',
              marginBottom: '30px',
              fontWeight: 'bold'
            }}>
              ${pocao.preco.toFixed(2)}
            </p>

            <div style={{ 
              textAlign: 'left', 
              marginTop: '20px',
              lineHeight: '1.8'
            }}>
              <h3 style={{ 
                color: '#93E1D3', 
                marginBottom: '15px',
                fontSize: '20px'
              }}>
                Descrição:
              </h3>
              <p style={{ 
                fontSize: '16px', 
                color: '#E0E0E0',
                marginBottom: '20px'
              }}>
                {pocao.descricao}
              </p>

              <div style={{
                background: 'rgba(147, 225, 211, 0.1)',
                padding: '15px',
                borderRadius: '10px',
                marginTop: '20px',
              }}>
                <p style={{ fontSize: '14px', color: '#93E1D3' }}>
                  <strong>ID:</strong> {pocao.id}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function CardList() {
  const [pocoes, setPocoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);
  const [pocaoSelecionadaId, setPocaoSelecionadaId] = useState(null);

  useEffect(() => {
    console.log('fetch para: http://localhost:5001/api/pocoes');
    fetch('http://localhost:5001/api/pocoes')
      .then((res) => {
        console.log('resposta:', res.status, res.ok);
        if (!res.ok) {
          throw new Error('Erro ao buscar poções');
        }
        return res.json();
      })
      .then((data) => {
        setPocoes(data);
        setLoading(false);
      })
      .catch((err) => {
        setErro(err.message);
        setLoading(false);
      });
  }, []);

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(180deg, #0A0E1A 0%, #0C152B 100%)',
    padding: '40px 20px',
    fontFamily: "'Playfair Display', serif",
  };

  const gridContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const titleStyle = {
    color: '#93E1D3',
    fontSize: '36px',
    textAlign: 'center',
    marginBottom: '50px',
    textShadow: '0 0 10px rgba(147, 225, 211, 0.5)',
  };

  const cardsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '30px',
    justifyItems: 'center',
  };

  if (loading) {
    return (
      <div style={containerStyle}>
        <div style={gridContainerStyle}>
          <h3 style={titleStyle}>Carregando poções mágicas...</h3>
        </div>
      </div>
    );
  }

  if (erro) {
    return (
      <div style={containerStyle}>
        <div style={gridContainerStyle}>
          <h3 style={titleStyle}>Erro ao carregar poções</h3>
          <p style={{ fontSize: '16px', textAlign: 'center', color: '#E0E0E0' }}>
            Certifique-se de que o servidor está rodando em http://localhost:5001
          </p>
          <p style={{ fontSize: '14px', color: '#FF6B6B', textAlign: 'center' }}>
            Erro: {erro}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <div style={gridContainerStyle}>
        <h3 style={titleStyle}>Nossos produtos:</h3>
        <div style={cardsGridStyle}>
          {pocoes.map((pocao) => (
            <Card
              key={pocao.id}
              image={pocao.imagem}
              name={pocao.nome}
              price={pocao.preco}
              onClick={() => setPocaoSelecionadaId(pocao.id)}
            />
          ))}
        </div>
      </div>
      
      {pocaoSelecionadaId && (
        <Modal
          pocaoId={pocaoSelecionadaId}
          onClose={() => setPocaoSelecionadaId(null)}
        />
      )}
    </div>
  );
}

export default CardList;
export { Card };