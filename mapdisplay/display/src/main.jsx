import React from 'react';
import { render } from 'react-dom';

import styles from "./main.css";

import TemplateExample from './components/TemplateExample/TemplateExample.jsx';
import Image from './components/DisplayImage/DisplayImage.jsx';
import Card1 from './components/Card/Card1.jsx';
import Card2 from './components/Card/Card2.jsx';
import CardContent from './components/Card/CardContent.jsx';

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
                    <Card1 title="Show me 1.1" />
                    <Card1 title="Show me 1.2" />
                    <Card1 title="Show me 1.3" />
                </div>
                <div className={styles.data_row} >
                    <Card2 title="Show me 2.1" />
                    <Card1 title="Show me 1.2" />
                </div>
                <div className={styles.data_row} >
                    <Card2 title="Show me 2.1" />
                </div>
                <div className={styles.data_row} >
                    <Card2 title="Show me 1.1" />
                    <CardContent>
                        <Image imgurl="src/images/gray-fox-big-eyes.jpg"/>
                    </CardContent>
                </div>
            </div>
        )
    }
}

render(<App />, document.getElementById('app'));
