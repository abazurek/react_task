import React from 'react';
import Input from "./Input";


export default function Results({searchPhotos, setPhotos, photos, name, setName}) {


    function showButtons(){
        const tagsArray=[];
        photos.results.forEach(item=>item.tags.forEach(tag=>{
           if( !tagsArray.includes(tag.title)){
               tagsArray.push(tag.title);

           }
        }))
        return (
            <div className='buttons-box container'>
                {tagsArray.map(item=><button key={item}>{item}</button>)}
            </div>
        )

    }



    return (
        <section className='results-section'>

            {photos ?
                photos.results.length === 0 ?
                    <div className='container'>
                        <Input nameOfClass='in-results-section' searchPhotos={searchPhotos} setPhotos={setPhotos}/>
                        <h1 style={{ marginTop: "100px"}}>no photos to show</h1>
                    </div>
                    :
                    <div>
                        <div className='container'>
                            <Input nameOfClass='in-results-section' searchPhotos={searchPhotos} setPhotos={setPhotos} setName={setName}/>
                            <h1>{name}</h1>
                        </div>
                        {showButtons()}
                        {photos.results.map(item => <img src={item.urls.thumb} alt={item.title} key={item.id}/>)}
                    </div>
                :
                ""
            }
        </section>
    )
}