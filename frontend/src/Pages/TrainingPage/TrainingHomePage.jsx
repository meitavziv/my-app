import { React } from 'react';
import { trainingHomePage, calcLogo, muscleLogo } from '../../image/index';
import '../TrainingPage/Training.css'
import { BottomBasicPage } from '../../components/index'
import { Avatar } from 'antd';

export default function TrainingHomePage() {

    const bottomValue = <>
        <div className='training'>
            <div className='training-section'>
            <a href='/training/general'><Avatar src={muscleLogo} className='training-logo' /></a>
                <div className='divider' />
                <h2>לוח אימונים </h2>
            </div>

            <div className='training-section'>
            <a href='/training/personal'><Avatar src={calcLogo} className='training-logo' /></a>
                <div className='divider' />
                <h2> לוח אימונים אישי</h2>
            </div>
        </div>
    </>

    return (
        <BottomBasicPage title={'אימונים'} img={trainingHomePage} bottomValue={bottomValue} />
    )
}



