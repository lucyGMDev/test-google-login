import './App.css';
import GoogleLogin from 'react-google-login';
import LoginService from './services/loginServices'

function App() {

  const failureResponse = (response) => {
    console.log(response);
  }

  return (
    <div className="App">
      <header className="App-header">
        <GoogleLogin
          className="GoogleLogin"
          clientId="388051308676-kbak26htb6699lplr1dgmkc5socbu62c.apps.googleusercontent.com"
          buttonText="Login Google"
          onSuccess={LoginService.googleLogin}
          onFailure={failureResponse}
          cookiePolicy={'single_host_origin'}
        />
      </header>
    </div>
  );
}

export default App;
