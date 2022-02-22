import React, { useState } from 'react'
import Header from '../../header/Header';
import "./contactMe.scss";
import emailjs from '@emailjs/browser';
import { controllerMessage, controllerMail, controllerName } from './controller';


export default function ContactMe({ theme, setTheme }) {


    const [messageState, setMessageState] = useState("");
    const [nameState, setNameState] = useState("");
    const [mailState, setMailState] = useState("");
    const [messageSended, setMessageSended] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        if (messageState.error === "" && nameState.error === "" && mailState.error === "") {
            let message, name, mail;
            message = messageState.message;
            name = nameState.name;
            mail = mailState.mail;
            let toSend = {
                name: "Cihat",
                form_name: "cihatkocak.com - contact me",
                from_name: name,
                message: message,
                user_email: mail,
                reply_to: mail,
            }

            emailjs.send(process.env.REACT_APP_MAIL_ACCESS_TOKEN, process.env.REACT_APP_TEMPLATE_ID, toSend, process.env.REACT_APP_MAIL_USER_ID)
                .then((result) => {
                    console.log(result.text);
                    setMessageSended(true);
                    setMessageState("");
                    setNameState("");
                    setMailState("");
                    document.getElementById("contact-form").reset();
                }, (error) => {
                    console.log(error.text);
                    setMessageSended(false);
                });
        }
    }
    console.log(process.env.REACT_APP_MAIL_ACCESS_TOKEN)
    return (
        <>
            <Header theme={theme} setTheme={setTheme} />
            <div className="container-contact">
                <section id="hire">
                    <h1>Contact Me</h1>

                    <form id='contact-form' onSubmit={sendEmail}>
                        <div className="field name-box">
                            <input className={nameState.addClass} name="user_name" type="text" id="name" onChange={(e) => { setNameState(controllerName(e.target.value)) }} placeholder="Who Are You?" />
                            <label htmlFor="name">Name</label>
                            <span style={{ opacity: nameState.opacity }} className="ss-icon">Name</span>
                        </div>

                        <div className="field email-box">
                            <input className={mailState.addClass} name="user_email" type="text" id="email" onChange={(e) => { setMailState(controllerMail(e.target.value)) }} placeholder="name@email.com" />
                            <label htmlFor="email">Mail</label>
                            <span style={{ opacity: mailState.opacity }} className="ss-icon">Email</span>
                        </div>

                        <div className="field msg-box">
                            <textarea className={messageState.addClass} name="message" id="msg" rows="4" onChange={(e) => { setMessageState(controllerMessage(e.target.value)) }} placeholder="Your message goes here..." ></textarea>
                            <label htmlFor="msg">Msg</label>
                            <span style={{ opacity: messageState.opacity }} className="ss-icon ">Msg</span>
                        </div>
                        <div className={messageSended ? "success" : "error"}>
                            <p>{mailState ? mailState.error : ""}</p>
                            <p>{nameState ? nameState.error : ""}</p>
                            <p>{messageState ? messageState.error : ""}</p>
                            <p>{messageSended ? "Message sent successfully!" : ""}</p>
                        </div>

                        <input disabled={messageState.error === "" && nameState.error === "" && mailState.error === "" ? false : true} className="button" type="submit" value="Send" />
                    </form>

                </section>
            </div>

        </>

    );
}
