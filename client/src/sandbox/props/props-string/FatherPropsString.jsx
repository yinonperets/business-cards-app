import { Box, Typography } from '@mui/material'
import React from 'react'
import ChildPropsString from './ChildPropsString'

const FatherPropsString = () => {
    return (
        <Box m={2}>
            <Typography m={2}>Father Component</Typography>
            <Box sx={{ m: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', width: 300, height: 300, backgroundColor: 'secondary.dark' }} >
                <ChildPropsString string='Hello from father'/>
            </Box>
        </Box>
    )
}

export default FatherPropsString