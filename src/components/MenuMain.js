import React, {Component} from 'react';

class MenuMain extends Component{
    render() {

        return(
            <div className="menu-container">
                <div className="menu-header">Projekty</div>
                <div className="menu-options">
                    <div className="menu-options-button">
                        C++
                    </div>
                    <div className="menu-options-button">
                        Java
                    </div>
                    <div className="menu-options-button">
                        Embedded
                    </div>
                    <div className="menu-options-button">
                        React
                    </div>
                </div>
            </div>);
    }
}

export default MenuMain;
