import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sortFilms} from "../../actions/actionSort";

class SortFilms extends Component {

    filterItems() {
        this.props.items.sort((a, b) => {
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1;
            return 0;
        });
        this.props.onSortFilms(this.props.items);
    }

    render() {
        return (
            <ol className="movie_sort"><span onClick={this.filterItems.bind(this)} className="list-group-item movie__sortByTitle">Sort by alphabet</span></ol>
        )
    }
}

function mapStateToProps(state){
    return {
        items: state.itemsSuccess,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onSortFilms: sortItems => {
            dispatch(sortFilms(sortItems));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortFilms);
