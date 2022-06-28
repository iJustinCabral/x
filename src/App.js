import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './pages/Main/Main'
import Terminal from 'react-console-emulator'

const commands = {
  echo: {
    description: 'Echo a passed string.',
    usage: 'echo <string>',
    fn: (...args) => args.join(' ')
  }
}

function App() {
  
  return (
      <Terminal
        commands={commands}
        welcomeMessage={'Welcome to the Thinkr Community Challenge!'}
        promptLabel={'Thinkr@DreamAway:~$'}
      />
  );
}

export default App;
