import { Box, Button, Typography } from '@mui/material'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router';
const QuizNav = () => {
    const router =useRouter()
    return (
        <Box sx={{ borderBottom: '1px solid #bdbdbd ', py: 1 }}>
            <Box sx={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: {
                    xs: 'column', md: 'row'
                }, my: 2, mx: { xs: 0, md: 5 }
            }}>
                <Box sx={{ display: 'flex' }}>
                    <Button sx={{ fontWeight: '600', mr: 2 }} onClick={()=>{router.push('/')}}><ArrowBackIcon /> Back</Button>
                    <Box> <Typography sx={{ fontSize: '0.9rem', color: 'rgb(31,31,31)', fontWeight: '600' }}>Basic Programming Concepts</Typography>
                        <Typography sx={{ fontSize: '0.8rem', color: 'rgb(99,99,99)' }}>Graded Quiz</Typography></Box>
                </Box>
                <Box>
                    <Typography sx={{ fontSize: '0.76rem', color: 'rgb(99,99,99)' }}>Due Jun 3, 1:59PM PDT</Typography>
                </Box>
            </Box>
        </Box>


    )
}

export default QuizNav