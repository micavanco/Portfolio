import React, {Component} from 'react';
import styled from 'styled-components';

let bird1X = 0;

class HuntingGame extends Component{

    constructor(params)
    {
        super(params);

        this.state = {
            interval1: null,
            gameStatus: false
        };

        document.addEventListener("keydown", (e)=>{
            if(e.keyCode == 81 && this.state.gameStatus)
            {
                clearInterval(this.state.interval1);
                this.state.gameStatus = false;
                console.log("Game Over");
                document.getElementById("menu-game").style.display = "flex";
            }
        });

        this.fly=this.fly.bind(this);
    }

    onClickStartGame()
    {

        if(!this.state.gameStatus)
        {
            document.getElementById("menu-game").style.display = "none";
            this.state.gameStatus = true;
            bird1X+=450;
            document.getElementById("bird1").style.marginLeft = bird1X+"px";
            this.state.interval1 = setInterval(this.fly, 3100);
        }
    }

    render() {

        const Game = styled.div`
          overflow: hidden;
        `;

        const Bird = styled.img`
            position: relative;
            margin: 120px 0 0 -50px;
        `;

        const Menu = styled.div`
            width: inherit;
            height: inherit;
            position: absolute;
            background: rgba(254, 254, 254, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
            font-weight: 600;
        `;

        return(
            <div className="img-box-left" onClick={this.onClickStartGame.bind(this)}>
                <Menu id="menu-game">Kliknij aby rozpocząć grę</Menu>
                <Game src="../../img/birds-land.png" id="birds-land" className="game">
                    <Bird src="../../img/bird1.png" id="bird1"/>
                </Game>
            </div>
        );
    }

    fly(){
        if(bird1X === -50)
        {
            document.getElementById("bird1").style.display = "inline";
            document.getElementById("bird1").style.marginTop = (Math.floor(Math.random() * 400)+110).toString()+"px";
            bird1X+=1;
        }
        else if(bird1X < 417 && bird1X > -50)
            bird1X+=500;
        else
        {
            document.getElementById("bird1").style.display = "none";
            bird1X=-50;
        }
        document.getElementById("bird1").style.marginLeft = bird1X+"px";
        console.log(bird1X);
    }

}

export default HuntingGame;
