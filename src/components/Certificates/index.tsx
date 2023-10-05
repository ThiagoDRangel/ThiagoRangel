import React, { useState } from 'react';
import certificates from '../../database/certificates';
import ICertificates from '../../interfaces/ICertificates';
import './styles.css';

function Certificates() {
  const [inputValue, setInputValue] = useState<string>('');
  const [filteredCertificates, setFilteredCertificates] = useState<ICertificates[]>([]);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value.toLowerCase();
    setInputValue(value);
  }

  // Mova a lógica de filtragem para dentro do retorno principal
  const filtered = certificates.filter(cert =>
    cert.stacks.some(stack => stack.toLowerCase().includes(inputValue))
  );

  return (
    <section className="main-container">
      <div className="container-input-btn">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="input-search"
          placeholder='Busque por uma stack'
        />
        <button
          onClick={() => setFilteredCertificates(filtered)}
          className="btn-search"
        >
          Buscar
        </button>
      </div>
      <div>
        {filteredCertificates.map(({image, url, issuer, stacks, id, name}) => {
          const filterStacks = stacks.join(', ');
          return (
            <div key={id} className="render-certificates">
              <div className="name-url-container">
                <img className="image-certificate" src={image} alt={issuer} />
                <p>{name}</p>
                <a href={name}><p>{url}</p></a>
                <p className="format-stacks">{filterStacks.toUpperCase()}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Certificates;
