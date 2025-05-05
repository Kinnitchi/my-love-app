import React, { useState, useRef, useEffect } from 'react';
import ImageCarousel from './ImageCarousel';
import TerminalTypewriter from './TerminalTypewriter';

function SpecialMessage() {
  const [showStopButton, setShowStopButton] = useState(false);
  const [terminalDone, setTerminalDone] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const audioRef = useRef(null);
  const images = [
    'aliancas.jpeg',
    'autodromo.jpeg',
    'autodromo2.jpeg',
    'autodromo3.jpeg',
    'jantar.jpeg',
  ];

  useEffect(() => {
    audioRef.current = new Audio('/audio/Luisa_Sonza_Iguaria.mp3');
    audioRef.current.volume = 0.02;
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);


  const runCode = () => {
    if (audioRef.current) {
      setShowStopButton(true);
      setTerminalDone(false);
      setIsTyping(true);
      setCarouselIndex(0);
      audioRef.current.play();
    }
  };

  const stopCode = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setShowStopButton(false);
      setTerminalDone(false);
      setIsTyping(false);
      setCarouselIndex(0);
    }
  };
  // Carrossel de imagens automático só quando terminalDone
  useEffect(() => {
    let interval;
    if (terminalDone && showStopButton) {
      interval = setInterval(() => {
        setCarouselIndex((prev) => (prev + 1) % images.length);
      }, 3000);
    } else {
      setCarouselIndex(0);
    }
    return () => interval && clearInterval(interval);
  }, [terminalDone, showStopButton, images.length]);


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const backgroundColor = darkMode ? 'rgb(33,33,33)' : 'rgb(255, 255, 255)';
  const textColor = darkMode ? '#e0e0e0' : '#333';
  const subtextColor = darkMode ? '#a1a1a1' : '#313131';
  const codeBackgroundColor = darkMode ? '#1e1e1e' : '#282c34';

  return (
    <div
      className='special-message'
      style={{
        border: '1px solid ' + (darkMode ? '#444' : '#ccc'),
        backgroundColor: backgroundColor,
      }}>
      <button
        aria-label="Toggle dark mode"
        title="Toggle dark mode"
        className='dark-mode-toggle'
        onClick={toggleDarkMode}
      >
        {darkMode ? '☀️' : '🌙'}
      </button>

      <h1 style={{ color: textColor }}>Eu te amo! ❤️</h1>
      <p style={{ color: subtextColor, fontSize: '18px' }}>
        Você é a luz que ilumina meus dias e a razão do meu sorriso.
        <br />
        Obrigado por estar sempre ao meu lado. Amo você!
        <br />
        <br />
        Isso é um pedacinho do meu amor por você, e eu espero que você goste! <br />
        <br />
        Você é a melhor parte de mim, e eu sou eternamente grato por ter você na minha vida.
        <br />
      </p>
      <h3 style={{ color: textColor }}>Meu codigo para voce: </h3>
      <pre
        style={{
          backgroundColor: codeBackgroundColor,
          padding: '16px',
          borderRadius: '8px',
          minHeight: '120px',
          position: 'relative',
          overflowX: 'auto',
          fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
          maxWidth: '100vw',
        }}
      >
        <span className='const-style'>const</span> <span className='var-color'>Igor</span> = <span className='string-color'>"Igor Oliveira"</span>;
        <br />
        <span className='const-style'>const</span> <span className='var-color'>Giovanna</span> = <span className='string-color'>"Giovanna Delibi"</span>;
        <br />
        <br />
        <span className='const-style'>if</span>(<span className='var-color'>Igor</span> ❤️ <span className='var-color'>Giovanna</span>) <span style={{ color: '#fede5d' }}>return</span> <span style={{ color: '#ea2f0f' }}>true</span>;
        <br />
        {/* TERMINAL */}
        <div
          className='terminal-output'
          style={{
            background: '#111',
            color: '#39ff14',
            fontFamily: 'monospace',
            fontSize: 'clamp(1em, 2.5vw, 1.1em)',
            marginTop: '18px',
            padding: '16px',
            borderRadius: '6px',
            minHeight: '32px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
            marginTop: '16px',
            textAlign: 'left',
            letterSpacing: '1.5px',
            width: '90%',
            maxWidth: '100vw',
            overflowX: 'auto',
          }}
        >
          <span style={{ opacity: isTyping || terminalDone ? 1 : 0.5, minHeight: '32px', display: 'inline-block' }}>
            {(!isTyping && !terminalDone) && 'Clique no botao Executar para rodar no terminal...'}
            <TerminalTypewriter
              text="eu te amo"
              isActive={isTyping}
              onDone={() => { setTerminalDone(true); setIsTyping(false); }}
              style={{ color: '#39ff14', fontWeight: 600, fontSize: '1.2em', letterSpacing: '2px' }}
            />
            {terminalDone && (
              <ImageCarousel
                images={images}
                currentIndex={carouselIndex}
                setIndex={setCarouselIndex}
                autoPlay={true}
                interval={2000}
              />
            )}
          </span>
        </div>

      </pre>
      <button
        onClick={runCode}
        className='run-button'
        aria-label='Executar'
        style={{
          backgroundColor: darkMode ? '#007bff' : '#007BFF',
          display: showStopButton ? 'none' : 'inline-block',
        }}
        id="runButton"
      >
        Executar
      </button>

      <button
        onClick={stopCode}
        className='stop-button'
        style={{ display: showStopButton ? 'inline-block' : 'none', }}
        id="stopButton">
        Parar
      </button>


    </div>
  );
}

export default SpecialMessage;