import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './pages/Main/Main'
import Terminal from 'react-console-emulator'

var isUsername = false;
var isPassword = false;

const commands = {
  echo: {
    description: 'Echo a passed string.',
    usage: 'echo <string>',
    fn: (...args) => args.join(' ')
  },
  username: {
    description: 'Initial user',
    usage: 'username <string>',
    fn : function (arg1) {
      if (arg1 === "alice") {
        isUsername = true;
        return `Welcome ${arg1}. Whats your password?`
    }
      else{
        return 'Guess you are not much of Thinkr...try again'
      }
    }
  },
  password: {
    description: 'Root Password',
    usage: 'password <string>',
    fn : function (arg1) {
      if(isUsername == true) {

        if (arg1 === "password") {
          isPassword = true;
          return "Correct. Redirecting ..."
        }
        else{
          return 'haha...try again'
        }
      }
    }
  },

}

function App() {
  return (
      <Terminal
        commands={commands}
        welcomeMessage={'Greetings...who are you?'}
        promptLabel={isUsername ? 'alice$' : '$'}
      />
  );
}

export default App;
