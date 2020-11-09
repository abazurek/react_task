import React from 'react';

export default function Input({nameOfClass}){

    function checkInput(target){

       if(target.length >= 3){
           console.log(target)
        }
    }

    return(
        <form>
            <label>
                <input className={nameOfClass} type='text' autoComplete="on" placeholder='Search free high-resolution photos'
                onChange={({target})=>checkInput(target.value)}/>
            </label>
        </form>
    )
}