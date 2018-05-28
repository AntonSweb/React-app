import React, {Component} from 'react';
import {typeFile, sizeFile} from "../constans/const";
import {parseFile} from "./parseData";

class LoadFilms extends Component {

    constructor(props) {
        super(props);
        this.state = {renderText: ''};
    }

    loadFile(e) {
        e.preventDefault();
        const fs = e.target.files[0];
        const reader = new FileReader();
        const that = this;

        if(fs.type === typeFile && fs.size < sizeFile){
            reader.onload = (function() {
                return function(e) {
                    const fsText = e.target.result;
                    const parseData = parseFile(fsText);
                    that.props.loadFilms(parseData);
                    that.props.getFilms();
                };
            })(fs);
            reader.readAsText(fs);
            that.setState({
                renderText: ''
            });
        } else {
            this.setState({
                renderText: <p>Please select the file txt format and size less then 10mb</p>
            });
        }
        console.log(fs.name);
    }

    render() {

        return (
            <div className="movie__load">
                <input onChange={this.loadFile.bind(this)} className="movie__in-load" type="file" name="files[]" multiple/>
                {this.state.renderText}
            </div>
        )
    }
}

export default LoadFilms;