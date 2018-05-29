import React, {Component} from 'react';
import {typeFile, sizeFile} from "../constans/const";
import {parseFile} from "./parseData";

class LoadFilms extends Component {

    constructor(props) {
        super(props);
        this.state = {renderTextLoad: ''};
    }

    scrollTop() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
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
                    that.scrollTop();
                };
            })(fs);
            reader.readAsText(fs);
            that.setState({
                renderTextLoad: ''
            });
        } else {
            this.setState({
                renderTextLoad: <p className="form-error">Please select the file txt format and size less then 10mb</p>
            });
        }
    }

    deleteAllFilms() {
        if (this.props.info.length !== 0){
            const confirmation = window.confirm('Are you shure?');
            if (confirmation){
                this.scrollTop();
                this.props.deleteAll();
                this.props.getDetails(null);
                this.props.getFilms();
            }
        }
    }

    render() {
        return (
            <div className="col-12 col-md-6 form-group movie__load">
                <label htmlFor="movie__load-id" className="movie__load-label">Load file</label>
                <input onChange={this.loadFile.bind(this)} id="movie__load-id" className="form-control-file movie__in-load" type="file" name="files[]" multiple/>
                {this.state.renderTextLoad}
                <div className="form-group movie__btn-wrap">
                    <button onClick={this.deleteAllFilms.bind(this)} type="button" className="btn btn-lg btn-outline-danger button movie__btn movie__remove" name="send" value="Remove Film">
                        Remove All Films
                    </button>
                </div>
            </div>
        )
    }
}

export default LoadFilms;