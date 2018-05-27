import React, {Component} from 'react';
import {required} from "./FormValidator";
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';

class AddNewFilm extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {values: {}};
    // }

    handleSubmit (e) {
        e.preventDefault();
        let data = this.form.getValues();
        let flag = true;

        for(let key in data){
            if (data[key] === ''){
                flag = false;
            }
        }

        if(flag){
            this.props.newFilm(data);
            this.props.getFilms();
            console.log(data);
        } else {
            this.form.validateAll();
        }
    }
    render() {

        return (
            <Form id="movie-form" className="movie__form" ref={c => { this.form = c }}>
                <Input validations={[required]} className="movie__form-in" type="text" name="name" placeholder="title..."/>
                <Input validations={[required]} className="movie__form-in" type="number" name="release" placeholder="release..." />
                <Input validations={[required]} className="movie__form-in" type="text" name="form" placeholder="format..." />
                <Input validations={[required]} className="movie__form-in" type="text" name="stars" placeholder="stars..." />
                <button onClick={this.handleSubmit.bind(this)} className="button movie__form-send" name="send" value="Add Film">SEND</button>
            </Form>
        )
    }
}
export default AddNewFilm;

