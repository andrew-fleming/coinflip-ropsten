import React from 'react'
import styled from 'styled-components'
import ethLogo from '../ethLogo.png'


const Circle = styled.div`
    position: relative;
    top: 2rem;
    border: 1px solid pink;
    border-radius: 1rem;
    width 23rem;
    height: 10.8rem;
    margin: auto;
`;

const Text = styled.div`
    color: white;
    font-size: 1rem;
    display: flex;
    justify-content: space-around;
    margin-top: .5rem;
    margin-left: 1rem;
    margin-right: 1.8rem;
`;

const CoinAlign = styled.div`
    display: flex;
    justify-content: space-around;
    `;

const HeadsButton = styled.button`
    background-color: pink;
    border-radius: 50%;
    height: 7rem;
    width: 7rem;
    margin-top: 1.5rem;
    box-shadow: 2px 2px black;
    cursor: pointer;
    `;

const TailsButton = styled(HeadsButton)`
    background-color: #5D7B93;
`;

const Img = styled.img`
    height: 4rem;
    width: 4rem;
`;

export default function HeadsTails(props) {

    const headsMessage = 'Heads';
    const orMessage = ' or ';
    const tailsMessage = 'Tails';

    return (
        <Circle>
            <Text>
                <div>
                    { headsMessage }
                </div>
                <div>
                    { orMessage }
                </div>
                <div>
                    { tailsMessage }
                </div>
            </Text>

        <CoinAlign>
            <HeadsButton>
                <Img src={ethLogo} alt='ethereum logo'/>
            </HeadsButton>

            <TailsButton>
                <Img src={ethLogo} alt='ethereum logo'/>
            </TailsButton>
        </CoinAlign>

        </Circle>
    )
}
