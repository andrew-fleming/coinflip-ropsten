import React from 'react'
import styled from 'styled-components'

const Circle = styled.div`
    position: relative;
    top: 1rem;
    border: 1px solid pink;
    border-radius: 1rem;
    width 23rem;
    height: 5.4rem;
    margin: auto;
`;

const TopAlign = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: .5rem;
`;

const BottomAlign = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-left: 1rem;
    margin-right: 2rem;
    margin-top: .7rem;

`;

const Wager = styled.div`
    font-size: 1rem;
    color: white;
`;

const Input = styled.input`
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: hidden;
    background-color: #5D432C;
    width: 10rem;
    font-size: 2rem;
`;

const Balance = styled.div`
    font-size: 1rem;
    color: white;
`;

const Ether = styled.div`
    display: flex;
    align-self:
    margin-right: 1rem;
    font-size: 2rem;
    color: white;
`;


export default function BetForm(props) {

    const wager = 'Wager';
    const balance = 'Balance: 5.123';
    const Eth = 'ETH';

    return (
        <Circle>
            <TopAlign>
            <Wager>
                { wager }
            </Wager>

            <Balance>
                { balance }
            </Balance>

            </TopAlign>
            
            <BottomAlign>
            <Input placeholder='0.0'/>

            <Ether>
                { Eth }
            </Ether>

            </BottomAlign>
            
        </Circle>
    )
}
