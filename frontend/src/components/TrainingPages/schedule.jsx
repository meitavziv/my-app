import { React, useEffect, useState } from 'react';
import { muscleLogo, trainingHomePage, calcLogo } from '../../image';
import Avatar from 'antd/lib/avatar/avatar';
import { Button, Table } from 'antd';
import { BottomBasicPage} from '../index';
import '../TrainingPages/schedule.css'
import { trainingTable, getPersonalTrainingTable, postPersonalTrainingTable} from '../../actions/index'



export default function Schedule(props) {
    
    const [trainingData, setTrainingData] = useState();
    const [selectedTraining, setSelectedTraining] = useState({'user': String(localStorage.getItem('user'))});
    const [isButtonsAvailable, setIsButtonsAvailable] = useState(true);
    const [currentPlace, setCurrentPlace] = useState(0);

    useEffect(() => {
        props.type === 'personal' ? 
            getPersonalTrainingTable().then((e) => {setTrainingData(e)}) 
            : trainingTable().then((e) => {setTrainingData(e)}) 
        console.log(trainingData)
    }, [])

    const addLesson = (lesson, day) => {
        setSelectedTraining(selectedTraining, selectedTraining[currentPlace] = {'day': day, 'lesson': lesson})
        setCurrentPlace(currentPlace + 1)
        
    }

    const sendDetails = () => {
        postPersonalTrainingTable(selectedTraining)
        setIsButtonsAvailable(true)
        setSelectedTraining({'user': String(localStorage.getItem('user'))})
    }

    const columns = [
        {
            title: 'שעה',
            dataIndex: 'time',
            key: 'time'
        },
        {
          title: 'ראשון',
          dataIndex: 'sunday',
          key: 'sunday',
          render: (lesson) => <Button className='lesson' disabled={isButtonsAvailable} onClick={() => addLesson(lesson, 'sunday')}> {lesson} </Button>
        },
        {
          title: 'שני',
          dataIndex: 'monday',
          key: 'monday',
          render: (lesson) => <Button className='lesson' disabled={isButtonsAvailable} onClick={() => addLesson(lesson, 'monday')}> {lesson} </Button>
        },
        {
          title: 'שלישי',
          dataIndex: 'tuesday',
          key: 'tuesday',
          render: (lesson) => <Button className='lesson' disabled={isButtonsAvailable} onClick={() => addLesson(lesson, 'tuesday')}> {lesson} </Button>
        },
        {
            title: 'רביעי',
            dataIndex: 'wednesday',
            key: 'wednesday',
            render: (lesson) => <Button className='lesson' disabled={isButtonsAvailable} onClick={() => addLesson(lesson, 'wednesday')}> {lesson} </Button>
        },
        {
            title: 'חמישי',
            dataIndex: 'thursday',
            key: 'thursday',
            render: (lesson) => <Button className='lesson' disabled={isButtonsAvailable} onClick={() => addLesson(lesson, 'thursday')}> {lesson} </Button>
        },
        {
            title: 'שישי',
            dataIndex: 'friday',
            key: 'friday',
            render: (lesson) => <Button className='lesson' disabled={isButtonsAvailable} onClick={() => addLesson(lesson, 'friday')}> {lesson} </Button>
        },
        {
            title: 'שבת',
            dataIndex: 'saturday',
            key: 'saturday',
            render: (lesson) => <Button className='lesson' disabled={isButtonsAvailable} onClick={() => addLesson(lesson, 'saturday')}> {lesson} </Button>
        }

    ]

    const data = trainingData

    const bottomValue = <>
        <div className='schedule-page'>
            <div className='schedule-top-page'>
                <Avatar src={props.type === 'personal' ? calcLogo : muscleLogo} className='title-logo' />
                <div className='divider'/>
                <h2 className='schedule-subtitle'>{props.type === 'personal' ? 'לוח אימונים אישי' : 'לוח אימונים'} </h2>
            </div>
            <div className='schedule-bottom-page'>
                <Table className='schedule-table' columns={columns} dataSource={data} pagination={null}/>
                { props.type === 'general' ?
                    <div className='bottom-button'>
                        <Button className='select-lesson-button' onClick={() => {setIsButtonsAvailable(false)}}> לבחירת שיעורים אישיים </Button>
                        <Button className='done-select-lesson-button' onClick={sendDetails}> הוסף </Button>
                    </div> : ''
                }
            </div>
        </div>
    </>

    return (<>
        <BottomBasicPage title={'אימונים'} img={trainingHomePage} bottomValue={bottomValue}/>
    </>)
}
