import React, {Component} from 'react';
import LangBar from './LangBar';
import HuntingGame from './HuntingGame';

class MainPage extends Component{

    render() {
        return(
            <div className="content">
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
                <div className="content-page">
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
                    <div className="info-box-left" id="info-box-left" >
                        <h1 className="info-box-left-head">O mnie</h1>
                        <h3 className="info-box-left-text">Absolwent kierunku Elektrotechnika, wydziału elektrycznego Politechniki Wrocławskiej.
                            Moje zainteresowanie programowaniem rozpoczęło się w trakcie studiów, podczas odbywania kursu
                            podstaw programowania w C. Zwykła ciekawość poprowadziła mnie przez obszar kolejnego języka programowania,
                            C++. Chęć zgłębienia każdego aspektu tego języka przerodziła się w pasję,
                            która zaowocowała stworzeniem kilku swoich własnych projektów. Jednakże w dalszym ciągu niezaspokojone
                            zaciekawienie programowaniem, poskutkowało nieodwrotnym skokiem w strefę dalszych języków
                            wykorzystywanych w innych dziedzinach technologicznych. W związku z tym następnym etapem
                            było stworzenie kilku aplikacji desktopowych w języku programowania Java. Równocześnie poszerzałem
                            swoją wiedzę na temat elektroniki i w następstwie tego zrealizowałem parę projektów opartych o
                            mikrokontrolery AVR w języku C oraz assemblerze. Ostatecznie w swojej wędrówce dotarłem do technologii
                            wykorzystywanych w przeglądarkach internetowych, tworząc parę aplikacji internetowych opartych na
                            frameworku JavaScript, React. Ze względu, iż miałem uprzednio styczność z Javą, aktualnie rozwijam
                            swoją wiedzę na temat programowania serwisów obsługujących strony internetowe, znajdujących się
                            po stronie serwera. Swoje aplikacje staram się pisać sumiennie i rzetelnie,
                            dbając jednocześnie o czystość kodu. Oprócz pasji programowania czynnie uprawiam sporty
                            ekstremalne takie jak: deskorolka, windsurfing i snowboard. Dodatkowo interesuję się
                            komponowaniem muzyki elektronicznej w popularnych programach muzycznych typu DAW oraz uczę się
                            gry na pianinie.</h3>
                    </div>
                    <div className="img-box-right">
                        <img src="../../img/star-wars.png" id="star-wars"/>
                        <img src="../../img/star-wars-head.png" id="star-wars-head"/>
                    </div>
                    <div id="bullet"></div>
                    <div className="info-box-right">
                        <h1 className="info-box-right-head">Doświadczenie</h1>
                        <div className="lang-row" id="cplus" >
                            <h3 className="lang-head">Średnio zaawansowany</h3>
                            <LangBar width={120} lang={"cplus"}/>
                            <h3 className="lang-info">C ++</h3>
                        </div>
                        <div className="lang-row" id="java">
                            <h3 className="lang-head">Średni</h3>
                            <LangBar width={90} lang={"java"}/>
                            <h3 className="lang-info">Java</h3>
                        </div>
                        <div className="lang-row" id="spring">
                            <h3 className="lang-head">Początkujący</h3>
                            <LangBar width={30} lang={"spring"}/>
                            <h3 className="lang-info">Spring</h3>
                        </div>
                        <div className="lang-row" id="javascript">
                            <h3 className="lang-head">Średni</h3>
                            <LangBar width={100} lang={"javascript"}/>
                            <h3 className="lang-info">JavaScript</h3>
                        </div>
                        <div className="lang-row" id="css">
                            <h3 className="lang-head">Średni</h3>
                            <LangBar width={81} lang={"css"}/>
                            <h3 className="lang-info">CSS</h3>
                        </div>
                    </div>
                    <HuntingGame/>
                    <div className="info-box-left">
                            <h1 className="info-box-left-head">Doświadczenie</h1>
                            <div className="lang-row" id="assembler" >
                                <h3 className="lang-head">Początkujący</h3>
                                <LangBar width={20} lang={"assembler"}/>
                                <h3 className="lang-info">Assembler</h3>
                            </div>
                            <div className="lang-row" id="avr">
                                <h3 className="lang-head">Średni</h3>
                                <LangBar width={67} lang={"avr"}/>
                                <h3 className="lang-info">AVR w C</h3>
                            </div>
                            <div className="lang-row" id="react">
                                <h3 className="lang-head">Średni</h3>
                                <LangBar width={110} lang={"react"}/>
                                <h3 className="lang-info">React</h3>
                            </div>
                            <div className="lang-row" id="qt">
                                <h3 className="lang-head">Średni</h3>
                                <LangBar width={78} lang={"qt"}/>
                                <h3 className="lang-info">Qt</h3>
                            </div>
                            <div className="lang-row" id="openCV">
                                <h3 className="lang-head">Średni</h3>
                                <LangBar width={61} lang={"openCV"}/>
                                <h3 className="lang-info">OpenCV</h3>
                            </div>
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

    componentDidMount() {
        document.getElementById("info-box-left").addEventListener("mousemove", (e)=>{
            let rect = document.getElementById("info-box-left").getBoundingClientRect();
            let x = 1200-(e.screenX-rect.left);
            let y = 342-(e.screenY-rect.top);
            let deg = Math.atan(y/x)*57.29577;
            console.log("x = "+x.toString()+" y= "+y.toString()+" deg = "+deg.toString());
            document.getElementById("star-wars-head").style.transform = "rotateZ("+deg.toString()+"deg)";
        });

        document.getElementById("info-box-left").addEventListener("click", (e)=>{
            let rect = document.getElementById("info-box-left").getBoundingClientRect();
            let x = 1060-(e.screenX-rect.left);
            let y = 342-(e.screenY-rect.top);
            let deg = Math.atan(y/x)*57.29577;
            let bullet = document.getElementById("bullet");
            bullet.style.opacity = "1";
            bullet.style.transform = "rotateZ("+deg.toString()+"deg)";
            bullet.style.marginLeft = (1175-x).toString()+"px";
            bullet.style.marginTop = (410-y).toString()+"px";
            setTimeout(() =>{
                bullet.style.display = "none";
                bullet.style.marginLeft = "1175px";
                bullet.style.marginTop = "410px";
            }, 1000);
            setTimeout(()=>{
                bullet.style.display = "block";
                bullet.style.opacity = "0";
                },1100);
        });
    }

}

export default MainPage;
