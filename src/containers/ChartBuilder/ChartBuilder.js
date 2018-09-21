import React, {Component} from 'react';

import classes from './ChartBuilder.css';
import HighChart from '../../components/Charts/HighChart/HighChart';
import HighStock from '../../components/Charts/HighStock/HighStock';
import HighMap from '../../components/Charts/HighMap/HighMap';

class ChartBuilder extends Component {

    render () {
        return (
            <div className={classes.ChartBuilder}>
                <h1>HighChart</h1>
                <HighChart />
                <h1>HighStock</h1>
                <HighStock />
                <h1>HighMaps</h1>
                <HighMap />
            </div>
        );
    }
}

export default ChartBuilder;