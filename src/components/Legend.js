import React from 'react'

export const Legend = ({ capPercent, startYear, endYear }) => {

    const styles = {
        wrapper: {
            marginLeft: 150,
            marginRight: 50
        },
        legendEntry: {
                width: 50,
                display: 'inline-block',
                marginTop: 15, 
                marginRight: 15, 
                marginBottom: 15, 
                marginLeft: 0 
        },
        sAndP: {
            backgroundColor: '#0365c0'
        },
        capped: {
            backgroundColor: '#00882b'
        }
    };

    return (
        <div style={styles.wrapper}>
            <div>
                <span style={{...styles.legendEntry,...styles.sAndP}}>&nbsp;</span>
                S&amp;P
            </div>
            <div>
                <span style={{...styles.legendEntry,...styles.capped}}>&nbsp;</span>
                Capped Product
            </div>
        </div>
    );

};