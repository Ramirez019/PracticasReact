import React,{Component} from "react";
import styled,{keyframes} from 'styled-components';
import './Variables.css';

class StylesStyledComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const Text={
            color:'yellow'
        }

        const animateText=keyframes`
            from{
                color:green;
            }
            to{
                color:red;
            }
        `
        const Title = styled.h1`
            color:green;
            font-size:29px;
            text-align:center;
            background-color:${Text.color};

            &:hover{
                color:blue;
            }

            @media(min-width:800px){
                color:transparent;
            }

            animation:${animateText} 2s linear infinite;
        `;

        const Header =styled.header`
            height:var(--altoHeader);
            background-color:var(--colorHeader);
            width:var(--anchoHeader);
        `
        return ( 
            <>
            <Header>
                <Title>
                    Estamos en StyledComponent
                </Title>
            </Header>
            </>
         );
    }
}
 
export default StylesStyledComponent;