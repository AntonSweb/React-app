import React, {Component} from 'react';
import {required} from "./formValidator";
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';


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
        } else {
            this.form.validateAll();
        }
    }

    deleteAllFilms() {
        this.props.deleteAll();
        this.props.getDetails(null);
        this.props.getFilms();
    }

    render() {

        return (
            <div className="movie__add">
                <Form id="movie-form" className="movie__form" ref={c => { this.form = c }}>
                    <Input validations={[required]} className="movie__form-in" type="text" name="name" placeholder="title..."/>
                    <Input validations={[required]} className="movie__form-in" type="number" name="release" placeholder="release..." />
                    <Input validations={[required]} className="movie__form-in" type="text" name="form" placeholder="format..." />
                    <Input validations={[required]} className="movie__form-in" type="text" name="stars" placeholder="stars..." />
                    <div className="movie__btn-wrap">
                        <button onClick={this.handleSubmit.bind(this)} className="button movie__btn movie__form-send" name="send" value="Add Film">
                            SEND
                        </button>
                    </div>
                </Form>
                <div className="movie__btn-wrap">
                    <button onClick={this.deleteAllFilms.bind(this)} className="button movie__btn movie__remove" name="send" value="Remove Film">
                        Remove All Films
                    </button>
                </div>
            </div>
        )
    }
}
export default NewFilms;

