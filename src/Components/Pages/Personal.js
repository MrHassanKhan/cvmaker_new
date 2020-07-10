
import React, { Component } from 'react'
import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import 'date-fns';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
//import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { green } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import MaterialUIPickers from "../GUI/Datepicker"
import Header from "../Fragments/Header"
import Footer from "../Fragments/Footer"
import {Textfield, Textfield2} from "../GUI/Textfield"
import {useSelector , useDispatch} from "react-redux"
import {firstname} from "../action/index"

export default class Personal extends Component {

      constructor(props){
        super(props)
        
      }

  render() { 
  

    const{value , handleChange , onSubmit} = this.props;
    const firstnameReducer = useSelector(state => firstnameReducer)
    const dispatch = useDispatch();


    return (

      <React.Fragment>
      <div>


<div>
      <Header/>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <div style={{textAlign:"center"}}>
        <h1>COMPLETE THE FOLLOWING PERSONAL</h1>
        </div>
        
    <Grid container justify="space-around">
    <form noValidate>
      
      
      <Textfield
        label="Name"
        name="firstname"
        type="text"
        variant="filled"
        onChange ={() => dispatch(firstname("kutlo"))}
        id="firstname"
        

      />

    
        <Textfield
        label="Surname"

        type="text"
        defaultValue=""
        variant="filled"
        onChange={handleChange('surname')}
        id="reddit-input"
      />
    <br></br>

      <Textfield2
        label="Address"
 
        defaultValue=""
        type="text"
        variant="filled"
       onChange={handleChange('address')}
        id="reddit-input"
      />
      <br></br>

      <Textfield
        label="Email"
        
        defaultValue=""
        type="email"
        variant="filled"
        onChange={handleChange('email')}
        id="reddit-input"
      />
        <Textfield
        label="Phone Number"

        defaultValue="+267 77105790"
        variant="filled"
        type="text"
      onChange={handleChange('phoneNumber')}
        id="reddit-input"
      />
      <br></br>
      <Textfield
        label="Website"

        defaultValue=""
        type="text"
        variant="filled"
        id="reddit-input"
      /> 
        
        {'       '} <MaterialUIPickers/>

     

       

        

    </form>
    </Grid>
    <div style={{textAlign:"center"}} className="block">
              <br></br><br></br>
              <a href="/personal_information"  className="main-button">&nbsp; &nbsp; Continue &nbsp; &nbsp;</a>

        </div>
    <Footer/>
    </div>

      </div>
      </React.Fragment>
    )
  }
}
