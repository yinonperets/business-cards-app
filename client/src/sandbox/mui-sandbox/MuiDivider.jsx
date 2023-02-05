import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

const MuiDivider = () => {
    return (
        <>
        <Box display='flex'>
            <Typography p={1} variant='h4' component='p' color='primary' sx={{fontWeight: 600}}>WOWWWW</Typography>
            <Divider orientation='vertical' flexItem/>
            <Typography p={1} variant='h4' component='p' color='primary' sx={{fontWeight: 600}}>WOWWWW</Typography>
            <Divider orientation='vertical' flexItem/>
            <Typography p={1} variant='h4' component='p' color='primary' sx={{fontWeight: 600}}>WOWWWW</Typography>
        </Box>
        <Divider>
            CENTER
        </Divider>
        </>
    )
}

export default MuiDivider