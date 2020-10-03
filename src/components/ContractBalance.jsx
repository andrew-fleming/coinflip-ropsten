import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    color: black;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    `;

export default function ContractBalance(props) {

    const balanceMessage = '0.0 ETH Available to Win';

    return (
        <Div>
            {balanceMessage}
        </Div>
    )
}

