import './Logo.css'
import logo from '../../../assets/images/meuLogoHorizontal.png'
import logoSmall from '../../../assets/images/meuLogoLogo.png'

import { React, useState, useEffect } from 'react'

const Logo = () => {
    const [logoSrc, setLogoSrc] = useState(logo);
    const [isSmall, setIsSmall] = useState(false);
  
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setLogoSrc(logoSmall);
                setIsSmall(true); // Define como logo vertical quando a largura for menor ou igual a 768px
            } else {
                setLogoSrc(logo);
                setIsSmall(false); // Mantém como logo horizontal para outras larguras de tela
            }
        };
  
      // Adiciona um event listener para escutar mudanças de tamanho de tela
      window.addEventListener('resize', handleResize);
  
      // Executa o handleResize uma vez ao montar o componente para definir o logo inicialmente
      handleResize();
  
      // Remove o event listener ao desmontar o componente para evitar vazamentos de memória
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return (
      <aside className="logo d-sm-flex">
        <a href="/" className="logo">
          <img src={logoSrc} alt="logo" className={isSmall ? 'img-fluid logo-small' : 'img-fluid'} />
        </a>
      </aside>
    );
  };

export default Logo