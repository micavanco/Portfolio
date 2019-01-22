import React, {Component} from 'react';
import { selectProject } from "../actions";
import {connect} from "react-redux";

class ProjectWindow extends Component{

    constructor(params)
    {
        super(params);

        this.state = {
            window_type: "description"
        };
    }

    render() {

        let content = null;

        if(this.state.window_type === "description" && this.props.project)
        {
            content =
            <div className="project-container">
                <div className="project-header">{this.props.project.header}</div>
                <div className="project-description">{this.props.project.description}</div>
                <div className="project-section-header">Działanie</div>
                <div className="project-section-functioning">{this.props.project.functioning}</div>
                <div className="project-section-header">Dodatkowe opcje</div>
                <ul className="project-options-list">
                    {this.props.project.options_list.map(o=>{
                        return <li key={o[0]+o[1]}>{o}</li>
                    })}
                </ul>
                <div className="links-box">
                    <a className="menu-btn btn-links" style={{background: "#DA9A2A", float: "left"}}
                       target="_blank" rel="noopener noreferrer"
                       href={this.props.project.github}>GitHub</a>
                    <a className="menu-btn btn-links" style={{background: "#B0B0B0", float: "right"}}
                       href={this.props.project.download}>Pobierz</a>
                    <div className="project-navigation" onClick={()=>this.setState({window_type: "gallery"})}>
                        <p>GALERIA</p>
                        <div className="project-arrow">
                            <div className="project-arrow-up"></div>
                            <div className="project-arrow-up" style={{marginLeft: 16}}></div>
                            <div className="project-arrow-down"></div>
                            <div className="project-arrow-down" style={{marginLeft: 16}}></div>
                        </div>
                    </div>
                </div>
            </div>
        }else
        {
            content =
                <div className="project-container">
                    <div className="project-header">Analizator ruchu obiektów</div>
                    <div className="image-window"></div>
                    <div className="images-box"></div>
                        <div className="project-navigation align-left-arrow" onClick={()=>this.setState({window_type: "description"})}>
                            <p>OPIS</p>
                            <div className="project-arrow">
                                <div className="project-arrow-up rotated-arrow-top"></div>
                                <div className="project-arrow-up rotated-arrow-top" style={{marginLeft: -96}}></div>
                                <div className="project-arrow-down rotated-arrow-bottom"></div>
                                <div className="project-arrow-down rotated-arrow-bottom" style={{marginLeft: -96}}></div>
                            </div>
                        </div>
                </div>
        }

        return(content);
    }
}

const mapStateToProps = (state) => {
    return {project: state.project};
};

export default connect(mapStateToProps)(ProjectWindow);

