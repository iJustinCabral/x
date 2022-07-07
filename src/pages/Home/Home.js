import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { initTerminal } from 'ttty'
import './Home.css'

var isUsername = false;
var isPassword = false;

export default function Home() {

  useEffect(() => {
    
    const terminal = initTerminal({
      host: document.querySelector("#terminal"),
      welcomeMessage: "Welcome to ThinkrOS. Log in to continue...",
      prompt: "616c6963650a:~$",
      commands: {

        echo: {
          name: "echo",
          description: "A command that will echo one argument",
          argDescriptions: ["a string to be echoed in console"],
          func: ({ print }, argument) => {
            print(argument);
          }
        },

        clear: {
          name: 'clear',
          description: 'Clear the terminal history',
          func: ({ commandContainer }) => { commandContainer.innerHTML = '' }
        },

        username: {
          name: "username",
          description: "A command to enter the username",
          argDescriptions: ["string"],
          func: ({print}, argument) => {
            if (argument === "alice") {
              isUsername = true;
              print(`Hello ${argument}. What's your password?`);
            }
              else{
                isUsername = false;
                print( 'Incorrect...try again');
              }
          }

        },

       password: {
          name: "password",
          description: "A command to enter the user's password",
          argDescriptions: ["string"],
          func: ({print}, argument) => {
            if(isUsername == true) {

              if (argument === "password" && isUsername === true) {
                isPassword = true;
                setTimeout(() => {window.location.href = "/thinkrOS"}, 3000)
                print("Correct. Logging into ThinkrOS...");

              }
              else{
                print('Not quite...try again');
              }
            }
          }
        },

      }
    });

    terminal.input.focus()
    
  }, []);
  return (
    <div className="App">
      <div id="terminal"/>
    </div>
  );
}
