import React, {Component} from 'react';

class MenuMain extends Component{
    render() {

        return(
            <div className="menu-container">
                <div className="menu-header">Projekty</div>
                <div className="menu-options">
                    <div className="menu-options-button" onClick={this.props.onProjectChange.bind(this)}>
                        C++
                    </div>
                    <div className="menu-options-button" onClick={this.props.onProjectChange.bind(this)}>
                        Java
                    </div>
                    <div className="menu-options-button" onClick={this.props.onProjectChange.bind(this)}>
                        Embedded
                    </div>
                    <div className="menu-options-button" onClick={this.props.onProjectChange.bind(this)}>
                        React
                    </div>
                </div>
            </div>);
    }
}

export default MenuMain;
