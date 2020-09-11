import React,{Component} from 'react';
import { Route,Switch, BrowserRouter as Router } from 'react-router-dom'
import Signup from './Components/signup';
import login from './Components/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Footer from './Components/Footer';
import AvailableList from './Components/AvailableList';
import Food from './Components/Food';
import Clinic from './Components/Clinic';
import Home from './Components/Home';
import About from './Components/About';
import BuyThings from './Components/BuyThings';
import { Box,  } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Search from './Components/search';
import Admin from './Components/Admin';
import Parrot from './Components/parrots';
import Email from './Components/ForgotPassword_Email';




const style={
   paper:{
      flexGrow:4,
      backgroundColor:'#212121',
      color:'white'
   },
   menuButton:{
      spacing:2,
   },
   title: {
      flexGrow: 1,
    },
   link:{
      underline:'none'
   },
   appBar:{
      backgroundColor:'#212121',
      maxWidth:"88%",
      marginLeft:"6%"
   }
}


export default class App extends Component{
  // constructor(props) {
  //   super(props);
  //   this.logOut = this.logOut.bind(this);
  //   this.state = {
  //     Admin: false,
  //     currentUser: undefined,
  //   };
  // }
  // componentDidMount() {
  //   let user;
  //   if (localStorage.getItem('username')) {
  //     user = {
  //       username: localStorage.getItem('username'),
  //       id: localStorage.getItem('id'),
  //       email: localStorage.getItem('email'),
  //       roles: localStorage.getItem('roles'),
  //       password: localStorage.getItem('password'),
  //     };
  //   }

  //   if (user) {
  //     this.setState({
  //       currentUser: user,
  //       Admin: user.username.includes("kittypet")&&user.password.includes("kittypet")
  //     });
  //   }
  // }

  // logOut () {
  //   localStorage.clear()
  // }


  render(){
    //const { currentUser, Admin } = this.state;
    return(
      <>
      <Router>
        <AppBar  style={{backgroundColor:'white',boxShadow:"none"}}>
      <Grid container spacing={1} style={{maxWidth:"88%",marginLeft:"6%"}}>
      <Grid item xs={3}>
      {/* <TemporaryDrawer/> */}
      <img src="https://image.freepik.com/free-vector/pet-shop-care-simple-logo_54548-156.jpg" height="100" width="400" alt="logo" />
      </Grid>

      <Grid item xs={6} style={{marginTop:"1.5%"}}>
          <Search/>
      </Grid>

      <Grid item xs={3}>
      <Box mt={4}>
        {/* Sign up and Sign in Button with style */}
        <a style={{textDecoration:'none',color:'black'}} href="/login"><Button style={{borderRadius:'50%',width:'48%',backgroundColor:'#8d6e63',height:60,fontSize:20}} variant="contained">LOGIN</Button></a>&nbsp;
      <a style={{textDecoration:'none',color:'black'}} href="/signup"><Button  style={{borderRadius:'50%',width:'48%',backgroundColor:'#8d6e63',height:60,fontSize:20}} variant="contained">SIGN UP</Button></a>
      </Box>
      </Grid>
      </Grid>

        <AppBar position="relative" style={style.appBar}>
          <Toolbar>
            <Paper style={style.paper} elevation={1} >
            <Box fullWidth textAlign="center">
              <Button href="/" color='inherit'>
                <strong><h5 style={{color:"white"}}>Home</h5></strong>
              </Button>&nbsp;&nbsp;&nbsp;

          {/* {this.state.Admin ? ( */}
              {/* <Button href="/Admin" color='inherit'>
                  <strong><h5 style={{color:"white"}}>Admin</h5></strong>
                </Button> */}
                {/* // ):(

                //   this.state.currentUser&&(
                //     <> */}
                <Button href="/AvailableList" color='primary'>
                  <strong><h5 style={{color:"white"}}>Available List</h5></strong>
                </Button>
                
                <Button href="/Food" color='inherit'>
                  <strong><h5 style={{color:"white"}}>Food</h5></strong>
                </Button>
              
                <Button href="/Clinic" color='inherit'>
                  <strong><h5 style={{color:"white"}}>Cilinic</h5></strong>
                </Button>

                <Button href="/BuyThings" color='inherit'>
                  <strong><h5 style={{color:"white"}}>Buy Things</h5></strong>
                </Button>
                
                <Button href="/About" color='inherit'>
                  <strong><h5 style={{color:"white"}}>About Us</h5></strong>
                </Button>

                <Button href="/admin" color='inherit'>
                  <strong><h5 style={{color:"white"}}>Admin</h5></strong>
                </Button>
                {/* </>))} */}
                </Box>
              </Paper>

              {/* {currentUser ? (
              <Paper style={{'backgroundColor': 'black', 'color': 'white'}} elevation={0}>
                <Button href="/profile" color='inherit'>
                  <AccountCircle style={{ fontSize: 40 }}/>
                  <strong>{currentUser.username}</strong>
                </Button>
                <Button href="/login" color='inherit' onClick={this.logOut}>
                  <strong>LogOut</strong>
                </Button>
              </Paper>
            ) : (
              <Paper style={{'backgroundColor': 'black', 'color': 'white'}} elevation={0}>
                <Button href="/login" color='inherit'>
                  <strong>Login</strong>
                </Button>
                <Button href="/signup" color='inherit'>
                  <strong>Sign Up</strong>
                </Button>
              </Paper>
            )} */}
            
          </Toolbar>
        </AppBar>
        </AppBar>

        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={login} />
            <Route exact path="/signup" component={Signup} />
            <Route path="/Food" component={Food} />
            <Route path="/Clinic" component={Clinic} />
            <Route path="/AvailableList" component={AvailableList} />
            <Route path="/About" component={About} />
            <Route path="/BuyThings" component={BuyThings}/>
            <Route path="/parrots" component={Parrot}/>
            <Route path="/admin" component={Admin}/>
            <Route path="/ForgotPassword" component={Email}/>
          </Switch>
        </div>
        
      <Footer/>
    </Router>
    </>
  );
}
}
//export default App;
