import React from 'react';

const Header = (props) => {
    const {search, onInputChange,searchClick} = props;
    return (
        <div className="jumbotron">
            <h1 className="display-2">
                <i className="material-icons brand-icon">fastfood</i>
      Food Recipies</h1>

            <div className="input-group w-50 mx-auto">
                <input type="text" className="form-control" placeholder="Search your Recipe..." value={search} onChange={onInputChange} />
                <div className="input-group-append">
                  <button className="btn btn-dark" onClick={searchClick}>Search Recipe</button>
                </div>
            </div>
        </div>

    )
}

export default Header;
