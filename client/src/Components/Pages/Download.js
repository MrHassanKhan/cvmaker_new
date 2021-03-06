import React, { Component } from 'react'
import Buttons from "../GUI/Button"
import Zoom from "@material-ui/core/Zoom"
import FadeIn from 'react-fade-in';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import $ from "jquery"
import emailjs from 'emailjs-com';
import Support from "../Fragments/Support"
import Facebook from 'react-sharingbuttons/dist/buttons/Facebook'
import Twitter from 'react-sharingbuttons/dist/buttons/Twitter'
import 'react-sharingbuttons/dist/main.css'
import { Redirect } from "react-router-dom"
import { Link } from "react-router-dom";
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { isIE , isOpera ,isEdge } from 'react-device-detect'




export default class Download extends Component{
  
      constructor(props){
        super(props)  
  
          this.checkFile = this.checkFile.bind(this)
         
          
        this.state = {

            loading: true,
            disable:true,
            count :0

          }

      }
   

      componentDidMount =()=> {

           this.fetchData()

        


          


      }



      fetchData = () =>{

      
        
        const interval = setInterval(() => {
          if (this.state.loading && this.state.count<30 ){
          this.checkFile();}
          else if(this.state.count>20) {
            clearInterval(interval)
            window.location.href="//www.resumefactory.co/error"
          }
          else {
            clearInterval(interval)
          }
        }, 5000);

      
        
      }


   


  checkFile = () => {            
      axios.get('/api/download')
                    .then((res) => {
                     this.setState({loading:false})
                     this.setState({disable:false})
            })

            .catch(error => {
              this.setState({count:this.state.count+1})
             
              
            })
 }

  handleDownloadFile = () => {
    return axios({
      url: '/api/download_resume', // download url
      method: 'get',
      responseType: 'arraybuffer',
      headers: {
        Accept: 'application/pdf',
        'Content-Type': 'application/json',
        mode: 'no-cors'
      }
    })
    .then((response) => {
    
      if(isIE || isEdge){

        let blob = new Blob([response.data], { type: 'application/pdf' });
        window.navigator.msSaveOrOpenBlob(blob, "My Resume.pdf");
      }
      else{

          const url = window.URL.createObjectURL(new Blob([response.data]));
     
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'resume.pdf');
          document.body.appendChild(link);
          link.click();

      }

    });

}




  render(){
   
    const url = 'https://www.resumefactory.co'
    const shareText = 'Guys i just found the perfect site to create a resume, very proffesional!'
    return (
      <FadeIn>
      <React.Fragment>
      
        <div>
        {window.scrollTo(0,0)}

      <br></br><br></br><br></br><br></br><br></br>
        <div style={{textAlign:"center", color:"#253B80"}}>

            <h4>DOWNLOAD YOUR RESUME</h4>

            <br></br>
                          <div id="cover">

              <h3 style={{color:"black"}}><strong>SHOW YOUR SUPPORT</strong></h3>
                  <br></br>

              <p id="para">
                We appreciate you taking the time to user our online resume maker. We depend on support
                from generous individuals like you to update and maintain this website. To
                support this initiative by an African developer, you 
                  can DONATE via PAYPAL or SHARE our webiste on 
                  your social media. </p>


                  <br></br>
                  <Facebook url={url} shareText={shareText} />
                  <Twitter url={url} shareText={shareText} />
                  <br></br><br></br>

                  
                  <a href="https://www.paypal.com/paypalme/ksekwamote" target="_blank" >Donate via Paypal</a>
                  <br></br>
                  <a href="https://www.paypal.com/paypalme/ksekwamote" target="_blank" class="btn"></a>
                  <br></br><br></br>
                  </div>

          
        

            <span style={{fontSize:90}}>&#8595;</span>
        
        
            <br></br><br></br>


 



        {this.state.loading && <div >

                          <div style={{width:30, height:30}} className="spinner-grow text-muted"></div>
                <div style={{width:30, height:30}}  className="spinner-grow text-primary"></div>
                <div style={{width:30, height:30}}  className="spinner-grow text-success"></div>
                <div style={{width:30, height:30}}  className="spinner-grow text-info"></div>
                <div style={{width:30, height:30}}  className="spinner-grow text-warning"></div>
                <div style={{width:30, height:30}}  className="spinner-grow text-danger"></div>
                <div style={{width:30, height:30}}  className="spinner-grow text-secondary"></div>
                <div style={{width:30, height:30}}  className="spinner-grow text-dark"></div>
                <div style={{width:30, height:30}}  className="spinner-grow text-light"></div>
                          
          </div>} 


          




                
       <Buttons onClick={e => this.handleDownloadFile()} disabled={this.state.disable} /> 
       

       <br></br> <br></br>




       Subscribe to our newsletter for update on Jobs 
          <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
        </div>
        </div>
            
        
      
    
   
      </React.Fragment>
      </FadeIn>
 
    )
  }
}