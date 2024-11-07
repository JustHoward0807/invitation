import React from 'react';
import './App.css';
import emailjs from '@emailjs/browser';
import {motion, TapInfo} from "framer-motion"

function App() {
    const [count, setCount] = React.useState(1);
    let limit: number = 3;
    const [showYesMessage, setShowYesMessage] = React.useState<boolean>(false);
    const [showNoMessage, setShowNoMessage] = React.useState<boolean>(false);

    function sendEmail(event: MouseEvent | TouchEvent | PointerEvent, info: TapInfo, isMaybe: boolean) {
        emailjs.init({
            publicKey: "BVBZ8cjcS1Azpzgaq"
        })

        if (isMaybe && count < 4) {
            emailjs.send(
                "service_p62y7os",
                "template_qiwqlv7",
                {message: count}
            ).then(r => {
                setCount(count + 1)
                if (count === limit) {
                    setShowNoMessage(true);
                    setShowYesMessage(false);
                }
            });
        } else {
            emailjs.send(
                "service_p62y7os",
                "template_zbq8wt5"
            ).then(r => {
                setShowYesMessage(true);
                setShowNoMessage(false)
            })
        }

    }

    return (
        <div className="blurred-background">
            <div className="centered-content">
                <img src="https://media1.tenor.com/m/whAhQj8irG8AAAAd/lady-and-the-tramp-dogs.gif"/>
            </div>

            <h2 style={{color: "white", fontFamily: "Chalkboard"}}>Dinner with 哈沃學長</h2>
            <div className="btn-box">
                <div style={{marginTop: '20px'}}>
                    <motion.button
                        onTap={(event, info) => sendEmail(event, info, false)}
                        className="box"
                        style={{width: '100px', height: '40px'}}
                        whileHover={{scale: 1.5, backgroundColor: '#52c41a'}}
                        whileTap={{scale: 0.9}}
                        transition={{type: "spring", stiffness: 400, damping: 10}}
                    >
                        YES 🥰
                    </motion.button>
                </div>

                <div style={{marginTop: '20px', marginLeft: '20px'}}>
                    <motion.button
                        onTap={(event, info) => sendEmail(event, info, true)}
                        className="box-maybe"
                        style={{width: '100px', height: '40px'}}
                        whileHover={{scale: 1.15, backgroundColor: '#d32f2f'}}
                        whileTap={{scale: 0.9}}
                        animate={{x: [-5, 5, -5]}}
                        transition={{
                            type: "spring",
                            stiffness: 50,
                            damping: 10,
                            duration: 1.5
                        }}
                    >

                        {count === 2 ? 'Are you sure?' : count === 3 ? '🥲 (One more time)' : 'MAYBE ❌'}
                    </motion.button>
                </div>
            </div>


            {showYesMessage ? <h1 style={{color: "white"}}>明智的選擇!</h1> : null}
            {showNoMessage ? <h1 style={{color: "white"}}>好吧...</h1> : null}

        </div>
    );
}

export default App;
