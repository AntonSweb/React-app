import React, { Component } from 'react';

class FilmInfo extends Component {

    btnClick(e) {
        // console.log(e.target.textContent);
        // return this.props.setFilm(e.target.textContent);
    }

    showList() {
     return this.props.info.map((item) =>
        <ul key={item.id}>
            <li>{item.id}</li>
            <li>{item.title}</li>
            <li>{item.release}</li>
            <li>{item.form}</li>
            <li>{item.stars}</li>
        </ul>
     )
    }

    render() {
        return (
            <div>
                <ul>
                    {this.showList()}
                    {/*<p>{this.props.info.title}</p>*/}
                    {/*<p>{this.props.info.release}</p>*/}
                    {/*<button onClick={this.props.btnClick.bind(this)}>Island</button>*/}
                    <button onClick={this.props.getFilms}>Island</button>
                </ul>
            </div>
        );
    }
}

export default FilmInfo;