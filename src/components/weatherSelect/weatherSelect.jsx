import {Select} from 'antd';
import React, {Component} from 'react';
import ajax from "../../api/ajax";


const {Option} = Select;


class WeatherSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: "晴",
            icon: "http://47.100.94.10/wp-content/uploads/2021/02/999.png",
            temp: 0
        }
    }

    reqWeather = async (value) => {
        const areaSelected = value || "黄岛"
        //运用的是和风天气API，可以自己申请一个
        const areaCodeAPI = `https://geoapi.qweather.com/v2/city/lookup?key=你的密钥`
        const weatherAPI = `https://devapi.qweather.com/v7/weather/now?key=你的密钥`
        const area = await ajax(areaCodeAPI, {location: areaSelected}, "GET")
        // console.log(area)
        let areaCode = area.location[0].id
        const weather = await ajax(weatherAPI, {location: areaCode}, "GET") || {}
        // console.log(weather)
        const weatherText = weather.now.text
        const weatherIcon = weather.now.icon
        const weatherTemp = weather.now.temp
        const iconUrl = `http://47.100.94.10/wp-content/uploads/2021/02/${weatherIcon}.png`
        this.setState({
            weather: weatherText,
            icon: iconUrl,
            temp: weatherTemp
        })
    }

    componentDidMount() {
        this.reqWeather()
    }

    render() {
        return (
            <>
                <Select
                    showSearch
                    defaultValue="黄岛"
                    style={{width: 70}}
                    bordered={false}
                    optionFilterProp="children"
                    onChange={this.reqWeather}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="天津">天津</Option>
                    <Option value="宝坻">宝坻</Option>
                    <Option value="青岛">青岛</Option>
                    <Option value="黄岛">黄岛</Option>
                </Select>
                <a href="https://www.qweather.com/" target="_blank">
                    <span id="weather">{this.state.weather} {this.state.temp}°C</span>
                    <img src={this.state.icon} alt="天气图标" width="7%"/>
                </a>
            </>

        );
    }
}

export default WeatherSelect;