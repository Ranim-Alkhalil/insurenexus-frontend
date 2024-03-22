import { Button,  ButtonGroup,  Checkbox, FormControlLabel, Grid, Paper, TextField } from "@mui/material";

export default function SignUp(props){
    return (
        <div className="signupcontainer">
            <h1 className="signUpHeader">Sign Up</h1>
            <ButtonGroup size="large" aria-label="Large button group" sx={{bgcolor:'#CBB26B',borderColor:'green',color:'yellow'}}>
                 <Button sx={{color:'#17507f',borderColor:'#17507f',bgcolor:'white'}}>user</Button>
                 <Button sx={{color:'#17507f',borderColor:'#17507f',bgcolor:'white'}}>subscribed company</Button>
                 <Button sx={{color:'#17507f',borderColor:'#17507f',bgcolor:'white'}}>insurance company</Button>
            </ButtonGroup>
            <form>
            
            
            <TextField id="firstName" label="firstName" variant="outlined" required sx={{width:200,marginRight:1}}/>
            <TextField id="lastName" label="lastName" variant="outlined" required sx={{width:200}}/> 
            
            <br/>
            <br/>
            <TextField id="email" label="email" variant="outlined" required sx={{width:410}}/> 
            <br/>
            <br/>
            <TextField id="password" label="password" variant="outlined" required sx={{width:410}}/> 
            <br/>
            <br/>
            <TextField id="nationalID" label="national ID" variant="outlined" required sx={{width:410}}/> 
            <br/>
            <br/>
            <TextField id="phonenum" label="phone number" variant="outlined" required sx={{width:410}}/> 
            <br/>
            <br/>
            <Button  variant="contained"  sx={{backgroundColor:"#0f3554",width:140}}>Sign Up</Button>
            <br/>
            <br/>
            <a href="">Already have an account?Sign In</a>
            
            
            </form>
        </div>
         );
}