import React, {Component} from 'react';

class MainPage extends Component{

    render() {
        return(
            <div>
                {/* Header section */}
                <header className="header">
                    <div className="logo-container">
                        <a href="#" className="logo">Olech</a>
                    </div>
                    <img src="../../img/britainFlag.png" id="menu-flag-b"/>
                    <img src="../../img/polishFlag.png" id="menu-flag-p"/>
                    <div className="menu-btn" id="menu-btn-projects">>
                        <a href="#">PROJEKTY</a>
                    </div>
                    <div className="menu-btn" id="menu-btn-about">
                        <a href="#">O MNIE</a>
                    </div>
                </header>

                {/* Whole website content */}
                <div className="content">
                    <div id="front-content">
                        <div id="front-text">
                            <h1>Szanowni Państwo</h1>
                            <h2>Zapraszam do zapoznania się z portfolio</h2>
                            <h3>Na niniejszej stronie znajdą Państwo wszelkie
                                informacje dotyczące mojego doświadczenia zawodowego oraz mojej osoby</h3>
                            <img src="../../img/signature.png" id="signature"/>
                        </div>
                        <img src="../../img/face.png" id="face"/>
                    </div>
                    <div className="info-box-left">

                    </div>
                    <div className="img-box-right">

                    </div>
                    <div className="info-box-right">

                    </div>
                    <div className="img-box-left">

                    </div>
                    <div className="info-box-left">

                    </div>
                    <div className="img-box-right">

                    </div>
                </div>

                {/* Footer section */}
                <div className="footer">
                    <div></div>
                </div>
            </div>
        );
    }

}

export default MainPage;
