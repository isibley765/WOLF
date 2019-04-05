import React from 'react';

import styles from "./TextView.css"

export default class TextView extends React.Component {
    constructor(props) {
        super(props);
        
        this.renderParagraphs = this.renderParagraphs.bind(this);
    }

    renderParagraphs() {
        const paragraphs = this.props.paragraphs;
        
        return paragraphs.map((text, index) =>
            <p key={index}>
                {text}
            </p>
      );
    }

    componentDidMount() {
        console.log("Did mount");
    }

    render() {
        return (
            <div className={styles.container}>
                {this.renderParagraphs()}
            </div>
        )
    }
}