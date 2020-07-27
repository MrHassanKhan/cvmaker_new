
import React, { PropTypes } from 'react'
import Grid from '@material-ui/core/Grid';
import MaterialUIPickers from "../GUI/Datepicker"
import Header from "../Fragments/Header"
import Footer from "../Fragments/Footer"
import {Textfield, Textfield2, Multiline} from "../GUI/Textfield"
import {useSelector , useDispatch} from "react-redux"
import RichTextEditor from 'react-rte';
import {nextStep , prevStep} from "../action/index"
import Richtext from "../GUI/Richtext"
import {changeEmployer ,addNumber, changeJob , changeJobStartDate , changeJobEndDate ,changeJobDescription ,addExperience ,remExperience } from "../action/index"
import Work from "../Fragments/Work"
import {connect} from "react-redux"

 function Experience(props){

  const works = props.works;
  const dispatch = useDispatch();
  const num = useSelector(state => state.experiences.number)
  console.log(num)

  //<div>Counter: {num}</div>

    return (
        <React.Fragment>
                <div>

      <div>

      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <div style={{textAlign:"center"}}>
        <h1>WORK EXPERIENCE</h1>
    <div>Counter: {num}</div>
    
        </div>
        
      <div>
      { 
      
      
      works.map( (item, index) => (

          <Work index ={index} />
      )) 

      }
      </div>
       


<div style={{textAlign:"center"}}>
<a href="#" class="main-button-slider" style={{color:'#fff'}} onClick={e => dispatch(addExperience())}>+</a>{'      '}
      <a href="#" class="main-button-slider" style={{color:'#fff'}} onClick={e => dispatch(remExperience())}>-</a>
      </div>
      
        
       
    <div style={{textAlign:"center"}} className="block">
              <br></br><br></br>
              <a href="#" onClick={e => dispatch(prevStep())} className="main-button">&nbsp; &nbsp; Back &nbsp; &nbsp;</a> {'     '} <div>&nbsp;</div>
              <a href="#" onClick={e => dispatch(addNumber())} className="main-button">&nbsp; &nbsp; Continue &nbsp; &nbsp;</a>
        </div>

    </div>

      </div>

        </React.Fragment>
    )




}

const mapStateToProps = (state, dispatch) => {
  return {
    works: state.experiences.values.work,
    addWork: () => dispatch(addExperience()),
    remWork: () => dispatch(remExperience()),
    backStep:() => dispatch(prevStep()),
    nextStep: () =>dispatch(nextStep()),


  }

}

export default connect(mapStateToProps)(Experience);