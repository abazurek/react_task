import React from 'react';
import Input from "./Input";
export default function Results({searchPhotos, setPhotos, photos}) {


    return (
        <section className='results-section'>

            {photos ?
                photos.results.length === 0 ?
                    <div className='container'>
                        <Input nameOfClass='in-results-section' searchPhotos={searchPhotos} setPhotos={setPhotos}/>
                        <h1 style={{color: "black", marginTop: "100px", fontSize: "2em"}}>no photos to show</h1>
                    </div>
                    :
                    <div>
                        <Input nameOfClass='in-results-section' searchPhotos={searchPhotos} setPhotos={setPhotos}/>
                        {photos.results.map(item => <img src={item.urls.thumb} alt={item.title} key={item.id}/>)}
                    </div>
                :
                ""
            }
        </section>
    )
}