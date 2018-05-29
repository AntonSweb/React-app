import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchFilm} from "../../actions/actionSearch";
import {searchItem} from "../../reducers/search";

class SearchFilmIn extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }
    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.onFindFilms(this.state.value);
        console.log(this.props.items)
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
     render() {
         return (
             <div className="movie__search">
                 <div className="form-group">
                     <label htmlFor="search">Find film:</label>
                     <input  value={this.state.value} onChange={this.handleChange.bind(this)} id="search" className="form-control form-control-lg" type="text" name="search" placeholder="actors..."/>
                 </div>
                 <div className="form-group movie__btn-wrap">
                     <button onClick={this.handleSubmit.bind(this)} type="button" className="btn btn-lg btn-dark button movie__btn-search" name="searchValue" value="Search film">
                         Search
                     </button>
                 </div>
             </div>
         )
     }
}

function mapStateToProps(state){
    return {
        items: state.itemsSuccess.filter(item => item.title.includes(state.searchItem)),
        // items: state.itemsSuccess
        // hasError: state.itemsError,
        // activeItem: state.viewDetails
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onFindFilms: name => {
            dispatch(searchFilm(name));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilmIn);


// const VisibleTodoList = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(TodoList)