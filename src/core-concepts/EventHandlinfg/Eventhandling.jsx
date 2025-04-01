 import { useState } from 'react';
export  default function EventHandling() {
const handlevalue=(event)=>{
    event.preventDefault(); // Prevent the default form submission behavior
    console.log(event.target.username.value);
    console.log(event.target.password.value);
}
  
    return (
        <div>
            <form action="" onSubmit={handlevalue}>
                <h1>
                    username
                </h1>
                <input type="text" name="username" id="" />
                <h1>
                    password
                </h1>
                <input type="password" name="password" id="" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}
