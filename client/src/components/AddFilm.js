import React, {Component} from 'react';
import {required} from "./formValidator";
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Select from 'react-validation/build/select';
import button from 'react-validation/build/button';
import Textarea from 'react-validation/build/textarea';


class NewFilms extends Component {

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
            this.props.newFilm(data);
            this.props.getFilms();
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        } else {
            this.form.validateAll();
        }
    }

    render() {

        return (
            <div className="col-6 movie__add">
                <Form id="form" className="movie__form" ref={c => { this.form = c }}>
                    <div className="form-group">
                        <label htmlFor="form-title">Film title:</label>
                        <Input validations={[required]} id="form-title" className="form-control form-control-lg movie__form-in" type="text" name="name" placeholder="title..."/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="form-release">Film release:</label>
                        <Input validations={[required]} id="form-release" className="form-control form-control-lg movie__form-in" type="number" name="release" placeholder="release..." />
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
                        <Textarea validations={[required]} id="form-stars" className="form-control form-control-lg movie__form-in" type="text" name="stars" placeholder="stars..." rows="3">
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
export default NewFilms;

