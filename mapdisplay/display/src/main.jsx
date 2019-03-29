import React from 'react';
import { render } from 'react-dom';

import styles from "./main.css";

import TemplateExample from './components/TemplateExample/TemplateExample.jsx';
import Card from './components/Card/Card.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
 
    }

    componentDidMount() {
        console.log("Did mount");
    }

    render() {
        return (
            <div className={styles.container_row} >
                <div className={styles.data_row} >
                    <Card title="Show me 1.1" />
                    <Card title="Show me 1.2" />
                    <Card title="Show me 1.3" />
                </div>
                <div className={styles.data_row} >
                    <Card title="Show me 2.1" />
                    <Card title="Show me 2.2" />
                </div>
                <div className={styles.data_row} >
                    <Card title="Show me 3.1" />
                </div>
            </div>
        )
    }
}

render(<App />, document.getElementById('app'));
