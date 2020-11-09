import React,{useState, useEffect} from 'react';


export default function Input({nameOfClass,searchPhotos}){

    const [inputValue, setInputValue]=useState('')
    const [data,setData]=useState('');


    useEffect(function (){
        if( inputValue.length >=3){
            searchPhotos(inputValue, setData);
        }

    },[inputValue])

    function showHints(){
        const hintsTable=[];

        if(inputValue.length >=3 && data){
            data.results.forEach(item=>item.tags.forEach(tag=>{
                if(tag.title.includes(inputValue)){
                    if(!hintsTable.includes(tag.title) && hintsTable.length<6)
                        hintsTable.push(tag.title);
                }

            }))
        }

       if(hintsTable.length !== 0){
          return   <div className='hints-box'>{hintsTable.map(item => <p key={item}>{item}</p>)}</div>
       }
        else if(hintsTable.length === 0 && inputValue.length>=3){
           return  <div className='hints-box'><p className='no-hints'>No hints</p></div>
       }

    }


    function submitForm(e){
        e.preventDefault();

    }


    return(<div className='form-box'>
        <form onSubmit={submitForm}>
            <label>
                <input className={nameOfClass} type='text' autoComplete="on" placeholder='Search free high-resolution photos'
                       onChange={({target})=>setInputValue(target.value)}/>
            </label>
        </form>
            {showHints()}
        </div>
    )
}