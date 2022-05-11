import { Box, Container } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Image from "next/image";
import Rating from '@mui/material/Rating';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const CourseOverview = () => {
  const [value, setValue] = React.useState<number | null>(2);
  return (
    <Box
      sx={{
        width: "100%",
        height: "554px",
        background: "linear-gradient(90deg, rgb(245, 128, 37), rgb(0, 0, 0))",
        marginTop: "20px",
      }}
    >
      <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} sx={{display:'flex', alignItems: "center"}}>
          <Grid item xs={8} xl={6}>
            <Item sx={{display: 'flex', justifyContent: 'left', backgroundColor:'transparent', boxShadow:'0'}}><div role="presentation" onClick={handleClick}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link underline="hover" color="white" href="/">
          Browse
        </Link>
        <Link
          underline="hover"
          color="white"
          href="/material-ui/getting-started/installation/"
        >
          Conputer Science
        </Link>
        <Typography color="white">Software Development</Typography>
      </Breadcrumbs>
    </div></Item>
          </Grid>
          <Grid item xs={4} xl={6}>
            <Item sx={{display: 'flex', justifyContent: 'left', backgroundColor:'transparent', boxShadow:'0'}}>
              <Typography sx={{color:'white '}}>Offered By</Typography>
            </Item>
          </Grid>
          <Grid item xs={4} xl={6}>
          <Item sx={{display: 'flex', justifyContent: 'left', backgroundColor:'transparent', boxShadow:'0'}}>
            <Typography variant="h5" gutterBottom sx={{textAlign: 'left', fontSize: "34px", color:'white'}}>Computer Science: Programming with a <br/> Purpose</Typography>
          </Item>
        </Grid>
        <Grid item xs={8} xl={6}>
          <Item sx={{display:'flex', justifyContent: 'left', backgroundColor:'transparent', boxShadow:'0'}}>
            <Box sx={{marginTop: "-40px"}}><Image src='/assets/images/princeton.png'  width="157px" height="70px" alt='princetonuniversity'/></Box>
          </Item>
        </Grid>
        <Grid item xs={4} xl={12}>
          <Item sx={{display: 'flex', justifyContent: 'left', backgroundColor:'transparent', boxShadow:'0', alignItems: "center" }}><Rating name="read-only" value={value} readOnly size='small' /><Typography sx={{marginLeft:'10px', color:'white'}}>4.7 656 ratings</Typography></Item>
        </Grid>
        <Grid item xs={8} xl={12}>
          <Item sx={{display: 'flex', justifyContent: 'left', backgroundColor:'transparent', boxShadow:'0', alignItems: "center" }}>xs=8</Item>
        </Grid>
        </Grid>
        {/* <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8} xl={6}>
          <Item sx={{display: 'flex', justifyContent: 'left', backgroundColor:'transparent', boxShadow:'0'}}>
            <Typography variant="h5" gutterBottom sx={{textAlign: 'left', fontSize: "34px", color:'white'}}>Computer Science: Programming with a <br/> Purpose</Typography>
          </Item>
        </Grid>
        <Grid item xs={4} xl={6}>
          <Item sx={{display:'flex', justifyContent: 'left', backgroundColor:'transparent', boxShadow:'0'}}>
            <Image src='/assets/images/princeton.png'  width="157px" height="70px" alt='princetonuniversity'/>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box> */}
      </Box>
      </Container>
    </Box>
  );
};

export default CourseOverview;
