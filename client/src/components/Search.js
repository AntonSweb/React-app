import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchFilm} from "../actions/actionSearch";
import {viewDetails} from "../actions/actionFilm";

class SearchFilmIn extends Component {

    constructor(props) {
        super(props);
        this.state = {value: '', option: 'title'};
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleChangeSelect(event) {
        this.setState({option: event.target.value});
    }
    searchItems() {
        if(this.state.value !== ''){
            this.props.onFindFilms([this.state.value.toLowerCase(), this.state.option.toLowerCase()]);
            if (this.state.option == 'stars'){
                let obj;
                obj = this.props.items.filter(item => item.stars.toLowerCase().includes(this.state.value))[0];
                if (obj){
                    this.props.getDetailsFunction(obj);
                } else {
                    this.props.getDetailsFunction(null);
                }
            } else {
                let obj;
                obj = this.props.items.filter(item => item.title.toLowerCase().includes(this.state.value))[0];
                if (obj){
                    this.props.getDetailsFunction(obj);
                } else {
                    this.props.getDetailsFunction(null);
                }
            }
        }
    }
    viewAllItems() {
        this.props.onFindFilms(['', this.state.option]);
        this.setState({value: ''})
    }

     render() {
         return (
             <div className="col-12 movie__search">
                 <div className="form-group">
                     <label htmlFor="search" className="search-label">Find film by {this.state.option}:</label>
                     <div className="row">
                         <div className="col-12 col-lg-6">
                             <div className="search__wrap">
                                 <input
                                 value={this.state.value}
                                 onChange={this.handleChange.bind(this)}
                                 id="search" className="form-control search-margin" type="text" name="search" placeholder="search..."/>
                                 <select
                                     value={this.state.option}
                                     onChange={this.handleChangeSelect.bind(this)}
                                     id="form-format" className="form-control movie__search-select search-margin" type="text" name="form" placeholder="format...">
                                     <option value="title">title</option>
                                     <option value="stars">stars</option>
                                 </select>
                                 <button
                                     onClick={this.searchItems.bind(this)}
                                     type="button" className="btn btn-outline-dark button movie__btn search-margin" name="send" value="Search Film">
                                     Search
                                 </button>
                                 <button
                                     onClick={this.viewAllItems.bind(this)}
                                     type="button" className="btn btn-outline-dark button movie__btn search-margin" name="send" value="Search Film">
                                     View all
                                 </button>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         )
     }
}

function mapStateToProps(state){
    return {
        search: state.searchItem[0],
        param: state.searchItem[1],
        items: state.itemsSuccess
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onFindFilms: (props) => {
            dispatch(searchFilm(props));
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