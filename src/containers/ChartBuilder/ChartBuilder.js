import React, {Component} from 'react';

import classes from './ChartBuilder.css';
import HighChart from './../../components/Charts/HighChart/HighChart';

class ChartBuilder extends Component {

    render () {
        return (
            <div className={classes.ChartBuilder}>
                <h1>HighChart</h1>
                <HighChart />
                <h1>HighStock</h1>
                <h1>HighMaps</h1>
            </div>
        );
    }
}

export default ChartBuilder;