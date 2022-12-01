import { React } from 'react';
import { Menu, Dropdown } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import '../Navbar/Navbar.css'


export default function Navbar(props) {
    const menu = (
        <Menu 
            items=
            {[
                {
                    key: '0',
                    label: <a href='/training'> אימונים </a>
                },
                {
                    key: '1',
                    label: <a href='/nutritions'> תזונה </a>
                },
                {
                    key: '2',
                    label: <a href='/tracking'> מעקב </a>
                },
            ]} />
    );

    return (
        <Dropdown className="dropdown-menu" overlay={menu} placement='bottom'>
            <a className="navbar" onClick={e => e.preventDefault()}>
                <MenuOutlined />
            </a>
        </Dropdown>
    )
}

{/* <Menu>
<Menu.Item>
    <a href='/training'> אימונים </a>
</Menu.Item>
<Menu.Item>
    <a href='/nutritions'> תזונה </a>
</Menu.Item>
<Menu.Item>
    <a href='/tracking'> מעקב </a>
</Menu.Item>
</Menu> */}
