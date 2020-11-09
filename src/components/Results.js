import React, {useState} from 'react';
import Modal from "react-modal";

import Input from "./Input";

import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export default function Results({searchPhotos, setPhotos, photos, name, setName}) {

    const [modal, setModal] = useState(false);
    const [modalToShow, setModalToShow] = useState(false);

    function showButtons() {
        const tagsArray = [];
        photos.results.forEach(item => item.tags.forEach(tag => {
            if (!tagsArray.includes(tag.title)) {
                tagsArray.push(tag.title);

            }
        }))
        return (
            <div className='buttons-box container'>
                {tagsArray.map(item =>
                    <button onClick={(e) => {
                        setName(item);
                        clickButton(e, item)
                    }} key={item}>{item}</button>)}
            </div>
        )

    }

    function clickButton(e, item) {
        e.preventDefault();
        searchPhotos(item, setPhotos);
    }


    function showModal(e, item) {
        e.preventDefault();
        setModal(true);
        setModalToShow(
            <div className='modal-box'>
                <div className='author-box'>
                    <p>Author: {item.user.name}</p>
                    <FontAwesomeIcon onClick={() => setModal(false)} className='close-icon' icon={faTimes}/>
                </div>
                <img src={item.urls.regular} alt={item.description}/>
                <p>Location: {item.user.location}</p>
            </div>
        )
    }

    return (
        <section className='results-section'>

            {photos ?
                photos.results.length === 0 ?
                    <div className='container'>
                        <Input nameOfClass='in-results-section' searchPhotos={searchPhotos} setPhotos={setPhotos}/>
                        <h1 style={{marginTop: "100px"}}>no photos to show</h1>
                    </div>
                    :
                    <div>
                        <div className='container'>
                            <Input nameOfClass='in-results-section' searchPhotos={searchPhotos} setPhotos={setPhotos}
                                   setName={setName}/>
                            <h1>{name}</h1>
                        </div>
                        {showButtons()}
                        <div className='photos-box'>
                            {photos.results.map(item => <img onClick={(e) => showModal(e, item)} src={item.urls.small}
                                                             alt={item.title} key={item.id}/>)}
                        </div>

                        <Modal isOpen={modal} onRequestClose={() => setModal(false)} style={{
                            overlay: {
                                backgroundColor: "none"
                            },
                            content: {
                                position: 'absolute',
                                top: '5%',
                                left: '20%',
                                width: "800px",
                                height: "auto",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                overflow: "auto",

                            }
                        }}>
                            {modalToShow}
                        </Modal>
                    </div>
                :
                ""
            }
        </section>
    )
}