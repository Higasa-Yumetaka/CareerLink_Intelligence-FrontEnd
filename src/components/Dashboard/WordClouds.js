import * as React from 'react';
import EChartsReact from "echarts-for-react";
import 'echarts-wordcloud';

export default function WordClouds({industry, subIndustry}) {

    const [color, setColor] = React.useState('rgba(120, 120, 120, ');


    const data = {
        '互联网/IT': {
            'Web开发': [
                {"name": "JavaScript", "value": 1512},
                {"name": "HTML5", "value": 7376},
                {"name": "CSS3", "value": 6234},
                {"name": "Vue.js", "value": 8672},
                {"name": "React.js", "value": 6931},
                {"name": "Angular.js", "value": 3753},
                {"name": "TypeScript", "value": 7421},
                {"name": "Webpack", "value": 2615},
                {"name": "前端框架", "value": 8913},
                {"name": "移动端适配", "value": 5142},
                {"name": "响应式设计", "value": 4239},
                {"name": "移动端UI框架", "value": 6829},
                {"name": "Flutter", "value": 3513},
                {"name": "React Native", "value": 8246},
                {"name": "跨平台开发", "value": 2456},
                {"name": "Progressive Web App", "value": 7753},
                {"name": "CSS预处理器", "value": 5345},
                {"name": "CSS-in-JS", "value": 4821},
                {"name": "状态管理", "value": 8321},
                {"name": "前端性能优化", "value": 6789},
                {"name": "组件化开发", "value": 5679},
                {"name": "移动设备特性", "value": 4567},
                {"name": "数据库", "value": 5210},
                {"name": "RESTful API", "value": 2101},
                {"name": "微服务架构", "value": 3519},
                {"name": "容器化技术", "value": 8934},
                {"name": "云计算", "value": 7213},
                {"name": "数据结构", "value": 2831},
                {"name": "算法", "value": 5719},
                {"name": "ORM框架", "value": 9103},
                {"name": "Web框架", "value": 6714},
                {"name": "版本控制系统", "value": 3824},
                {"name": "持续集成/持续部署(CI/CD)", "value": 152},
                {"name": "缓存技术", "value": 2413},
                {"name": "安全性", "value": 7128},
                {"name": "API Gateway", "value": 4627},
                {"name": "消息队列", "value": 8372},
                {"name": "服务治理", "value": 5123},
                {"name": "性能优化", "value": 9238},
                {"name": "数据加密", "value": 3912},
                {"name": "测试驱动开发(TDD)", "value": 3201},
                {"name": "设计模式", "value": 131},
                {"name": "事件驱动架构", "value": 213},
                {"name": "Serverless", "value": 2010}
            ],
            '人工智能': [
                {"name": "深度学习", "value": 9510},
                {"name": "神经网络", "value": 3567},
                {"name": "机器学习", "value": 7291},
                {"name": "强化学习", "value": 9183},
                {"name": "自然语言处理", "value": 5321},
                {"name": "计算机视觉", "value": 2845},
                {"name": "数据分析", "value": 7639},
                {"name": "数据挖掘", "value": 4217},
                {"name": "模式识别", "value": 8529},
                {"name": "算法优化", "value": 3147},
                {"name": "TensorFlow", "value": 9831},
                {"name": "PyTorch", "value": 4012},
                {"name": "Keras", "value": 6589},
                {"name": "Scikit-learn", "value": 2345},
                {"name": "Python", "value": 8901},
                {"name": "R语言", "value": 3219},
                {"name": "SQL", "value": 7431},
                {"name": "大数据", "value": 5678},
                {"name": "云计算", "value": 2145},
                {"name": "边缘计算", "value": 8741},
                {"name": "GPU加速", "value": 6321},
                {"name": "AutoML", "value": 9431},
                {"name": "AI伦理", "value": 4321}
            ],
            '软件测试/运维': [
                {"name": "持续集成", "value": 2010},
                {"name": "自动化测试", "value": 3567},
                {"name": "性能测试", "value": 7291},
                {"name": "安全性测试", "value": 9183},
                {"name": "压力测试", "value": 5321},
                {"name": "兼容性测试", "value": 2845},
                {"name": "接口测试", "value": 7639},
                {"name": "单元测试", "value": 4217},
                {"name": "端到端测试", "value": 8529},
                {"name": "敏捷开发", "value": 3147},
                {"name": "DevOps", "value": 9831},
                {"name": "CI/CD", "value": 4101},
                {"name": "Jenkins", "value": 6589},
                {"name": "Docker", "value": 2345},
                {"name": "Kubernetes", "value": 8901},
                {"name": "Ansible", "value": 3219},
                {"name": "Terraform", "value": 7431},
                {"name": "IaC", "value": 5678},
                {"name": "微服务", "value": 2145},
                {"name": "监控告警", "value": 8741},
                {"name": "日志分析", "value": 6321},
                {"name": "故障排查", "value": 9431},
                {"name": "云计算", "value": 4321}
            ]
        }
    }

    function getWordColor() {
        let randomColor = [
            Math.round(Math.random() * 120),
            Math.round(Math.random() * 120),
            Math.round(Math.random() * 120)];
        setColor('rgba( ' + randomColor.join(',') + ', ');
    }



    function getData() {
        try {
            if (!industry || !subIndustry) {
                return [];
            }
            if (data[industry][subIndustry] !== undefined) {
                return data[industry][subIndustry];
            } else {
                return data['互联网/IT']['Web开发'];
            }
        } catch (e) {
            return data['互联网/IT']['Web开发'];
        }
    }

    function randomNum(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let option = {
        title: {
            text: '热门技能词云',
            left: 'left',
            textStyle: {
                fontSize: 20, // 标题字体大小
                fontWeight: 'bold' // 标题字体加粗
            }
        },
        series: [
            {
                type: 'wordCloud',
                //maskImage: maskImage,
                sizeRange: [15, 80],
                rotationRange: [0, 0],
                rotationStep: 45,
                gridSize: 12,
                shape: 'pentagon',
                width: '100%',
                height: '100%',
                textStyle: {
                    color: function (params) {
                        // 根据词的数量设置颜色深度
                        const max = 180;
                        const min = 60;
                        let randomColor = [
                            Math.round(randomNum(min, max - 60)),
                            Math.round(randomNum(min, max)),
                            Math.round(randomNum(min, max + 60))];
                        let opacity = params.value / Math.max(...getData().map(item => item.value));
                        return 'rgba( ' + randomColor.join(',') + ',' + opacity + ')';
                    },
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                data: getData().slice(0, 13), // 取前10个词
                emphasis: {
                    focus: 'self', // 点击词云图中的词时触发
                    itemStyle: {
                        // 设置点击样式
                        opacity: 1
                    },
                },
                silent: false, // 为 true 时不响应鼠标事件
                onclick: function (params) {
                    // 获取用户点击的词
                    let clickedWord = params.name;
                    // 构建百度搜索的 URL
                    let searchUrl = `https://www.baidu.com/s?wd=${encodeURIComponent(clickedWord)}`;
                    // 在新窗口中打开百度搜索页面
                    window.open(searchUrl);
                }
            }
        ]
    };

    return (
        <React.Fragment>
            <EChartsReact option={option}
                          id="wordCloud"
                          onEvents={{
                                'click': function (params) {
                                    // 获取用户点击的词
                                    let clickedWord = params.data.name;
                                    // 构建百度搜索的 URL
                                    let searchUrl = `https://www.baidu.com/s?wd=${encodeURIComponent(clickedWord)}`;
                                    // 在新窗口中打开百度搜索页面
                                    window.open(searchUrl);
                                }

                          }}
            />
        </React.Fragment>
    );
}
