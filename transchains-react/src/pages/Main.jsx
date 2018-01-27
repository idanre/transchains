import React from 'react';
import {Link} from 'react-router-dom';

export default class MainPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Wazzup</h1>
                <Link to={"/start"}>Play</Link>
            </div>
        );
    }
}