import { React } from 'react';
import { homePagePic, training, trainingLogo , nutrition, nutritionLogo, tracking, trackingLogo} from '../../image/index';
import { Section } from '../index';
import '../HomePage/HomePage.css';
import {BasicPage} from '../index'


export default function HomePage() {

    const comp = <>
    <div className='home'>
        <a href='/training' ><Section title='Training' logo={trainingLogo} pic={training} /></a>
        <a href='/nutritions'><Section title='Nutrition' logo={nutritionLogo} pic={nutrition} /></a>
        <Section title='Tracking' logo={trackingLogo} pic={tracking} />
    </div>
</>

    return (
        <BasicPage img={homePagePic} comp={comp} />
    )
}

// export default function HomePage(props) {

//     return (
//         <>
//             <div className='top-page'>
//                 <img src={homePagePic} alt='pic' className='homePagePic' />
//             </div>
//             <div className='bottom-page'>

//                 <Section title='Training' logo={trainingLogo} pic={training} />
//                 <Section title='Nurition' logo={nuritionLogo} pic={nurition} />
//                 <Section title='Tracking' logo={trackingLogo} pic={tracking} />
//             </div>
//         </>
//     )
// }