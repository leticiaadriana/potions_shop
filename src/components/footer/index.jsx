import "./style.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <h3 className="footer-title">Contato e informações:</h3>

        <div className="footer-info">
          <div className="footer-left">
            <p>contato@poçõesesoluções.com</p>
            <p>(44) 20 7946 0958</p>
          </div>

          <div className="divider"></div>

          <div className="footer-right">
            <p>📍 Beco Vertical, Nº 73 - Londres</p>
            <p>Segunda a Sábado, 9h às 18h</p>
          </div>
        </div>

        <center>
            <p className="footer-copy">© 2025 Poções e Soluções - Merigold</p>
        </center>
    </footer>
    </>
  );
}

export default Footer;
