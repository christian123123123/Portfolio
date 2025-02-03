import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-title">
          <span className="title-glitch" data-text="Let's Connect!">Let&apos;s Connect!</span>
        </h2>
        <p className="footer-subtitle">
          <span className="typing-animation">Follow my digital footprint...</span>
        </p>
        
        <div className="holographic-grid"></div>
        
        <div className="footer-socials">
          <a href="https://github.com/christian123123123" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
            <span className="icon-pulse"></span>
          </a>
          <a href="https://www.linkedin.com/in/christian-akkary-17655b296/" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
            <span className="icon-pulse"></span>
          </a>
        </div>

        <div className="cyber-line"></div>
        
        <div className="footer-credits">
          <span className="credits-glitch">01000100 01100101 01110011 01101001 01100111 01101110 01100101 01100100 00100000 01100010 01111001 00100000 01000011 01101000 01110010 01101001 01110011 01110100 01101001 01100001 01101110</span>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
