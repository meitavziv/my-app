import { React } from 'react';
import { Card, Avatar } from 'antd';
import '../Section/Section.css'

export default function Section(props) {

    return (
        <Card title={props.title} extra={<Avatar src={props.logo} />} className='section-data'>
            <div className='section-pic'>
                <img
                    src={props.pic}
                    className='section-logo'
                />
            </div>
        </Card>
    )
}