import React, {Component} from 'react';

class App extends Component{
    render() {
        return(
            <div className="project-container">
                <div className="project-header">Analizator ruchu obiektów</div>
                <div className="project-description">Aplikacja służąca do nauki języka norweskiego.</div>
                <div className="project-section-header">Działanie</div>
                <div className="project-section-functioning">Po zalogowaniu się zostaje odblokowana możliwość wczytania
                    bazy danych (w tej wersji dostępny zasób: czasowniki i przysłówki). Zadaniem użytkownika jest
                    przetłumaczenie danego wyrażenia po norwesku na angielski. Po zalogowaniu się zostaje odblokowana
                    możliwość wczytania bazy danych (w tej wersji dostępny zasób: czasowniki i przysłówki).
                    Zadaniem użytkownika jest przetłumaczenie danego wyrażenia po norwesku na angielski. </div>
                <div className="project-section-header">Dodatkowe opcje</div>
                <ul className="project-options-list">
                    <li>Zapis wyniku do pliku tekstowego: poprawnych i błędnych odpowiedzi.</li>
                    <li>Eksport i import preferencji użytkownika (wymiary okna oraz rozmiar czcionki).</li>
                    <li>Zmiana rozmiaru czcionki.</li>
                    <li>Panel z przyciskiem odtwarzającym syntezator mowy danego wyrażenia norweskiego wraz
                        z możliwością dostosowania natężenia dźwięku i
                        balansu stereo. Użytkownik w każdej chwili ma możliwość schowania panelu za
                        pomocą przycisków opcji w pasku menu.</li>
                    <li>Opcja „Tylko do odczytu” dezaktywująca zapis do pliku tekstowego.</li>
                </ul>
                <div className="links-box">
                    <a className="menu-btn btn-links" style={{background: "#DA9A2A", float: "left"}}
                       target="_blank" rel="noopener noreferrer"
                       href="https://github.com/micavanco">GitHub</a>
                    <a className="menu-btn btn-links" style={{background: "#B0B0B0", float: "right"}} href="">Pobierz</a>
                    <div className="project-navigation"><p>GALERIA</p>
                        <div className="project-arrow">
                            <div className="project-arrow-up"></div>
                            <div className="project-arrow-up" style={{marginLeft: 16}}></div>
                            <div className="project-arrow-down"></div>
                            <div className="project-arrow-down" style={{marginLeft: 16}}></div>
                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default App;
