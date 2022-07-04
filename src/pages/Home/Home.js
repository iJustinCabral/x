import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { initTerminal } from 'ttty'
import './Home.css'

var isUsername = false;
var isPassword = false;

export default function Home() {
  useEffect(() => {
    initTerminal({
      host: document.querySelector("#terminal"),
      welcomeMessage: "Greetings...who are you?",
      prompt: "thinkr:~$",
      commands: {

        echo: {
          name: "echo",
          description: "a test command with one echo arg",
          argDescriptions: ["a string to be echoed in console"],
          func: ({ print }, argument) => {
            print(argument);
          }
        },

        clear: {
          name: 'clear',
          description: 'clear the history',
          func: ({ commandContainer }) => { commandContainer.innerHTML = 'Greetings...who are you?' }
        },

        username: {
          name: "username",
          description: "username <string>",
          argDescriptions: ["Initial user"],
          func: ({print}, argument) => {
            if (argument === "alice") {
              isUsername = true;
              print(`Welcome ${argument}. Whats your password?`);
            }
              else{
                print( 'Guess you are not much of Thinkr...try again');
              }
          }

        },

       password: {
          name: "password",
          description: "password <string>",
          argDescriptions: ["Root Password"],
          func: ({print}, argument) => {
            if(isUsername == true) {

              if (argument === "password") {
                isPassword = true;
                setTimeout(() => {window.location.href = "/thinkrOS"}, 5000)
                print("Correct. Redirecting ...");

              }
              else{
                print('haha...try again');
              }
            }
          }
        },

      }
    });
  }, []);
  return (
    <div className="App">
      <div id="terminal" className="terminal"/>
    </div>
  );
}
