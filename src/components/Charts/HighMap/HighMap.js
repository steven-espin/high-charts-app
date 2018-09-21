import React, {Component} from 'react';
import HighMaps from './../HighMaps';
import maps from './mapdata/europe';

import classes from './HighMap.css'

const config = {
    chart: {
      spacingBottom: 20
    },
    title: {
      text: 'Europe time zones'
    },
  
    legend: {
      enabled: true
    },
  
    plotOptions: {
      map: {
        allAreas: false,
        joinBy: ['iso-a2', 'code'],
        dataLabels: {
          enabled: true,
          color: 'white',
          style: {
            fontWeight: 'bold'
          }
        },
        mapData: maps,
        tooltip: {
          headerFormat: '',
          pointFormat: '{point.name}: <b>{series.name}</b>'
        }
  
      }
    },
  
    series: [{
      name: 'UTC',
      data: ['IE', 'IS', 'GB', 'PT'].map(function (code) {
        return {code: code};
      })
    }, {
      name: 'UTC + 1',
      data: ['NO', 'SE', 'DK', 'DE', 'NL', 'BE', 'LU', 'ES', 'FR', 'PL', 'CZ', 'AT', 'CH', 'LI', 'SK', 'HU',
        'SI', 'IT', 'SM', 'HR', 'BA', 'YF', 'ME', 'AL', 'MK'].map(function (code) {
        return {code: code};
      })
    }]
  };

class HighMap extends Component {
    render () {
        return (
            <div className={classes.HighMap}>
                <HighMaps config={config} /> 
            </div>
        );
    }
} 

export default HighMap;