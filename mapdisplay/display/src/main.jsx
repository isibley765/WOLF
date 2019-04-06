import React from 'react';
import { render } from 'react-dom';

import styles from "./main.css";

import TemplateExample from './components/TemplateExample/TemplateExample.jsx';
import Image from './components/DisplayImage/DisplayImage.jsx';
import TextList from './components/DisplayText/DisplayList.jsx';
import TextParagraphs from './components/DisplayText/DisplayParagraph.jsx';
import Card1 from './components/Card/Card1.jsx';
import Card2 from './components/Card/Card2.jsx';
import CardContent from './components/Card/CardContent.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            base_text: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis feugiat vivamus at augue eget. Tellus cras adipiscing enim eu. Etiam dignissim diam quis enim lobortis. Quis hendrerit dolor magna eget est lorem. Morbi tristique senectus et netus et malesuada fames. Sagittis id consectetur purus ut faucibus pulvinar elementum. Urna duis convallis convallis tellus id. Adipiscing elit duis tristique sollicitudin nibh. Gravida neque convallis a cras semper auctor neque.",
                "Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Imperdiet proin fermentum leo vel orci. Cursus mattis molestie a iaculis. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Euismod lacinia at quis risus. Sit amet aliquam id diam maecenas. Consequat interdum varius sit amet mattis vulputate enim nulla. Malesuada fames ac turpis egestas integer. Dictum varius duis at consectetur lorem donec. Pulvinar neque laoreet suspendisse interdum consectetur.",
                "Proin sagittis nisl rhoncus mattis rhoncus urna neque. Amet volutpat consequat mauris nunc congue nisi vitae. Lacus vel facilisis volutpat est velit egestas dui id. Vel eros donec ac odio tempor orci dapibus. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Fringilla phasellus faucibus scelerisque eleifend donec pretium.",
                "Aliquam sem fringilla ut morbi. Tellus in hac habitasse platea. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Eleifend donec pretium vulputate sapien nec. Faucibus et molestie ac feugiat sed lectus. Justo laoreet sit amet cursus sit amet.",
                "Nunc vel risus commodo viverra maecenas accumsan lacus. Odio tempor orci dapibus ultrices. Neque convallis a cras semper. Porta nibh venenatis cras sed. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Amet luctus venenatis lectus magna fringilla urna porttitor.",
            ]
        };
        
        console.log(this.state.base_text.slice(0,2));
    }

    componentDidMount() {
        // console.log("Did mount");
        console.log(this.state.base_text.slice(0,2));

        window.react = this;
    }

    render() {
        return (
            <div className={`container-fluid`}>
                <div className={`row ${styles.row40}`} >
                    <div className={`col-sm-4 ${styles.row60}`} >
                        <CardContent>
                                <Image imgurl="src/images/gray-fox-big-eyes.jpg"/>
                        </CardContent>
                    </div>
                    <div className={`col-sm-8 ${styles.flex_center}`} >
                        <CardContent>
                                <TextParagraphs list={this.state.base_text.slice(0,4)} />
                        </CardContent>
                    </div>
                </div>
                <div className={`row ${styles.row60}`} >
                    <div className={`col-sm-4`} >
                        <CardContent>
                                <TextParagraphs list={this.state.base_text.slice(2,4)} />
                        </CardContent>
                        <CardContent>
                                <Image
                                    width={45}
                                    imgurl="src/images/three_pups_multicolored.jpg"
                                />
                                <Image
                                    width={55}
                                    imgurl="src/images/two_pups.jpg"
                                />
                        </CardContent>
                        <CardContent>
                                <TextParagraphs list={this.state.base_text.slice(4,5)} />
                        </CardContent>
                    </div>
                    <div className={`col-sm-4`} >
                        <CardContent>
                                <Image imgurl="src/images/red_fox_sketch.jpg"/>
                        </CardContent>
                        <CardContent>
                                <TextParagraphs list={this.state.base_text.slice(3,5)} />
                        </CardContent>
                    </div>
                    <div className={`col-sm-4`} >
                        <CardContent>
                                <TextParagraphs list={this.state.base_text.slice(3,4)} />
                        </CardContent>
                        <CardContent>
                                <Image imgurl="src/images/two_pups.jpg"/>
                        </CardContent>
                    </div>
                </div>
            </div>
        )
    }
}

render(<App />, document.getElementById('app'));
