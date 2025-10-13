import "./Footer.css";

const Footer = () => (
  <footer className="main_footer container" style= {{ width: '100vw' }}>
    
    <div className="content">
        <div className="colfooter">
            
            <h3 className="titleFooter"> Perfis dos desenvolvedores da plataforma </h3>
            
            <ul>
              <li><i className="fa-brands fa-github"></i><a href="https://github.com/DjefferBP" title="Github do Djefffer"> Github do Djefffer</a></li>
              <li><i className="fa-brands fa-github"></i><a href="https://github.com/LGMVasconcelos" title="Github do Luiz"> Github do Luiz</a></li>
            
            </ul>
        </div>      
        <div className="colfooter">
           
           <h3 className="titleFooter"> Contato</h3>
           <p><i className="fa-solid fa-envelope"></i> luizgustavomoraisvasconcelos@gmail.com</p>
           <p><i className="fa-solid fa-envelope"></i> djefferbervianprange123@gmail.com</p>
        </div>
    </div>
    <div className="main_footer_copy">
        
        <p className="m-b-footer"> &copy; SIS - 2025, todos os direitos reservados.</p> 
        <p className="by"><i className="icon icon-heart-3"></i> Desenvolvido por: <a href="https://linktr.ee/Expotec2025Devs" title="Nome do desenvolvedor">Luiz Gustavo Morais Vasconcelos & Djeffer Bervian Prange</a></p>
    
    </div>
</footer>
)
export default Footer;