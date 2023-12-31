import React, {useState} from "react";
import {Avatar, Menu, MenuProps} from "antd";
import {items} from "../config/menu";
import {Route, Routes, useNavigate} from "react-router-dom";
import {routers} from "../router";

const Index: React.FC = () => {

    const [current, setCurrent] = useState('nest');
    const navigate = useNavigate()

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        navigate(e.key)
        setCurrent(e.key);
    };

    return (
        <>
            <div
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: "flex-start"
                }}>
                <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}
                      style={{width: "100%"}}/>
                <div>
                    <Avatar
                        draggable={false}
                        size={"large"}
                        shape={"square"}
                        src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
                    />
                </div>
            </div>

            <div style={{margin: "2rem"}}>
                <Routes>
                    {routers.map(u => (
                        <Route path={u.path} element={<u.element/>} key={u.name}/>
                    ))}
                </Routes>
            </div>
        </>
    )
}

export default Index