import React, {Component} from 'react';
import './classTable.less'

const n = (<td></td>)
const jisuan = (<td className="jisuan">计算方法<br/>西环207</td>)
// const english = (<td className="english">大学英语<br/><small>西环207</small></td>)
const jizu = (<td className="zucheng">计算机<br/>组成原理<br/>南教117</td>)
const mobile = (<td className="mobile">移动应用<br/>开发技术<br/>文理楼110</td>)
// const maogai = (<td className="maogai">毛泽东思想和<br/>中国特色主义<br/>体系概论概论<small>南教213</small>    </td>)
const web = (<td className="react">Web应用开发<br/>西环102</td>)
const xingfa = (<td className="xingfa">刑法概论<br/>东环302</td>)

class File extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered table-responsive table-hover table-striped">
                    <thead>
                    <tr>
                        <th>第1周</th>
                        <th>星期六</th>
                        <th>星期日</th>
                        <th>星期一</th>
                        <th>星期二</th>
                        <th>星期三</th>
                        <th>星期四</th>
                        <th>星期五</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="tdTitle">第一节(8:00-9:35)</td>
                        {n}{n} {jisuan}{n}{jisuan}{n}{n}
                    </tr>
                    <tr>
                        <td className="tdTitle">第二节(9:55-11:30)</td>
                        {n}{n} {jizu}{mobile}{jizu}{mobile}{n}
                    </tr>
                    <tr>
                        <td className="tdTitle">第三节(14:00-15:35)</td>
                        {n}{n}{n}
                        <td className="PE">体育</td>
                        {n}{n}{web}
                    </tr>
                    <tr>
                        <td className="tdTitle">第四节(15:55-17:30)</td>
                        {n}{n} {n}{n}{web}{n}{n}
                    </tr>
                    <tr>
                        <td className="tdTitle">第五节(19:00-20:30)</td>
                        {n}{n} {xingfa}{n}{xingfa}{n}{n}
                    </tr>
                    <tr>
                        <td className="tdTitle">第六节(20:55-21:30)</td>
                        {n}{n} {n}{n}{n}{n}{n}
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default File;