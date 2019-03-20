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
            <div className={styles.container} >
                <div className={styles.data_column} >
                    <Card title="Show me 1" />
                </div>
                <div className={styles.data_column} >
                    <Card title="Show me 2" />
                </div>
                <div className={styles.data_column} >
                    <Card title="Show me 3" />
                </div>
            </div>
        )
    }
}

render(<App />, document.getElementById('app'));
