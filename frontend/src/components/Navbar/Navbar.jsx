import { React } from 'react';
import { Menu, Dropdown } from 'antd';
import { MenuOutlined } from '@ant-design/icons';


export default function Navbar(props) {
    const menu = (
        <Menu>
            <Menu.Item>
                <a href='/training'> אימונים </a>
            </Menu.Item>
            <Menu.Item>
                <a href='/nutritions'> תזונה </a>
            </Menu.Item>
            <Menu.Item>
                <a href='/tracking'> מעקב </a>
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menu}>
            <a className="navbar" onClick={e => e.preventDefault()}>
                <MenuOutlined />
            </a>
        </Dropdown>
    )
}
