import React from 'react';
import logo from './logo.svg';
import './App.css';
import emailjs from '@emailjs/browser';
import {motion, TapInfo} from "framer-motion"

function App() {
    function sendEmail(event: MouseEvent | TouchEvent | PointerEvent, info: TapInfo) {
        emailjs.init({
            publicKey: "BVBZ8cjcS1Azpzgaq"
        })

        emailjs.send(
            "service_p62y7os",
            "template_zbq8wt5"
        ).then(r => alert("收到！ 🥰🥰🥰"))
    }

    return (
        <div className="App">

            <img
                src="https://media1.tenor.com/m/OHWzrmXXV5EAAAAd/needhug-migration.gif"
                alt="HUG JC"/>

            <div style={{marginTop: '20px'}}>
                <motion.button
                    onTap={sendEmail}
                    className="box"
                    style={{width: '100px', height: '40px'}}  // Increased height for a more balanced look
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    transition={{type: "spring", stiffness: 400, damping: 10}}
                >
                    HUG 🥰
                </motion.button>
            </div>

        </div>
    );
}

export default App;
