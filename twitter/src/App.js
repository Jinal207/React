import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="logo-box">
        <img src="./twitter logo.png" alt="logo" className="logo"/>
        <h2>Sign In to Twitter</h2>
        <button>
          <img src="./google logo.jfif" alt="logo"/>
          Sign in with Google
        </button>
        <button>
          <img src="./apple logo.jfif" alt="logo"/>
          Sign in with Google
        </button>

        <hr></hr>
        <span>Or</span>

        <form>
          <input type="text" placeholder="Phone email or username"/>
          <button>Next</button>
        </form>
        
        <button>Forget Password</button>
        <p>
          Don't Have an account <a>Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default App;
