import React from 'react';
import EChartsReact from "echarts-for-react";

export default function RadarS() {

    let option = {
        title: {
            text: '能力雷达图'
        },
        radar: {
            // shape: 'circle',
            indicator: [
                { name: '高校', max: 100},
                { name: '专业', max: 100 },
                { name: '学历', max: 100 },
                { name: '工作地点', max: 100 },
                { name: '核心技能', max: 100 },
            ]
        },
        series: [
            {
                name: 'Budget vs spending',
                type: 'radar',
                data: [
                    {
                        value: [70,90,70,80,95],
                        name: 'Allocated Budget'
                    }
                ]
            }
        ]
    };

    return (
        <React.Fragment>
            <EChartsReact option={option} />
        </React.Fragment>
    );
}