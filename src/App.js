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
  const [totalValorMercadoriaTres, setTotalValorMercadoriaTres] = useState('');
  const [totalValorMercadoriaTresMeio, setTotalValorMercadoriaTresMeio] = useState('');
  const [totalPeso, setTotalPeso] = useState('');
  const [totalVolume, setTotalVolume] = useState('');
  const [visibleResultados, setVisibleResultados] = useState(false);
  const styles = {
    container: {
      width: 500,
      height: 200,
      display: 'flex',
    },
    textInformation: {
      fontSize: 20,
      fontWeight: 'bold',
      right: 0,
      marginTop: 5
    },
    textTotalInformation: {
      fontSize: 20,
      fontWeight: 'bold',
      right: 0,
      marginTop: 5
    },
    textTotalValue: {
      fontSize: 20,
      right: 0,
      marginTop: 5
    },
    btnLimpar: {
      backgroundColor: '#d9534f',
      color: '#fff',
      fontWeight: 'bold',
      borderRadius: 5,
      fontSize: 18,
      width: 120
    },
    btnCalcular: {
      backgroundColor: '#0275d8',
      color: '#fff',
      fontWeight: 'bold',
      borderRadius: 5,
      fontSize: 18,
      width: 120,
      marginLeft: 15
    }

  }
  function calcular() {

    if (valorMercadoria !== null && valorMercadoria !== 0) {
      let calculoTotalMercadoriaTres = valorMercadoria.replace('.', '').replace(',', '.') * 3 / 100;
      let calculoTotalMercadoriaTresMeio = valorMercadoria.replace('.', '').replace(',', '.') * 3.5 / 100;

      setTotalValorMercadoriaTres(calculoTotalMercadoriaTres.toFixed(2).replace('.', ','));
      setTotalValorMercadoriaTresMeio(calculoTotalMercadoriaTresMeio.toFixed(2).replace('.', ','));
    } else {
      setTotalValorMercadoriaTres(0);
      setTotalValorMercadoriaTresMeio(0);
    }

    if (peso !== null && peso !== 0 && valorCobradoPeso !== null && valorCobradoPeso !== 0) {
      let calculoPeso = peso.replace('.', '').replace(',', '.') * valorCobradoPeso.replace(',', '.');
      setTotalPeso(calculoPeso.toFixed(2).replace('.', ','));
    } else {
      setTotalPeso(0);
    }

    if (valorCobradoVolume !== null && valorCobradoVolume !== 0 && volume !== null && volume !== 0) {
      let calculoVolume = valorCobradoVolume.replace(',', '.') * volume;
      setTotalVolume(calculoVolume.toFixed(2).replace('.', ','));
    } else {
      setTotalVolume(0);
    }

    setVisibleResultados(true);
  }

  function limpar() {
    setTotalValorMercadoriaTres('');
    setTotalValorMercadoriaTresMeio('');
    setTotalPeso('');
    setTotalVolume('');
    setValorMercadoria(0);
    setPeso(0);
    setVolume(0);
    setValorCobradoPeso(0);
    setValorCobradoVolume(0);
    setVisibleResultados(false);
  }

  function onChangeValorMercadoria(e) {
    var valor = formatarMoeda(e.target.value);
    setValorMercadoria(valor);
  }

  function onChangePeso(e) {
    var valor = formatarMoeda(e.target.value);
    setPeso(valor);
  }

  function onChangeValorPeso(e) {
    var valor = formatarMoeda(e.target.value);
    setValorCobradoPeso(valor);
  }

  function onChangeValorVolume(e) {
    var valor = formatarMoeda(e.target.value);
    setValorCobradoVolume(valor);
  }
  function formatarMoeda(valor) {
    valor = valor + '';
    valor = parseInt(valor.replace(/[\D]+/g, ''));
    valor = valor + '';
    valor = valor.replace(/([0-9]{2})$/g, ",$1");

    if (valor.length > 6) {
      valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }

    if (valor == 'NaN')
      valor = 0;

    if (valor.length > 0) {
      if (valor.substr(0, 1) == ',')
        valor = '0,' + valor.substr(1);
    }

    return valor;
  }

  return (
    <div className="App">
      <div style={styles.container}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={styles.textInformation}>Valor da Mercadoria:</span>
          <span style={styles.textInformation}>Peso: </span>
          <span style={styles.textInformation}>Volumes:</span>
          <span style={styles.textInformation}>Valor cobrado por Peso:</span>
          <span style={styles.textInformation}>Valor cobrado por Volumes:</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 10 }}>
          <Input
            value={valorMercadoria}
            onChange={e => onChangeValorMercadoria(e)}
            placeholder="Digite o valor da mercadoria"
          />
          <Input
            value={peso}
            onChange={e => onChangePeso(e)}
            placeholder="Digite o peso da mercadoria"
          />
          <Input
            value={volume}
            onChange={e => setVolume(e.target.value)}
            placeholder="Digite a quantidade de volumes"
          />
          <Input
            value={valorCobradoPeso}
            onChange={e => onChangeValorPeso(e)}
          />
          <Input
            value={valorCobradoVolume}
            onChange={e => onChangeValorVolume(e)}
          />
        </div>
      </div>
      <div>
        <Button
          style={styles.btnLimpar}
          onClick={() => limpar()}
        >
          Limpar
        </Button>
        <Button
          style={styles.btnCalcular}
          onClick={() => calcular()}
        >
          Calcular
        </Button>
      </div>
      {
        visibleResultados &&
        (
          <div style={{ display: 'flex' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={styles.textTotalInformation}>Total Valor da Mercadoria à 3%:</span>
              <span style={styles.textTotalInformation}>Total Valor da Mercadoria à 3.5%:</span>
              <span style={styles.textTotalInformation}>Total por Peso:</span>
              <span style={styles.textTotalInformation}>Total por Volumes:</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 20 }}>
              <span style={styles.textTotalValue}>{totalValorMercadoriaTres}</span>
              <span style={styles.textTotalValue}>{totalValorMercadoriaTresMeio}</span>
              <span style={styles.textTotalValue}>{totalPeso}</span>
              <span style={styles.textTotalValue}>{totalVolume}</span>
            </div>
          </div>

        )
      }
    </div>
  );
}

export default App;
