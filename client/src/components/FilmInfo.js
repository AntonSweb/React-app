import React, { Component } from 'react';

class FilmInfo extends Component {

    constructor(props) {
        super(props);
        this.btnClick = this.btnClick.bind(this)
    }

    btnClick(e) {
        // console.log(e.target.textContent);
        return this.props.setFilm(e.target.textContent);
    }

    showList() {
     return this.props.info.map((film) =>
        <li key={film.id}>{film.title}</li>
     )
    }

    render() {
        return (
            <div>
                <ul>
                    {this.showList()}
                    {/*<p>{this.props.info.title}</p>*/}
                    {/*<p>{this.props.info.release}</p>*/}
                    {/*<button onClick={this.btnClick}>Island</button>*/}
                </ul>
            </div>
        );
    }
}

export default FilmInfo;