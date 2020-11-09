import React,{useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom'

export default function Input({nameOfClass,searchPhotos, setPhotos}){
    let history = useHistory();

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
          return   <div className='hints-box'>{hintsTable.map(item =>
              <p
                  onClick={(e)=>submitClicked(e,item)}
                 key={item}>{item}</p>)}</div>
       }
        else if(hintsTable.length === 0 && inputValue.length>=3){
           return  <div className='hints-box'><p className='no-hints'>No hints</p></div>
       }

    }

    function submitForm(e){
        e.preventDefault();
       searchPhotos(inputValue,setPhotos);
        history.push('/results')
    }

    function submitClicked(e,item){
        e.preventDefault();
        searchPhotos(item,setPhotos);
        history.push('/results')
    }

    return(<div className='form-box'>
        <form onSubmit={submitForm}>
            <label>
                <input className={nameOfClass} type='text' autoComplete="on" placeholder='Search free high-resolution photos'
                       onChange={({target})=>setInputValue(target.value)}
                       // onDragEnter={(e)=>submitForm(e,inputValue)}
                       // onDragEnter={({target})=>console.log(target)}
                />
            </label>
        </form>
            {showHints()}
        </div>
    )
}