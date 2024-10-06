import './App.css'
import React from 'react'

export default function Button({value,onButtonClick}){
    return (
        <button className='button' onClick={onButtonClick}>{value}</button>
    )
}