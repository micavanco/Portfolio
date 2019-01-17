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

        this.fly=this.fly.bind(this);
    }

    onClickStartGame()
    {

        if(!this.state.gameStatus)
        {
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

        return(
            <div className="img-box-left" onClick={this.onClickStartGame.bind(this)}>
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
