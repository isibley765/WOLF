import React from 'react';

import styles from "./DisplayImage.css"

export default class DisplayImage extends React.Component {
    constructor(props) {
        super(props);
 
    }

    componentDidMount() {
        console.log(this.props.imgurl);
    }

    render() {
        return (
                <img src={this.props.imgurl} alt="Oops :/" height="100" /> 
        )
    }
}