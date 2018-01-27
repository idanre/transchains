import React from 'react';

export default class StartPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { message: "" }
    }
    componentWillMount(params) {
        fetch("https://us-central1-transchains.cloudfunctions.net/app/messages/-L3mAl6PDjE35rMZI5XW")
            .then(response => { return response.json(); }).then(jsonResponse => {
                this.setState({message: jsonResponse.data.message});
            });
        };
    
    render() {
        return (
            <div>
                <h1>Start</h1>
                <span>{this.state.message}</span>
            </div>
        );
    }
}