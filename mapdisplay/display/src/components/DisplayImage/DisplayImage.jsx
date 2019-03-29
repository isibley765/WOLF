import React from 'react';

import styles from "./DisplayImage.css"

export default class DisplayImage extends React.Component {
    constructor(props) {
        super(props);
 
    }

    componentDidMount() {
        console.log("Did mount");
    }

    render() {
        return (
            <div className={styles.container}>
            </div>
        )
    }
}