import { Box, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { State } from 'redux/reducers'
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
interface Opt {
    id: number,
    question: string,
    point: number,
    isRight: boolean,
    rightAns: number
}
const Result = () => {
    const { multipleOption, singleSelect, inputUserAns } = useSelector((state: State) => state.quizs)

    console.log(singleSelect);
    
    return (
        <Box>
            <Box>
                <Typography variant='h4' sx={{ fontSize: '1.6rem', fontWeight: '600', color: 'rgb(31, 31, 31)' }}>Basic Programming Concepts</Typography>
                <Typography sx={{ fontSize: '0.8rem', fontWeight: '600', my: 2 }}>Total points 4</Typography>
            </Box>
            <Box>
                {
                    singleSelect?.map((opt: Opt) => 
                        <Box key={opt.id}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}>
                                <Box sx={{ display: 'flex', }}>
                                    <Typography sx={{ fontWeight: 'bold', mr: 1 }}>{opt.id}.</Typography>
                                    <Typography sx={{ color: 'rgb(93, 93, 93)' }}>{opt.question}</Typography>
                                </Box>
                                <Typography sx={{ background: 'rgb(229, 231, 232)', fontWeight: 'bold', fontSize: { xs: '0.7rem', md: '0.8rem' }, p: '4px', borderRadius: '5px' }}>{opt.isRight ? 1 : 0} /{opt.point} point</Typography>
                            </Box>
                            <Box sx={{ml:4}}>
                                {opt.isRight ? <Typography sx={{display:'flex',color:'green',background:'#95F9BD',p:2}}><CheckIcon/> Correct </Typography>:<Typography sx={{display:'flex',color:'red',background:'#f7cbcb',p:2}}><ClearIcon/> InCorrect </Typography>}
                            </Box>
                        </Box>
                    )
                }
            </Box>
            {
                multipleOption && <Box>
                     <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}>
                                <Box sx={{ display: 'flex', }}>
                                    <Typography sx={{ fontWeight: 'bold', mr: 1 }}>3.</Typography>
                                    <Typography sx={{ color: 'rgb(93, 93, 93)' }}>{multipleOption.question}</Typography>
                                </Box>
                                <Typography sx={{ background: 'rgb(229, 231, 232)', fontWeight: 'bold', fontSize: { xs: '0.7rem', md: '0.8rem' }, p: '4px', borderRadius: '5px' }}>{multipleOption.isRight ? 1 : 0} /1 point</Typography>
                            </Box>
                            <Box sx={{ml:4}}>
                                {multipleOption.isRight ? <Typography sx={{display:'flex',color:'green',background:'#95F9BD',p:2}}><CheckIcon/> Correct </Typography>:<Typography sx={{display:'flex',color:'red',background:'#f7cbcb',p:2}}><ClearIcon/> InCorrect </Typography>}
                            </Box>
                </Box>
            }
            {
              inputUserAns &&  <Box>
                   <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}>
                                <Box sx={{ display: 'flex', }}>
                                    <Typography sx={{ fontWeight: 'bold', mr: 1 }}>3.</Typography>
                                    <Typography sx={{ color: 'rgb(93, 93, 93)' }}>{inputUserAns.question}</Typography>
                                </Box>
                                <Typography sx={{ background: 'rgb(229, 231, 232)', fontWeight: 'bold', fontSize: { xs: '0.7rem', md: '0.8rem' }, p: '4px', borderRadius: '5px' }}>{inputUserAns.userAns == inputUserAns.rightAns? 1 : 0} /1 point</Typography>
                            </Box>
                    <Box sx={{ border: '1px solid #ddd', p: 5 }}>

                                  <Typography sx={{ pb: 5, pt: 1, pl: 4, fontSize: '0.9rem', color: 'rgb(93, 93, 93)' }}>1.  {inputUserAns.quizText}</Typography>
                </Box>
                <Box sx={{ml:4,mt:2}}>
                                {inputUserAns.userAns == inputUserAns.rightAns ? <Typography sx={{display:'flex',color:'green',background:'#95F9BD',p:2}}><CheckIcon/> Correct </Typography>:<Typography sx={{display:'flex',color:'red',background:'#f7cbcb',p:2}}><ClearIcon/> InCorrect </Typography>}
                            </Box>
                </Box>
            }
        </Box>
    )
}

export default Result