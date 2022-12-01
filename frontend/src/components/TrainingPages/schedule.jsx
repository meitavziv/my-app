import { React, useEffect, useState } from 'react';
import { muscleLogo, trainingHomePage } from '../../image';
import Avatar from 'antd/lib/avatar/avatar';
import { Table } from 'antd';
import { BottomBasicPage} from '../index';
import '../TrainingPages/schedule.css'
import { trainingTable } from '../../actions/trainingTable'



export default function Schedule() {
    
    const [trainingData, setTrainingData] = useState();
    // const columns = ["שעה", "ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי"]

    // const days = {'ראשון':'sunday', 'שני': 'monday', 'שלישי':'tuesday', 'רביעי':'wednesday', 'חמישי':'thursday', 'שישי':'friday'}
    useEffect(() => {
        trainingTable().then((e) => {setTrainingData(e)})
        console.log(trainingData)
    }, [])

    

    const columns = [
        {
            title: 'שעה',
            dataIndex: 'time',
            key: 'time'
        },
        {
          title: 'ראשון',
          dataIndex: 'sunday',
          key: 'sunday'
        },
        {
          title: 'שני',
          dataIndex: 'monday',
          key: 'monday',
        },
        {
          title: 'שלישי',
          dataIndex: 'tuesday',
          key: 'tuesday',
        },
        {
            title: 'רביעי',
            dataIndex: 'wednesday',
            key: 'wednesday',
        },
        {
            title: 'חמישי',
            dataIndex: 'thursday',
            key: 'thursday',
        },
        {
            title: 'שישי',
            dataIndex: 'friday',
            key: 'friday',
        },
        {
            title: 'שבת',
            dataIndex: 'saturday',
            key: 'saturday',
        }

    ]

    const data = trainingData

    const bottomValue = <>
        <div className='schedule-page'>
            <div className='schedule-top-page'>
                <Avatar src={muscleLogo} className='title-logo' />
                <div className='divider'/>
                <h2 className='schedule-subtitle'>{'לוח אימונים'} </h2>
            </div>
            <Table className='schedule-table' columns={columns} dataSource={data} pagination={null}/>;
        </div>
    </>

    return (<>
        <BottomBasicPage title={'אימונים'} img={trainingHomePage} bottomValue={bottomValue}/>
    </>)
}
