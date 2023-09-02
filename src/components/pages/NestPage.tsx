import React, {useState} from "react";
import NestCmpt from "../units/NestCmpt.tsx";
import {CardInfo} from "../../domain";
import {FloatButton, List, Segmented, Space} from "antd";
import {FireOutlined} from '@ant-design/icons';

const NestPage: React.FC = () => {

    const [data] = useState<CardInfo[]>([
        new CardInfo("每日新闻", "内容", "YIWYN", false),
        new CardInfo("每日新闻", "内容", "YIWYN", true),
        new CardInfo("每日新闻", "内容", "YIWYN", true),
        new CardInfo("每日新闻", "内容", "YIWYN", false),
        new CardInfo("每日新闻", "内容", "YIWYN", true),
        new CardInfo("每日新闻", "内容", "YIWYN", true),
    ])

    const [open, setOpen] = useState(true);

    const onClickRecord = () => {
        setOpen(!open);
    };

    return (
        <>
            <Space direction="vertical">
                <Segmented options={['OPEN', 'CLOSE', 'LOCK', 'UNLOCK']}/>
                <Segmented options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']}/>
            </Space>

            <Space>
                <List
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 2,
                        md: 4,
                        lg: 4,
                        xl: 5,
                        xxl: 5,
                    }}
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item>
                            <NestCmpt cardInfo={item}/>
                        </List.Item>
                    )}
                />
            </Space>


            <FloatButton.Group
                open={open}
                onClick={onClickRecord}
                trigger="click"
                style={{right: 24}}
                icon={<FireOutlined/>}
            >
                {/*<FloatButton description={"创建了一个猫窝 去看看吧"}/>*/}
                {/*<FloatButton icon={<CommentOutlined/>}/>*/}
                <div style={{position: "absolute", width: "300px", bottom: "0", right: "0"}}>创建了一个猫窝 ， 去看看吧
                    ～！
                </div>
            </FloatButton.Group>
        </>
    )
}

export default NestPage