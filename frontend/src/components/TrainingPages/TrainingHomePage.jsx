import { React } from 'react';
import { trainingHomePage, calcLogo, muscleLogo } from '../../image/index';
import '../TrainingPages/Training.css'
import { BottomBasicPage } from '../index'
import { Avatar } from 'antd';

export default function TrainingHomePage() {

    const bottomValue = <>
        <div className='training'>
            <div className='training-section'>
            <a href='/training/schedule'><Avatar src={muscleLogo} className='training-logo' /></a>
                <div className='divider' />
                <h2>לוח אימונים </h2>
            </div>

            <div className='training-section'>
                <Avatar src={calcLogo} className='training-logo' />
                <div className='divider' />
                <h2> לוח אימונים אישי</h2>
            </div>
        </div>
    </>

    return (
        <BottomBasicPage title={'אימונים'} img={trainingHomePage} bottomValue={bottomValue} />
    )
}



