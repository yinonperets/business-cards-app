import React from 'react'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import CardHeader from '@mui/material/CardHeader'
import Box from '@mui/material/Box'
import cardType from '../../models/types/cardType'

const strongFont = {
    fontWeight: 600
}

const CardBody = ({card}) => {
    return (
        <CardContent>
            <CardHeader title={card.title} subheader={card.subtitle} sx={{ p: 0, mb: 1}} />
            <Divider />
            <Box mt={1}>
                <Typography variant='body2' color='text.secondery'>
                    <Typography variant='body2' component='strong' sx={strongFont}>Phone: </Typography>
                    {card.phone}
                </Typography>
                <Typography variant='body2' color='text.secondery'>
                    <Typography variant='body2' component='strong' sx={strongFont}>Address: </Typography>
                    {card.address.street + " " + card.address.houseNumber + ", " + card.address.city + ", " + card.address.country}
                </Typography>
                <Typography variant='body2' color='text.secondery'>
                    <Typography variant='body2' component='strong' sx={strongFont}>Card Number: </Typography>
                    {card.bizNumber}
                </Typography>
            </Box>
        </CardContent>
    )
}

CardBody.propTypes = {
    card: cardType.isRequired
}

export default CardBody