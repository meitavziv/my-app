import { React } from 'react';
import { homePagePic, training, trainingLogo , nutrition, nutritionLogo, tracking, trackingLogo} from '../../image/index';
import { Section } from '../../components/index';
import '../HomePage/HomePage.css';
import {BasicPage} from '../../components/index'


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
