import { React, useState } from 'react';
import { calcLogo, nutritionHomePage } from '../../image';
import Avatar from 'antd/lib/avatar/avatar';
import { Card, Cascader, InputNumber } from 'antd';
import { BottomBasicPage, Calculator } from '../index';
import '../NutritionPages/Nutritions.css'


export default function Calc() {
    const [genderField, setGenderField] = useState('');
    const [purposeField, setPurposeField] = useState('');
    const [intensiveField, setIntensiveField] = useState('');
    const [trainingField, setTrainingField] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');

    const gender = [
        { 
            value: 1,
            label: 'זכר'
        },
        {
            value: 2,
            label: 'נקבה'
        }
    ]
    const purpose = [
        {
            value: 1,
            label: 'חיטוב והרזיה'
        },
        {
            value: 2,
            label: 'חיטוב בלבד'

        }
    ]
    const intensive = [
        {
            value: 1,
            label: 'רוב היום בישיבה'
        },
        {
            value: 2,
            label: 'אקטיביות מועטה'
        },
        {
            value: 3,
            label: 'אקטיביות בינונית'
        },
        {
            value: 4,
            label: 'אקטיביות גבוהה'
        }
    ]
    const training = [
        {
            value: 2,
            label: 2
        },
        {
            value: 3,
            label: 3
        },
        {
            value: 4,
            label: 4
        },
        {
            value: 5,
            label: 5
        },
        {
            value: 6,
            label: 6
        }
    ]
    // const onChange = (value, key) => {
    //     console.log(key)
    //     console.log(field)
    //     setDetailsDict(detailsDict[key[0]['label']]= key[0]['value'])
    //     console.log(detailsDict)
    // }

    const bottomValue = <>
        <div className='calc'>
            <div className='calc-top-page'>
                <Avatar src={calcLogo} className='title-logo' />
                <div className='divider'/>
                <h2 className='calc-subtitle'>{'מחשבון צריכת קלוריות'} </h2>
            </div>
            <div className='calc-cards'>
                <Card className='user-details'>
                    <p>מגדר: <Cascader options={gender} onChange={(value) => setGenderField(value)} placeholder="מגדר"/></p>
                    <p>גיל: <InputNumber min={1} max={100} onChange={(value) => setAge(value)} /></p>
                    <p>גובה: <InputNumber min={100} max={200} onChange={(value) => setHeight(value)}/></p>
                    <p>משקל: <InputNumber min={30} max={200} onChange={(value) => setWeight(value)}/></p>
                </Card>
                <Card className='train-details'>
                    <p>מטרה: <Cascader options={purpose} onChange={(value) => setPurposeField(value)} placeholder="מטרה" /></p>
                    <p>רמת פעילות יומית: <Cascader options={intensive} onChange={(value) => setIntensiveField(value)} placeholder="רמת פעילות יומית" /></p>
                    <p>מספר אימונים בשבוע: <Cascader options={training} onChange={(value) => setTrainingField(value)} placeholder="כמות אימונים בשבוע" /></p>
                </Card>
                <Calculator/>
            </div>
        </div>
    </>

    const detailsDict = {'age': age, 'weight': weight, 'height': height, 'gender': genderField, 'purpose': purposeField, 'intensive': intensiveField, 'training': trainingField}

    return (<>
        <BottomBasicPage title={'תזונה'} img={nutritionHomePage} bottomValue={bottomValue}/>
    </>)
}