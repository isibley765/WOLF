import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
 
    }

    componentDidMount() {
        console.log("Did mount")
    }

    render() {
        return (
            <div> Running and ready </div>
        )
    }
}