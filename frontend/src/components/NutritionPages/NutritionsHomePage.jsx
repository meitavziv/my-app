import { React } from 'react';
import { nutritionHomePage, calcLogo, muscleLogo } from '../../image/index';
import '../NutritionPages/Nutritions.css'
import { BottomBasicPage } from '../index'
import { Avatar } from 'antd';

export default function NutritionHomePage() {

    const bottomValue = <>
        <div className='nutrition'>
            <div className='nutritions-section'>
                <a href='nutritions/calc'><Avatar src={calcLogo} className='nutrition-logo' /></a>
                <div className='divider' />
                <h2>מחשבון צריכת קלוריות </h2>
            </div>

            <div className='nutritions-section'>
                <Avatar src={muscleLogo} className='nutrition-logo' />
                <div className='divider' />
                <h2> התאמת תפריט תזונה לתוכנית האימון </h2>
            </div>
        </div>
    </>

    return (
        <BottomBasicPage title={'תזונה'} img={nutritionHomePage} bottomValue={bottomValue} />
    )
}



