import React from 'react';

import Input from "./Input";

export default function Main({searchPhotos, setPhotos,setName}) {
    return (
        <main className='main-section'>
            <div className='container'>

                <h1>Unsplash</h1>
                <p>The internet's source of <span>freely-usable-images</span></p>
                <p>Powered by creators everywhere</p>

                <Input nameOfClass='in-main-section' searchPhotos={searchPhotos} setPhotos={setPhotos} setName={setName}/>
                <p className='trenging-paragraph'>Trending: flower, wallpapers, backgrounds, happy, love</p>
            </div>
        </main>
    )
}