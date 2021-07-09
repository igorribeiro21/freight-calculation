import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Input,
  Button
} from '@material-ui/core';

import CurrentInput from 'react-currency-masked-input';

function App() {
  const [valorMercadoria, setValorMercadoria] = useState(0);
  const [peso, setPeso] = useState(0);
  const [volume, setVolume] = useState(0);
  const [valorCobradoPeso, setValorCobradoPeso] = useState(0);
  const [valorCobradoVolume, setValorCobradoVolume] = useState(0);
  const [totalPesoTres, setTotalPesoTres] = useState('');
  const [totalPesoTresMeio, setTotalPesoTresMeio] = useState('');
  const [totalPeso, setTotalPeso] = useState('');
  const styles = {
    container: {
      width: 500,
      height: 200,
      display: 'flex',
      flexDirection: 'column',
      //backgroundColor: 'blue'
    },
    textInformation: {
      fontSize: 18,
      fontWeight: 'bold',
      marginRight: 10,
      right: 0
    },

  }
  function calcular() {
    let calculoTotalMercadoriaTres = valorMercadoria * 3 / 100;
    let calculoTotalMercadoriaTresMeio = valorMercadoria * 3.5 / 100;
    let calculoPeso = peso * valorCobradoPeso;
    setTotalPesoTres(calculoTotalMercadoriaTres)
    setTotalPesoTresMeio(calculoTotalMercadoriaTresMeio)
    setTotalPeso(calculoPeso)


  }

  return (
    <div className="App">
      <div style={styles.container}>
        <div>
          <span style={styles.textInformation}>Valor da Mercadoria:</span>
          <Input
            value={valorMercadoria}
            onChange={e => setValorMercadoria(e.target.value)}
            placeholder="Digite o valor da mercadoria"
          />
        </div>
        <div>
          <span style={styles.textInformation}>Peso: </span>
          <Input
            value={peso}
            onChange={e => setPeso(e.target.value)}
            placeholder="Digite o peso da mercadoria"
          />
        </div>
        <div>
          <span style={styles.textInformation}>Volumes:</span>
          <Input
            value={volume}
            onChange={e => setVolume(e.target.value)}
            placeholder="Digite a quantidade de volumes"
          />
        </div>
        <div style={{ marginTop: 20 }}>
          <span style={styles.textInformation}>Valor cobrado por Peso:</span>
          <Input
            value={valorCobradoPeso}
            onChange={e => setValorCobradoPeso(e.target.value)}
          />
        </div>
        <div style={{ marginTop: 10 }}>
          <span style={styles.textInformation}>Valor cobrado por Volumes:</span>
          <Input
            value={valorCobradoVolume}
            onChange={e => setValorCobradoVolume(e.target.value)}
          />
        </div>

        <Button
          onClick={() => calcular()}
        >
          Calcular
        </Button>
        <span>{totalPesoTres}</span>
        <span>{totalPesoTresMeio}</span>
        <span>{totalPeso}</span>
      
      </div>
    </div>
  );
}

export default App;
