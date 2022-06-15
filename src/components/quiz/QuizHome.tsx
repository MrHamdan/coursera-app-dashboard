import { Box, Button, Checkbox, Container, Divider, FormControl, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { LectureResource, Option, Quiz } from 'datatypes/coursetypes';
import React, { useEffect, useState } from 'react'
import QuizNav from './QuizNav';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import { useDispatch, useSelector } from 'react-redux';
type Props = {
  singleLectureData: LectureResource;
};
interface Opt {
  id: number,
  question: string,
  quizPoint: number,
  isRight: boolean,
  answer:string
}
import { State } from '../../redux/reducers'
import Result from './Result';
const QuizHome = ({ singleLectureData }: Props) => {
  // console.log(singleLectureData.quiz);
  const [option, setOption] = useState<any>([])
  const [inputValue, setInputValue] = useState<any>({})
  const [isChecked,setIsChecked]=useState<boolean>(true)
  const [isOpen,setIsOpen]=useState<boolean>(true)
  const { singleSelect } = useSelector((state: State) => state.quizs)
  const dispatch = useDispatch()

  


  const handleOnChangeRadio = (opt: Option, quiz: Quiz, index: number) => {
    const index1 = singleSelect.findIndex((element: any) => element.id === quiz.id);
    console.log(index1);
    const rightAnswer = {
      id: quiz.id,
      question: quiz.question,
      point: quiz.quizPoint,
      isRight: opt.isCorrect,
      rightAns: quiz.answer
    }
    if (index1 == -1) {
      dispatch({
        type: "SINGLE_SELECT",
        payload: [...singleSelect, rightAnswer]
      })
    }
  }
  const handleOnChangeCheck = (event: any, opt: Option, quiz: Quiz) => {
    console.log(event.target.checked);
    if (event.target.checked) {
      // arr.push(opt)
      const ans = {
        id: opt.id,
        question: quiz.question,
        point: quiz.quizPoint,
        isRight: opt.isCorrect,
        rightAns: quiz.answer
      }
      let arr = [...option, ans]
      setOption(arr)
    }
    if (!event.target.checked) {
      const unChecked = option.find((element: Option) => element.id == event.target.value)

      option.splice(option.indexOf(unChecked), 1)

    }
  }

  useEffect(()=>{
    option.forEach((opt:Opt) => {
      if (opt.isRight == true) {
        const rightAns = {
          id: opt.id,
          question: opt.question,
          point: opt.quizPoint,
          isRight: true,
          rightAns: opt.answer
        }
        dispatch({
          type:"MULTIPLE_SELECT",
          payload:rightAns
        })
      }
      else{
        const rightAns = {
          id: opt.id,
          question: opt.question,
          point: opt.quizPoint,
          isRight: false,
          rightAns: opt.answer
        }
        dispatch({
          type:"MULTIPLE_SELECT",
          payload:rightAns
        })
      }
  
    })
  },[option,dispatch])

  const handleInputChange = (event: any, quiz: Quiz, opt: Option) => {
    console.log(event.target.value);
    const userAnswer = {
      question: quiz.question,
      point: quiz.quizPoint,
      quizText: opt.text,
      rightAns: quiz.answer,
      userAns: event.target.value
    }
    setInputValue(userAnswer)
    // const arr=[...inputQuiz,userAnswer]
    // setInputQuiz(arr)

  }

  const handleChange =(e:any)=>{
  e.target.checked ? setIsChecked(false):setIsChecked(true)  
  }
  const handleOnClick =()=>{
    dispatch({
      type:"INPUT_ANS",
      payload:inputValue
    })
    setIsOpen(false)
  }
  return (
    <Box>
      {/* Quiz Navber  */}
      <QuizNav></QuizNav>
      <Container maxWidth='md' sx={{ py: 5 }} >
        {isOpen ?<Box>
          <Box>
            <Typography variant='h4' sx={{ fontSize: '1.6rem', fontWeight: '600', color: 'rgb(31, 31, 31)' }}>Basic Programming Concepts</Typography>
            <Typography sx={{ fontSize: '0.8rem', fontWeight: '600', my: 2 }}>Total points 4</Typography>
          </Box>
          <Box>
            <Box>
              {
                singleLectureData.quiz?.map((quiz, index) => (
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
                        {quiz.quizType == 'oneSelect' && <FormControl sx={{ mb: 6 }}>
                          <RadioGroup aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group" sx={{ pl: 3 }}>
                            {
                              quiz.option.map((opt) => (
                                <FormControlLabel sx={{ fontSize: '1rem', color: 'rgb(93, 93, 93)' }} key={opt.id} value={opt.id} control={<Radio sx={{
                                  p: 0, m: 1, '&.Mui-checked': { color: 'rgb(42, 115, 204)', border: '2px solid rgb(42, 115, 204)', borderRadius: '5px' },
                                }} onChange={() => handleOnChangeRadio(opt, quiz, index)} />} label={opt.text} />
                              ))
                            }
                          </RadioGroup>
                        </FormControl>}
                        {
                          quiz.quizType == 'multiplySelect' && <FormControl sx={{ pl: 3, mb: 6 }}>
                            {
                              quiz.option.map(opt => (
                                <FormControlLabel sx={{ fontSize: '1rem', color: 'rgb(93, 93, 93)' }}
                                  key={opt.id}
                                  control={<Checkbox onChange={() => handleOnChangeCheck(event, opt, quiz)} />}
                                  value={opt.id}
                                  label={opt.text}
                                />
                              ))
                            }
                          </FormControl>
                        }
                        {
                          quiz.quizType == 'input' && <Box sx={{ ml: 3, mb: 6 }}>
                            {
                              quiz.option.map(opt => (<Box key={opt.id}>



                                <Box sx={{ border: '1px solid #ddd', p: 5 }}>
                                  <Typography sx={{ pb: 5, pt: 1, pl: 4, fontSize: '0.9rem', color: 'rgb(93, 93, 93)' }}>1.  {opt.text}</Typography>

                                </Box>
                                <TextField placeholder='Enter Your Answer Here' sx={{ width: '100%', mt: 5 }} onChange={() => handleInputChange(event, quiz, opt)} />
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
          <Box sx={{ mt: 6, mb: '40px' }}>
            <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }}>Coursera Honor Code <span style={{
              marginLeft: '5px',
              color: 'blue',
              textDecoration: 'underline', fontWeight: '400'
            }}>Learn more </span></Typography>
            <Box>

              <FormControlLabel
                sx={{ color: 'rgb(55, 58, 60)' }}
                label="I understand that submitting work that isnt my own may result in permanent failure of this course or deactivation of my Coursera account"
                control={<Checkbox onChange={handleChange}/>}
              />
              <TextField sx={{ ml: 4, mt: 4, width: "380px", }} placeholder='Enter Your legal name' />
              <Typography sx={{ fontSize: '0.8rem', color: 'rgb(55, 58, 60)', ml: 4, mt: 1 }}>Use the name government issued ID</Typography>
            </Box>

            <Box sx={{ mt: 6 }}>
              <Button variant='contained' disabled={isChecked} sx={{ fontWeight: 'bold', py: 2, px: 4, mr: 3 }} onClick={handleOnClick}>Submit</Button> <Button variant='outlined' sx={{ fontWeight: 'bold', py: 2, px: 3 }}>Save Draft</Button>
            </Box>
          </Box>
          <Divider />
          <Box >
            <Button sx={{ fontSize: '13px', fontWeight: '600', mr: 2 }}><ThumbUpIcon sx={{ fontSize: '16px', mr: 1 }} />   Like</Button>
            <Button sx={{ fontSize: '13px', fontWeight: '600', mr: 2 }}><FlagOutlinedIcon sx={{ fontSize: '16px', mr: 1 }} /> Report an issue</Button>
            <Button sx={{ fontSize: '13px', fontWeight: '600', mr: 2 }}><ThumbDownOffAltIcon sx={{ fontSize: '16px', mr: 1 }} />Dislike</Button>
          </Box>
        </Box>:<Result/>}
      </Container>
    </Box>
  )
}

export default QuizHome