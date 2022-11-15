import { React, useState } from 'react';
import { muscleLogo, trainingHomePage } from '../../image';
import Avatar from 'antd/lib/avatar/avatar';
import { Table } from 'antd';
import { BottomBasicPage} from '../index';
import '../TrainingPages/Training.css'


export default function Schedule() {

    const columns = [
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

    const data = [
        {
            
        }
    ]

    const bottomValue = <>
        <div className='schedule-page'>
            <div className='schedule-top-page'>
                <Avatar src={muscleLogo} className='title-logo' />
                <div className='divider'/>
                <h2 className='schedule-subtitle'>{'לוח אימונים'} </h2>
            </div>
            <div className='schedule-table'>
                <Table columns={columns} dataSource={data} />;
            </div>
        </div>
    </>

    return (<>
        <BottomBasicPage title={'אימונים'} img={trainingHomePage} bottomValue={bottomValue}/>
    </>)
}