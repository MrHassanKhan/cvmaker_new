import React from 'react'
import Grid from '@material-ui/core/Grid';
import {Textfield, Textfield2, Multiline} from "../GUI/Textfield"
import {useSelector , useDispatch} from "react-redux"
import {nextStep , prevStep ,changeQualities} from "../action/index"
import FadeIn from 'react-fade-in';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from "react-router-dom";
import Email from "../Fragments/Email"

export default function Qualities() {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const qualities = useSelector(state => state.quality.qualities);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
   
    return (

      <FadeIn>
        <React.Fragment>
      <div>


        <div>

      <br></br><br></br><br></br><br></br><br></br>
        <div style={{textAlign:"center"}}>
        <h4>QUALIFICATIONS</h4>
      
        <div style={{textAlign:"center",paddingRight:50 , paddingLeft:50, wordBreak: "break-word"}}>
        <p>List key achievements, skills, experience, and the qualifications <br></br> that are most relevant to the position you're applying for.</p>
        </div>
        
        </div>
        
    <Grid container justify="space-around">
    <form noValidate>     

        <Multiline
          id="outlined-multiline-static"
          label="Qualities"
          multiline
          rows={10}     
          defaultValue=""
          onChange ={ e=> {dispatch(changeQualities(e.target.value))}}
          variant="outlined"
          defaultValue={qualities}
        />  

    </form>
    </Grid>
    <div style={{textAlign:"center"}} className="block">
          <Email/>
    </div>

    <div style={{textAlign:"center"}} className="block">
              <br></br><br></br>
              <a id="needHelp" style={{color:'#fff'}} onClick={e => dispatch(prevStep())} className="main-button">&nbsp; &nbsp; Back &nbsp; &nbsp;</a> {'     '} <div>&nbsp;</div>
              <a id="needHelp" style={{color:'#fff'}} onClick={e => dispatch(nextStep())} className="main-button">&nbsp; &nbsp; Continue &nbsp; &nbsp;</a>
        </div>

    </div>

      </div>

      
      </React.Fragment>
      </FadeIn>
    )
}
