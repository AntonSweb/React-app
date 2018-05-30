import React, {Component} from 'react';
import {connect} from 'react-redux';
import {required} from "./formValidator";
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Select from 'react-validation/build/select';
import button from 'react-validation/build/button';
import Textarea from 'react-validation/build/textarea';
import {asyncGetFilms,  addNewFilm, viewDetails} from "../actions/actionFilm";

class NewFilms extends Component {
    constructor(props) {
        super(props);
        this.state = {title: '', release: '', stars: ''};
    }
    handleChangeTitle(event) {
        this.setState({title: event.target.value});
    }
    handleChangeRelease(event) {
        this.setState({release: event.target.value});
    }
    handleChangeStars(event) {
        this.setState({stars: event.target.value});
    }
    handleSubmit (e) {
        e.preventDefault();
        let data = this.form.getValues();
        let flag = true;

        for(let key in data){
            if (data.hasOwnProperty(key) && data[key] === '') {
                flag = false;
            }
        }
        if(flag){
            this.props.addFilmFunction(data);
            this.props.getDetailsFunction(data);
            this.props.getFilmsFunction();
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            this.setState({
                title: [],
                release: [],
                stars: []
            });
        } else {
            this.form.validateAll();
        }
    }

    render() {

        return (
            <div className="col-12 col-md-6 movie__add">
                <Form id="form" className="movie__form" ref={c => { this.form = c }}>
                    <div className="form-group">
                        <label htmlFor="form-title">Film title:</label>
                        <Input
                            validations={[required]}
                            onChange={this.handleChangeTitle.bind(this)}
                            value={this.state.title}
                            id="form-title" className="form-control form-control-lg movie__form-in" type="text" name="title" placeholder="title..."/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="form-release">Film release:</label>
                        <Input
                            value={this.state.release}
                            validations={[required]}
                            onChange={this.handleChangeRelease.bind(this)}
                            id="form-release" className="form-control form-control-lg movie__form-in" type="number" name="release" placeholder="release..." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="form-format">Film format:</label>
                        <Select validations={[required]} id="form-format" className="form-control form-control-lg movie__form-select" type="text" name="form" placeholder="format...">
                            <option defaultValue=""></option>
                            <option defaultValue="VHS">VHS</option>
                            <option defaultValue="DVD">DVD</option>
                            <option defaultValue="Blue-ray">Blue-ray</option>
                        </Select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="form-stars">Film Stars:</label>
                        <Textarea
                            validations={[required]}
                            value={this.state.stars}
                            onChange={this.handleChangeStars.bind(this)}
                            id="form-stars" className="form-control form-control-lg movie__form-in" type="text" name="stars" placeholder="stars..." rows="3">
                            Enter the actors
                        </Textarea>
                    </div>
                    <div className="form-group movie__btn-wrap">
                        <button onClick={this.handleSubmit.bind(this)} type="button" className="btn btn-lg btn-dark button movie__btn movie__form-send" name="send" value="Add Film">
                            SEND
                        </button>
                    </div>
                </Form>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        hasError: state.itemsError,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getFilmsFunction: () => {
            dispatch(asyncGetFilms());
        },
        addFilmFunction: newFilm => {
            addNewFilm(newFilm)
        },
        getDetailsFunction: film => {
            dispatch(viewDetails(film))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewFilms);

