import React from 'react';

import styles from "./DisplayText.css"

export default class DisplayText extends React.Component {
    constructor(props) {
        super(props);
        
        this.renderList = this.renderList.bind(this);
    }

    renderList() {
        const list = this.props.list;

        return list.map((text, index) => {
            return <p key={index}>{text} </p>
        });
    }

    componentDidMount() {
        // console.log(this.props);
    }

    render() {
        return (
            <div className={styles.container}>
                {this.renderList()}
            </div>
        )
    }
}