import { React } from 'react';
import './BasicPage.css';


export default function BasicPage(props) {

    return (
        <>
            <div className='top-page'>
                <img src={props.img} alt='pic' className='backgroundPic' />
            </div>
            <div className='bottom-page'>
                {props.comp}
            </div>
        </>
    )
}