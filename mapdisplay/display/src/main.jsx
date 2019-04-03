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

        console.log({...styles.data_column, ...styles.flex1})
        console.log(styles.data_column)
    }

    render() {
        return (
            <div className={`container-fluid`}>
                <div className={`row`} >
                    <div className={`col-sm-4 ${styles.row40}`} >
                            <Image imgurl="src/images/gray-fox-big-eyes.jpg"/>
                    </div>
                    <div className={`col-sm-8`} >
                        <Card1 title="Show me 2.1" />
                        <Card1 title="Show me 1.2" />
                    </div>
                </div>
                <div className={`row`} >
                    <div className={`col-sm-4 ${styles.row60}`} >
                        <Card2 title="Show me 2.1" />
                    </div>
                    <div className={`col-sm-4`} >
                        <Card2 title="Show me 2.1" />
                    </div>
                    <div className={`col-sm-4`} >
                        <Card2 title="Show me 1.1" />
                    </div>
                </div>
            </div>
        )
    }
}

render(<App />, document.getElementById('app'));
