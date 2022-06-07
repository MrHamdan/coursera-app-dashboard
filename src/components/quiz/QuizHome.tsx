import { Box, Checkbox, Container, FormControl, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { LectureResource } from 'datatypes/coursetypes';
import React from 'react'
import QuizNav from './QuizNav';
type Props = {
  singleLectureData: LectureResource;
};

const QuizHome = ({ singleLectureData }: Props) => {
  console.log(singleLectureData.quiz);

  return (
    <Box>
      {/* Quiz Navber  */}
      <QuizNav></QuizNav>
      <Container maxWidth='md' sx={{ py: 5 }} >
        <Box>
          <Box>
            <Typography variant='h4' sx={{ fontSize: '1.6rem', fontWeight: '600', color: 'rgb(31, 31, 31)' }}>Basic Programming Concepts</Typography>
            <Typography sx={{ fontSize: '0.8rem', fontWeight: '600', my: 2 }}>Total points 4</Typography>
          </Box>
          <Box>
            <Box>
              {
                singleLectureData.quiz?.map(quiz => (
                  <>
                    <Box key={quiz.id}>
                      <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}>
                          <Box sx={{ display: 'flex', }}>
                            <Typography sx={{ fontWeight: 'bold', mr: 1 }}>{quiz.id}.</Typography>
                            <Typography sx={{ color: 'rgb(93, 93, 93)' }}>{quiz.question}</Typography>
                          </Box>
                          <Typography sx={{ background: 'rgb(229, 231, 232)', fontWeight: 'bold', fontSize: { xs: '0.7rem', md: '0.8rem' }, p: '4px', borderRadius: '5px' }}>{quiz.quizPoint} point</Typography>
                        </Box>
                        {quiz.quizType == 'oneSelect' && <FormControl>
                          <RadioGroup aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group" sx={{ pl: 3 }}>
                            {
                              quiz.option.map(opt => (
                                <FormControlLabel sx={{ fontSize: '1rem', color: 'rgb(93, 93, 93)' }} key={opt.id} value={opt.id} control={<Radio sx={{
                                  p: 0, m: 1, '&.Mui-checked': {
                                    color: 'rgb(42, 115, 204)', border: '2px solid rgb(42, 115, 204)', borderRadius: '5px'
                                  },
                                }} />} label={opt.text} />
                              ))
                            }
                          </RadioGroup>
                        </FormControl>}
                        {
                          quiz.quizType == 'multiplySelect' && <FormControl sx={{ pl: 3 }}>
                            {
                              quiz.option.map(opt => (
                                <FormControlLabel sx={{ fontSize: '1rem', color: 'rgb(93, 93, 93)' }}
                                  key={opt.id}
                                  control={<Checkbox />}

                                  label={opt.text}
                                />
                              ))
                            }
                          </FormControl>
                        }
                        {
                          quiz.quizType == 'input' && <Box sx={{ ml:3 }}>
                            {
                              quiz.option.map(opt => (<Box key={opt.id}>



                                <Box  sx={{ border: '1px solid #ddd',p:5 }}>
                                  <Typography sx={{pb:5,pt:1,pl:4,fontSize: '0.9rem', color: 'rgb(93, 93, 93)'}}>1.  {opt.text}</Typography>
                                
                                </Box>
                                <TextField placeholder='Enter Your Answer Here'  sx={{width:'100%',mt:5}}/>
                              </Box>
                              ))
                            }
                          </Box>
                        }
                      </Box>
                    </Box>

                  </>
                ))
              }
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default QuizHome