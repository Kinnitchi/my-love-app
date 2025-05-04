function SpecialMessage() {
  const runCode = () => {
    console.log("audio");
    var audio = new Audio('/audios/Luisa_Sonza_Iguaria.mp3'); // Corrected path
    debugger;
    audio.volume = 0.03; // Set volume to 50%
    audio.play();
    if (igor + giovanna) return true;
  };

  return (
    <div style={{
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    }}>
      <h1 style={{ color: '#333' }}>Para alguém especial</h1>
      <p style={{ color: '#555', fontSize: '18px' }}>
        Você é a luz que ilumina meus dias e a razão do meu sorriso.
        <br />
        Obrigado por estar sempre ao meu lado. Amo você!
      </p>
      <h3>Meu codigo para voce: </h3>
      <pre style={{
        backgroundColor: '#282c34',
        padding: '10px',
        borderRadius: '5px',
        fontSize: '16px',
        color: '#61dafb', // Light blue for keywords
        fontFamily: 'monospace', // Monospace font for code
        overflowX: 'auto', // Horizontal scroll for long lines
        height: '30vh', // Auto height for code block
        fontFamily: "JetBrains Mono, monospace",
        fontStyle: "italic",
      }}>
        <span style={{ color: '#fdad35' }}>const</span> <span style={{ color: '#F924E7' }}>Igor</span> = <span style={{ color: '#ff0' }}>"Igor Oliveira"</span>;
        <br />
        <span style={{ color: '#fdad35' }}>const</span> <span style={{ color: '#F924E7' }}>Giovanna</span> = <span style={{ color: '#ff0' }}>"Giovanna Delibi"</span>;
        <br />
        <br />
        <span style={{ color: '#fdad35' }}>if</span>(<span style={{ color: '#F924E7' }}>Igor</span> <span style={{ color: '#98c379' }}>❤️</span> <span style={{ color: '#F924E7' }}>Giovanna</span>) <span style={{ color: '#fdad35' }}>return</span> <span style={{ color: '#ea2f0f' }}>true</span>;
      </pre>
      <button
        onClick={runCode}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        Run Code
      </button>
    </div>
  );
}

export default SpecialMessage;