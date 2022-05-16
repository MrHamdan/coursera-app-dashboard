
import { Box, FormControl, FormControlLabel, RadioGroup,Radio } from "@mui/material"
import Quiz from "models/quizModels"
import { type } from "os"



type QuestionProps={
  index:number,
  quizs:Quiz[],
  handleOnChange:(option:{})=>void
}





const Question = (props:QuestionProps) => {
  const {index,quizs,handleOnChange}=props
  return (
    <Box sx={{width:{xs:"100%",sm:"100%",md:"700px"}}}>
        <FormControl sx={{m:{xs:0,sm:0,md:3},width:"100%",}} variant="standard">
            <RadioGroup >
                {
                  quizs[index]?.options.map(element=>(
                    <FormControlLabel
                        sx={{
                          background:" #2A2A2A",
                          color:"#fff",
                          mt: 4,
                          display: 'flex',
                          justifyContent: 'flex-start',
                          width: '100%',
                          alignItems: 'center',
                          borderRadius: '5px',
                          border: '1px solid #d4d4d4',
                        }}
                        onChange={() => handleOnChange(element)} key={element.id} value={element.id} control={<Radio 
                                           
                          sx={{
                            
                            color:"#fff",
                            '&.Mui-checked': {
                              color: "#D19F28",
                            },
                          }}
                          />} label={element.option} 
                    />
                  ))
                }
            </RadioGroup>
        </FormControl>
    </Box>
  )
}

export default Question