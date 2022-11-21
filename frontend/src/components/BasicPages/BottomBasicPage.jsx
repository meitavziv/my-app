import { React } from 'react';
import './BottomBasicPage.css'
import { BasicPage } from '../index'

export default function BottomBasicPage(props) {

    const comp = <>
        <div className='bottom-page'>
            <h1 className='title'>{props.title}</h1>
            <div className='bottom-page-valus'>
                {props.bottomValue}
            </div>
        </div>
    </>

    return (
        <BasicPage img={props.img} comp={comp} />
    )
}

