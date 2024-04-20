import { useState } from "react"
import './ContactUsPage.css'

const ContactUsPage = (props)=>{
    const [username, setUsername]= useState('')
    const [mail, setMail]= useState('')
    const [phoneNo, setPhoneNo]= useState('')


    const fetchPostData = async ()=>{

        let userDetails = {
            username : username,
            mail : mail,
            phoneNo : phoneNo
        }
        await fetch('https://reacthttp-4b1b6-default-rtdb.firebaseio.com/userlist.json',{
            method : 'POST',
            body : JSON.stringify(userDetails),
            headers :{
                'Content-Type' : 'application/json'
            }
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        console.log(username,mail,phoneNo)
        fetchPostData()


    }
    return <>
    <form onSubmit={submitHandler}>
        <label htmlFor="name" > name :</label>
        <input id='name' type="text"  onChange={(e)=>{setUsername(e.target.value)}}/>
        <br></br>
        <br></br>
        <label htmlFor="mail" > mail :</label>
        <input id='mail' type="text" onChange={(e)=>{setMail(e.target.value)}} />
        <br></br>
        <br></br>
        <label htmlFor="phone" > phone No :</label>
        <input id='phone' type="text"  onChange={(e)=>{setPhoneNo(e.target.value)}} />
        <br></br>
        <br></br>
        <button type="submit"> submit</button>
    </form>
    </>
}
export default ContactUsPage;