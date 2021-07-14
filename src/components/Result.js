import React from 'react';

function Result(props) {
    const styles = {
        textTotalValue: {
            fontSize: 20,
            right: 0,
            marginTop: 5
        },
        textTotalInformation: {
            fontSize: 20,
            fontWeight: '600',
            right: 0,
            marginTop: 5
          },
    }

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={styles.textTotalInformation}>Total Valor da Mercadoria à 3%:</span>
                    <span style={styles.textTotalInformation}>Total Valor da Mercadoria à 3.5%:</span>
                    <span style={styles.textTotalInformation}>Total por Peso:</span>
                    <span style={styles.textTotalInformation}>Total por Volumes:</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 20 }}>
                    <span style={styles.textTotalValue}>{props.totalValorMercadoriaTres}</span>
                    <span style={styles.textTotalValue}>{props.totalValorMercadoriaTresMeio}</span>
                    <span style={styles.textTotalValue}>{props.totalPeso}</span>
                    <span style={styles.textTotalValue}>{props.totalVolume}</span>
                </div>
            </div>
        </div>
    );
}

export default Result;