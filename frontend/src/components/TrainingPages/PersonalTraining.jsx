import { React, useEffect, useState } from 'react';
import { muscleLogo, trainingHomePage, calcLogo } from '../../image';
import Avatar from 'antd/lib/avatar/avatar';
import { Table } from 'antd';
import { BottomBasicPage} from '../index';
import '../TrainingPages/schedule.css'
import { Schedule } from '../index';
import { trainingTable, personalTrainingTable} from '../../actions/index'


export default function PersonalTraining() {

    return (
        <Schedule type='personal'/>
    )
    // const [trainingData, setTrainingData] = useState();
   
    // useEffect(() => {
    //     trainingTable().then((e) => {setTrainingData(e)}) 
    //     console.log(trainingData)
    // }, [])

    // const bottomValue = <>
    //     <div className='schedule-page'>
    //         <div className='schedule-top-page'>
    //             <Avatar src={muscleLogo} className='title-logo' />
    //             <div className='divider'/>
    //             <h2 className='schedule-subtitle'>{'לוח אימונים'} </h2>
    //         </div>
    //         <table>
    //             <tr>
    //                 <th>שעה</th>
    //                 <th>ראשון</th>
    //                 <th>שני</th>
    //                 <th>שלישי</th>
    //                 <th>רביעי</th>
    //                 <th>חמישי</th>
    //                 <th>שישי</th>
    //                 <th>שבת</th>
    //             </tr>
                
    //             {trainingData ? Object.keys(trainingData).map((row) => { <>
    //                 {console.log(trainingData[row])}
    //                     <tr>
    //                         <td> {trainingData[row]['time']} </td>
    //                         <td> {trainingData[row]['sunday']} </td>
    //                         <td> {trainingData[row]['monday']} </td>
    //                         <td> {trainingData[row]['tuesday']} </td>
    //                         <td> {trainingData[row]['wednesday']} </td>
    //                         <td> {trainingData[row]['thursday']} </td>
    //                         <td> {trainingData[row]['friday']} </td>
    //                         <td> {trainingData[row]['saturday']} </td>
    //                     </tr> 
                    
    //             </>}) : <></>}
                
    //         </table>
    //     </div>
    // </>

    // return (<>
    //     <BottomBasicPage title={'אימונים'} img={trainingHomePage} bottomValue={bottomValue}/>
    // </>)

}


