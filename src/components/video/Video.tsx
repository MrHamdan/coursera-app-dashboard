import { Box, Typography } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { LectureResource } from "datatypes/coursetypes";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Arabic',
  'English',
  'French',
  'German',
  'Italian',
  'Portuguese (European)',
  'Russian',
  'Spanish',
  'Vietnamese',

];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


type Props = {
  singleLectureData: LectureResource;
}

const Video = ({ singleLectureData }: Props) => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8} xl={12} md={12}>
            <Item sx={{ marginTop: "0px", boxShadow: "0" }}>
              <Typography sx={{textAlign: "left", fontSize:'40px'}}>{singleLectureData.resourceTitle}</Typography>
              <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Item sx={{boxShadow: "0"}}>
            <Box sx={{display:'flex', alignItems:'center'}}>
              <Box>
                <DescriptionOutlinedIcon sx={{color:'#0056D2'}}/>
              </Box>
              <Box>
                <Typography sx={{marginLeft:'10px', color:'#0056D2'}}>
                  Notes
                </Typography>
              </Box>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx={{ boxShadow: "0" }}>
          <Box sx={{display:'flex', alignItems:'center'}}>
              <Box>
                <IosShareOutlinedIcon sx={{color:'#0056D2'}}/>
              </Box>
              <Box>
                <Typography sx={{marginLeft:'10px', color:'#0056D2'}}>
                  Discuss
                </Typography>
              </Box>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
              <ReactPlayer
                width="100%"
                height="500px"
                url={singleLectureData?.resourceVideoLink}
              />
            </Item>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{borderBottom :'1px solid lightgray'}}>
        <Grid item xs={2} >
        <Item sx={{boxShadow: "0"}}>
            <Box sx={{display:'flex'}}>
              <Box>
                <DescriptionOutlinedIcon sx={{color:'#0056D2'}}/>
              </Box>
              <Box>
                <Typography sx={{marginLeft:'10px', color:'#0056D2'}}>
                  Save Note
                </Typography>
              </Box>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={2}>
        <Item sx={{boxShadow: "0"}}>
            <Box sx={{display:'flex' }}>
              <Box>
              <Typography sx={{marginRight:'10px', color:'#0056D2'}}>
                  Download
                </Typography>
              </Box>
              <Box>
                <KeyboardArrowDownOutlinedIcon sx={{color:'#0056D2'}}/>
              </Box>
            </Box>
          </Item>
        </Grid>
        
      </Grid>
      <Grid item xs={12}>
          <Item sx={{boxShadow: "0"}}>
            <Typography sx={{textAlign:'left', marginLeft:'10px', fontSize:'20px', fontWeight:'bold'}}>
              Transcript
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sx={{marginTop:'-20px'}}>
          <Item sx={{boxShadow: "0"}}>
            <Box sx={{display:'flex', alignItems: 'center'}}>
              <Box>
              <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
        <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Select a language</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Select a language</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
              </Box>
              <Box>
                <Typography sx={{marginTop:'20px', marginLeft:'10px', color:'#0056D2'}}>Help Us Translate</Typography>
              </Box>
            </Box>
          </Item>
        </Grid>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{borderBottom:'1px solid lightgray'}}>
        <Grid item xs={2}>
          <Item sx={{boxShadow: "0"}}>
            <Typography>
              {singleLectureData.videoTimeFirst}
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={10}>
          <Item sx={{boxShadow: "0"}}>
            <Typography sx={{textAlign: "left"}}>
            {singleLectureData.videoDetailFirst}
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx={{boxShadow: "0"}}>
            <Typography>
            {singleLectureData.videoTimeSecond}
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={10}>
          <Item sx={{boxShadow: "0"}}>
            <Typography sx={{textAlign: "left"}}>
              {singleLectureData.videoDetailSecond}
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </Box>
          </Grid>
          <Box sx={{ flexGrow: 1 , marginTop:'20px'}}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item sx={{boxShadow: "0"}}>
            <Box sx={{display:'flex'}}>
              <Box>
                <ThumbUpOffAltIcon sx={{color:'#0056D2'}}/>
              </Box>
              <Box>
                <Typography sx={{color:'#0056D2', marginLeft: '20px'}}>
                  Like
                </Typography>
              </Box>
              <Box>
                <ThumbDownOffAltIcon sx={{color:'#0056D2', marginLeft: '20px'}}/>
              </Box>
              <Box>
                <Typography sx={{color:'#0056D2', marginLeft: '10px'}}>
                  Dislike
                </Typography>
              </Box>
              <Box>
                <OutlinedFlagIcon sx={{color:'#0056D2', marginLeft: '20px'}}/>
              </Box>
              <Box>
                <Typography sx={{color:'#0056D2', marginLeft: '10px'}}>
                  Report an issue
                </Typography>
              </Box>
              <Box>
                <IosShareOutlinedIcon sx={{color:'#0056D2', marginLeft: '20px'}}/>
              </Box>
              <Box>
                <Typography sx={{color:'#0056D2', marginLeft: '10px'}}>
                  Share
                </Typography>
              </Box>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
        </Grid>
      </Box>
    </div>
  );
};
export default Video;
