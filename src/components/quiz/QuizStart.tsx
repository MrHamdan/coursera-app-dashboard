import { Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
const QuizStart = ({setIsShow}:any) => {
    return (
        <Box sx={{ textAlign: 'left' }}>
            <Typography variant='h4'>Basic Programming Concepts</Typography>
            <Typography >Quiz</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 10 }}>
                <Box>
                    <Typography>Submit your assignment</Typography>
                    <Typography>Due June 3, 11:59 PM PDTJun 3, 11:59 PM PDT
                        Attempts 3 every 8 hours</Typography>
                </Box>
                <Button variant='contained' onClick={()=>{setIsShow(true)}}>Start Assignment</Button>
            </Box>
            <Divider />
            <Box >
                <Button sx={{ fontSize: '13px', fontWeight: '600', mr: 2 }}><ThumbUpIcon sx={{ fontSize: '16px', mr: 1 }} />   Like</Button>
                <Button sx={{ fontSize: '13px', fontWeight: '600', mr: 2 }}><FlagOutlinedIcon sx={{ fontSize: '16px', mr: 1 }} /> Report an issue</Button>
                <Button sx={{ fontSize: '13px', fontWeight: '600', mr: 2 }}><ThumbDownOffAltIcon sx={{ fontSize: '16px', mr: 1 }} />Dislike</Button>
            </Box>
        </Box>
    )
}

export default QuizStart