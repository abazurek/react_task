import React,{useState, useEffect} from 'react';

export default function Input({nameOfClass,searchPhotos}){

    const [inputValue, setInputValue]=useState('')
    const [data,setData]=useState('')
    const [searchedText,setSearchedText]=useState('');

    //
    // if( inputValue.length >=3){
    //     setSearchedText(inputValue);
    //     searchPhotos(inputValue, setData);
    // }else if(inputValue.length < 3){
    //     setSearchedText('');
    //     setData('');
    // }


    function checkInput(target){
       if(target.length >= 3){
           setSearchedText(target);
           searchPhotos(target, setData);
        }
       else if(target.length < 3){
           setSearchedText('');
           setData('');
       }
    }
    const hintsTable=[];
    if(data){

        data.results.forEach(item=>item.tags.forEach(tag=>{
            if(tag.title.includes(searchedText)){
                if(!hintsTable.includes(tag.title) && hintsTable.length<6)
                    hintsTable.push(tag.title)
            }

        }))

    }

    function submitForm(e){
        e.preventDefault();

    }


    return(<div className='form-box'>
        <form onSubmit={submitForm}>
            <label>
                <input className={nameOfClass} type='text' autoComplete="on" placeholder='Search free high-resolution photos'
                onChange={({target})=>checkInput(target.value)}/>
                //        onChange={({target})=>setInputValue(target.value)}/>
            </label>
        </form>
        {hintsTable.length!==0?
            <div className='hints-box'>

                {hintsTable.map(item => <p key={item}>{item}</p>)}


            </div>
            :''
        }
        </div>
    )
}