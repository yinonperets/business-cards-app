import React from 'react'
import { Container } from '@mui/material'
import PageHeader from '../../components/PageHeader'
import { useParams } from 'react-router-dom'

const CardDetailsPage = () => {
    const { cardId } = useParams();
    console.table({idFromParams: cardId})

    return (
        <Container>
            <PageHeader title='Business Card Details' subtitle='Here you can find more details about the business'/>
        </Container>
    )
}

export default CardDetailsPage