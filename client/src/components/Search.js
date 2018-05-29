import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchFilm} from "../actions/actionSearch";
import {viewDetails} from "../actions/actionFilm";

class SearchFilmIn extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    handleChange(event) {
        this.setState({value: event.target.value.toLowerCase()});
        this.props.onFindFilms(this.state.value);
        if(this.props.items[0]){
            this.props.getDetailsFunction(this.props.items[0]);
        } else {
            this.props.getDetailsFunction(null);
        }
    }

     render() {
         return (
             <div className="col-12 movie__search">
                 <div className="form-group">
                     <label htmlFor="search">Find film by actors:</label>
                     <input  value={this.state.value}
                             onChange={this.handleChange.bind(this)}
                             id="search" className="form-control form-control-lg" type="text" name="search" placeholder="actors..."
                     />
                 </div>
             </div>
         )
     }
}

function mapStateToProps(state){
    return {
        items: state.itemsSuccess.filter(item => item.stars.toLowerCase().includes(state.searchItem))
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onFindFilms: name => {
            dispatch(searchFilm(name));
        },
        getDetailsFunction: film => {
            dispatch(viewDetails(film))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilmIn);

// const VisibleTodoList = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(TodoList)