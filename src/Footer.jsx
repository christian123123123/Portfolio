import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <footer className="footer">
    
      <div className="footer-container">
        <h2 className="footer-title">Let’s Connect!</h2>
        <p className="footer-subtitle">Follow me on my gaming journey:</p>
        <div className="footer-socials">
          <a href="https://github.com/christian123123123" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" title="GitHub"></i>
          </a>
          <a href="https://www.linkedin.com/in/christian-akkary-17655b296/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin" title="LinkedIn"></i>
          </a>
         
        </div>
      </div>
    </footer>
  );
}

export default Footer;
