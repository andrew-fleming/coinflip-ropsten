import React from 'react'
import styled from 'styled-components'
import BetForm from './BetForm'
import HeadsTails from './HeadsTails'
import UserButton from './UserButton'

const Card = styled.div`
    position: relative;
    top: 1.5rem;
    height: 30rem;
    width: 25rem;
    background: #5D432C;
    border: 3px solid #35281E;
    border-radius: 1.5rem;
    margin auto;
`;

export default function MainCard(props) {
    return (
        <Card>
            <BetForm/>
            <HeadsTails/>
            <UserButton/>
        </Card>
    )
}
