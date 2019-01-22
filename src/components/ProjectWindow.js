import React, {Component} from 'react';
import { selectProject } from "../actions";
import {connect} from "react-redux";

let count = 0;
let prev_img = 0;

class ProjectWindow extends Component{

    constructor(params)
    {
        super(params);

        this.state = {
            window_type: "description",
            picked_img: 0,
            fullscreen_image: null
        };
        prev_img = 0;
    }

    render() {

        let content = null;
        count = 0;

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
        }else if(this.props.project)
        {
            content =
                <div className="project-container">
                    <div className="project-header">{this.props.project.header}</div>
                    <div className="image-window">
                        <img src={"../../img/projects/"+this.props.project.images[this.state.picked_img]}
                             onClick={this.onFullscreenImage.bind(this)}
                             id="main-image"/>
                    </div>
                    <div id="images-box">
                        {this.props.project.images.map(o=>{
                            if(count !=prev_img)
                            return <img src={"../../img/projects/"+o}
                                        onClick={this.onPickedImage.bind(this)}
                                        className="small-image" key={count} id={count++} ></img>
                            else
                                return <img src={"../../img/projects/"+o}
                                            style={{boxShadow:"0 10px 20px rgba(218, 154, 42, 0.2)"}}
                                            onClick={this.onPickedImage.bind(this)}
                                            className="small-image" key={count} id={count++} ></img>
                        })}
                    </div>
                    <div id="fullscreen-image-content">{this.state.fullscreen_image}
                        <div id="exit-cross-container" onClick={this.onFullscreenExit}>
                            <div id="exit-cross"></div>
                        </div>
                    </div>
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

    onFullscreenExit()
    {
        document.getElementById("fullscreen-image-content").style.display="none"
    }

    onFullscreenImage(e)
    {
        document.getElementById("fullscreen-image-content").style.display = "flex";
        this.setState({fullscreen_image: <img id="fullscreen-image" src={"../../img/projects/"+this.props.project.images[this.state.picked_img]}/>});
    }

    onPickedImage(e)
    {
        document.getElementById(prev_img).style.boxShadow = "0 10px 20px rgba(155, 155, 155, 0.4)";
        prev_img = e.target.id;
        e.target.style.boxShadow = "0 10px 20px rgba(218, 154, 42, 0.2)";
        this.setState({picked_img: e.target.id});
    }

}

const mapStateToProps = (state) => {
    return {project: state.project};
};

export default connect(mapStateToProps)(ProjectWindow);

