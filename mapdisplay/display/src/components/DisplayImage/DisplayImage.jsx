import React from 'react';

import styles from "./DisplayImage.css"

export default class DisplayImage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            width: this.props.width ? this.props.width : 100,
        };
 
    }

    componentDidMount() {
        console.log(this.props.imgurl);
    }

    render() {
        return (
                <img className={styles.imagestyle} style={{width: `${this.state.width}%`}} src={this.props.imgurl} alt="Oops :/" /> 
        )
    }
}