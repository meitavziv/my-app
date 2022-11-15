import { React } from 'react';
import { nutritionHomePage, calcLogo, muscleLogo } from '../../image/index';
import '../HomePage/HomePage.css';
import './BottomBasicPage.css'
import { BasicPage } from '../index'
import { Avatar } from 'antd';

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


// import { React } from 'react';
// import { nutritionHomePage, calcLogo, muscleLogo } from '../../image/index';
// import '../HomePage/HomePage.css';
// import '../NutritionPages/NutritionsBasicPage.css'
// import { BasicPage } from '../index'
// import { Avatar } from 'antd';

// export default function NutritionBasicPage(props) {

//     const comp = <>
//         <div className='nutrition-page'>
//             <h1 className='title'>תזונה</h1>
//             <div className='bottom-page-valus'>
//                 {props.bottomValue}
//             </div>
//         </div>
//     </>

//     return (
//         <BasicPage img={nutritionHomePage} comp={comp} />
//     )
// }
