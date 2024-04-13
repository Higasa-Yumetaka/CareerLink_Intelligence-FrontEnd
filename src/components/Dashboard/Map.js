// src/views/home/chart/map.tsx

import React, {useEffect, useState} from "react";
import {ChinaMap} from "./ChinaMap";
import ReactECharts from "echarts-for-react";
import {ChinaMapData} from "./ChinaMapData";
import {registerMap} from "echarts";



const data = {
    '互联网/IT': {
        '移动应用开发': [
            { name: '北京市', value: 79.03 },
            { name: '天津市', value: 55.78 },
            { name: '河北省', value: 56.73 },
            { name: '山西省', value:  50.23},
            { name: '内蒙古自治区', value: 38.98 },
            { name: '辽宁省', value: 62.66 },
            { name: '吉林省', value: 46.23 },
            { name: '黑龙江省', value: 44.98 },
            { name: '上海市', value: 75.46 },
            { name: '江苏省', value: 73.3 },
            { name: '浙江省', value: 72.94 },
            { name: '安徽省', value: 61.79 },
            { name: '福建省', value: 64.71 },
            { name: '江西省', value: 52.73 },
            { name: '山东省', value: 64.06 },
            { name: '河南省', value: 62.52 },
            { name: '湖北省', value: 69.93 },
            { name: '湖南省', value: 64.3 },
            { name: '广东省', value: 83.33 },
            { name: '广西壮族自治区', value: 49.99 },
            { name: '海南省', value: 41.45 },
            { name: '重庆市', value: 61.03 },
            { name: '四川省', value: 70.76 },
            { name: '贵州省', value: 47.04 },
            { name: '云南省', value: 45.91 },
            { name: '西藏自治区', value: 17.52 },
            { name: '陕西省', value: 67.83 },
            { name: '甘肃省', value: 36.55 },
            { name: '青海省', value: 24.96 },
            { name: '宁夏回族自治区', value: 34.66 },
            { name: '新疆维吾尔自治区', value: 38.98 },
            { name: '台湾省', value: 0 }
        ],
        'Web开发': [
            { name: '北京市', value: 79.21 },
            { name: '天津市', value: 59.43 },
            { name: '河北省', value: 61.93 },
            { name: '山西省', value:  57.16 },
            { name: '内蒙古自治区', value: 47.75 },
            { name: '辽宁省', value: 62.18 },
            { name: '吉林省', value: 49.42 },
            { name: '黑龙江省', value: 49.78 },
            { name: '上海市', value: 75.79 },
            { name: '江苏省', value: 74.59 },
            { name: '浙江省', value: 76.44 },
            { name: '安徽省', value: 64.75 },
            { name: '福建省', value: 65.81 },
            { name: '江西省', value: 57.53 },
            { name: '山东省', value: 67.85 },
            { name: '河南省', value: 67.82 },
            { name: '湖北省', value: 70.87 },
            { name: '湖南省', value: 66.71 },
            { name: '广东省', value: 82.12 },
            { name: '广西壮族自治区', value: 54.3 },
            { name: '海南省', value: 47.62 },
            { name: '重庆市', value: 64.39 },
            { name: '四川省', value: 73.36 },
            { name: '贵州省', value: 53.06 },
            { name: '云南省', value: 52.65 },
            { name: '西藏自治区', value: 22.22 },
            { name: '陕西省', value: 69.06 },
            { name: '甘肃省', value: 45.87 },
            { name: '青海省', value: 29.69 },
            { name: '宁夏回族自治区', value: 42.34 },
            { name: '新疆维吾尔自治区', value: 45.3 },
            { name: '台湾省', value: 1.82 }
        ],
        '人工智能':[
            { name: '北京市', value: 82.38 },
            { name: '天津市', value: 53.34 },
            { name: '河北省', value: 45.49 },
            { name: '山西省', value:  40.12 },
            { name: '内蒙古自治区', value: 26.55 },
            { name: '辽宁省', value: 53.4 },
            { name: '吉林省', value: 33.45 },
            { name: '黑龙江省', value: 35.52 },
            { name: '上海市', value: 81.16 },
            { name: '江苏省', value: 73.44 },
            { name: '浙江省', value: 74.64 },
            { name: '安徽省', value: 58.04 },
            { name: '福建省', value: 55.15 },
            { name: '江西省', value: 44.6 },
            { name: '山东省', value: 60.94 },
            { name: '河南省', value: 52.86 },
            { name: '湖北省', value: 65.18 },
            { name: '湖南省', value: 58.55 },
            { name: '广东省', value: 81.13 },
            { name: '广西壮族自治区', value: 36.06 },
            { name: '海南省', value: 29.28 },
            { name: '重庆市', value: 64.39 },
            { name: '四川省', value: 68.42 },
            { name: '贵州省', value: 37.08 },
            { name: '云南省', value: 36.24 },
            { name: '西藏自治区', value: 1.43 },
            { name: '陕西省', value: 63.29 },
            { name: '甘肃省', value: 26.99 },
            { name: '青海省', value: 1.43 },
            { name: '宁夏回族自治区', value: 22.15 },
            { name: '新疆维吾尔自治区', value: 19.86 },
            { name: '台湾省', value: 0 }
        ],
    }
}

export default function Map({industry, subIndustry}){

    let [min, setMin] = useState(0);
    let [max, setMax] = useState(100);

    registerMap("china", ChinaMapData);

    function getData() {
        let mapData = [];
        try {
            if (data[industry][subIndustry] !== undefined) {
                mapData = data[industry][subIndustry];
            }
        } catch (e) {
        }
        return mapData;
    }

    let option = {
        title: {
            text: '职位分布地图',
            subtext: '地图数据来自高德地图',
            sublink: 'https://datav.aliyun.com/portal/school/atlas/area_selector',
            left: 'left'
        },
        tooltip: {
            trigger: 'item',
            showDelay: 0,
            transitionDuration: 0.2,
            formatter: function (params) {
                return params.name + ' : ' + params.value;
            }
        },
        visualMap: {
            left: 'right',
            min: min,
            max: max,
            inRange: {
                color: [
                    '#313695',
                    '#4575b4',
                    '#74add1',
                    '#abd9e9',
                    '#e0f3f8',
                    '#ffffbf',
                    '#fee090',
                    '#fdae61',
                    '#f46d43',
                    '#d73027',
                    '#a50026'
                ]
            },
            text: ['High', 'Low'],
            calculable: true
        },
        toolbox: {
            show: false,
            //orient: 'vertical',
            left: 'left',
            top: 'top',
            feature: {
                dataView: { readOnly: false },
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: '职位分布',
                type: 'map',
                roam: true,
                map: 'china',
                emphasis: {
                    label: {
                        show: true
                    }
                },
                data: getData()
            }
        ]
    };
    return (
        <React.Fragment>
            <ReactECharts option={option} style={{height: '80vh'}}/>
        </React.Fragment>
    );
};
