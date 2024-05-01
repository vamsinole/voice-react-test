// import React from 'react'
import Header from '../../Components/Header'
import React, {  useState, useRef, useEffect} from 'react'
import env from '../../../config';
import './Styles.scss';
import TopMenu from '../../Components/TopMenu';
import { Link } from 'react-router-dom'


const NewAssistant = () => {
  const TblData = [
    {
        name: "Akram",
        model: "Lorem Ipsum is",
        instruc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        type: "Dialogdlow",
        action: ''
    },
    {
        name: "Jhon",
        model: "Lorem Ipsum is",
        instruc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        type: "Dialogdlow",
        action: ''
    },
    {
        name: "Rahul",
        model: "Lorem Ipsum is",
        instruc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        type: "Dialogdlow",
        action: ''
    },
    {
        name: "Syam",
        model: "Lorem Ipsum is",
        instruc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        type: "Dialogdlow",
        action: ''
    },
    {
        name: "Ved",
        model: "Lorem Ipsum is",
        instruc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        type: "Dialogdlow",
        action: ''
    },
];







  return (
    <>
    
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <Header />

          
        </div>
      </div>



        
    </>
  )
}

export default NewAssistant