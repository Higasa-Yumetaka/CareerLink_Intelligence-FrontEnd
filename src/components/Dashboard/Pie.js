import * as React from 'react';
import ReactECharts from 'echarts-for-react';


export default function Pie({industry, subIndustry}) {

    const data = {
        '互联网/IT': {
            '网络运营专员': [
                {value: 105, name: '专科'},
                {value: 51, name: '本科'},
                {value: 27, name: '无要求'},
                {value: 2, name: '中专'},
            ],
            'IT技术员': [
                {value: 105, name: '专科'},
                {value: 51, name: '本科'},
                {value: 27, name: '无要求'},
                {value: 2, name: '中专'},
            ],
            '网络运维': [
                {value: 907, name: '无要求'},
                {value: 856, name: '专科'},
                {value: 314, name: '中专'},
                {value: 36, name: '本科'},
                {value: 34, name: '中技'},
                {value: 21, name: '高中'},
            ],
            '移动应用开发': [
                {value: 909, name: '专科'},
                {value: 1878, name: '本科'},
                {value: 201, name: '其他'},
                {value: 27, name: '中专'},
            ],
            'Web开发': [
                {value: 933, name: '专科'},
                {value: 1947, name: '本科'},
                {value: 27, name: '其他'},
                {value: 188, name: '中专'},
                {value: 87,name:'硕士'}
            ],
            '人工智能': [
                {value: 91, name: '其他'},
                {value: 134, name: '博士'},
                {value: 1950, name: '硕士'},
                {value: 102, name: '专科'},
                {value: 120, name: '中专'},
                {value: 780, name: '本科'},
                {value: 124, name: '高中'},
            ],
        },
    };


    function getData() {
        console.log(industry, subIndustry)

        try {
            if (!industry || !subIndustry) {
                return [];
            }
            if (data[industry][subIndustry] !== undefined) {
                return data[industry][subIndustry];
            } else {
                return data['互联网/IT']['网络运营专员'];
            }
        } catch (e) {
            return data['互联网/IT']['网络运营专员'];
        }
    }

    let option = {
        title: {
            text: '学历组成',
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                return params.name + ' : ' + params.percent.toFixed(1) + '%';
            }
        },
        legend: {
            // Try 'horizontal'
            orient: 'horizontal',
            //right: '5%',
            top: 'bottom',
        },
        toolbox:{
            show:false,
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '60%'],
                avoidLabelOverlap: false,
                padAngle: 2,
                itemStyle: {
                    borderRadius: 10
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 20,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: true
                },
                data: getData()
            }
        ]
    };

    return (
        <React.Fragment>
            {/*<Title>学历组成</Title>*/}
            <ReactECharts option={option}
                          style={{height: '100%', width: '100%'}}/>

        </React.Fragment>
    );
}
