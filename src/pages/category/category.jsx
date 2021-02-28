import React, {Component} from 'react';
import {
    Card,
    Button,
    Steps
} from 'antd'
import {PlusCircleOutlined} from '@ant-design/icons'
import './category.less'

class Category extends Component {
    render() {
        //Card的左侧
        const title = "学习计划"
        //Card的右侧
        const extra = (
            <Button type="primary" icon={<PlusCircleOutlined/>}>
                添加
            </Button>
        )
        const {Step} = Steps;
        return (
            <Card title={title} extra={extra} style={{width: "100%", padding: 0}}>
                <div className="steps">
                    <div className="StepsTitle"><a href="https://react.docschina.org/docs/getting-started.html"
                                                   target="_blank">React文档精读</a></div>
                    <Steps direction="vertical" size="small" current={2}>
                        <Step title="核心概念" description=""/>
                        <Step title="高级指引" description=""/>
                        <Step title="HOOK" description=""/>
                        <Step title="测试" description=""/>
                        <Step title="源码" description=""/>
                    </Steps>
                </div>
                <div className="steps">
                    <div className="StepsTitle">
                        <a href="http://docscn.studygolang.com/doc/tutorial/getting-started" target="_blank">
                            Go语言</a></div>
                    <Steps direction="vertical" size="small" current={0}>
                        <Step title="基本语法" description=""/>
                        <Step title="GIN框架" description=""/>
                        <Step title="Waiting" description=""/>
                    </Steps>
                </div>
                <div className="steps">
                    <div className="StepsTitle">
                        数据结构与算法
                    </div>
                    <Steps direction="vertical" size="small" current={0}>
                        <Step title="线性表" description=""/>
                        <Step title="栈" description=""/>
                        <Step title="队列" description=""/>
                        <Step title="数组、串、广义表" description=""/>
                        <Step title="树" description=""/>
                        <Step title="堆" description=""/>
                        <Step title="集合与字典" description=""/>
                        <Step title="搜索结构" description=""/>
                        <Step title="图" description=""/>
                        <Step title="排序" description=""/>

                    </Steps>
                </div>
                <div className="steps">
                    <div className="StepsTitle">
                        {/*<a href="#" target="_blank">*/}
                        Linux
                        {/*</a>*/}
                    </div>
                    <Steps direction="vertical" size="small" current={0}>
                        <Step title="磁盘分区" description=""/>
                        <Step title="文件管理" description=""/>
                        <Step title="权限管理" description=""/>
                        <Step title="Vim 与 Bush" description=""/>
                    </Steps>
                </div>

            </Card>
        );
    }
}

export default Category;