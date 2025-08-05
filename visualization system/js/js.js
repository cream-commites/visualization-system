$(window).load(function () {
    $(".loading").fadeOut()
})
$(function () {
    echarts_1();
    echarts_2();
    echarts_3();
    echarts_4();
    echarts_5();
    zb1();
    zb2();
    zb3();
    zb4();
    zb5();
    zb6();

    function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));
        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            legend: {
                right: 0,
                top: 30,
                height: 160,
                itemWidth: 10,
                itemHeight: 10,
                itemGap: 10,
                textStyle: {
                    color: 'rgba(255,255,255,.6)',
                    fontSize: 12
                },
                orient: 'vertical',
                data: ['T1', 'GEN', 'LNG', 'BLG', 'TES']
            },
            calculable: true,
            series: [{
                name: ' ',
                color: ['#62c98d', '#2f89cf', '#4cb9cf', '#53b666', '#62c98d', '#205acf', '#c9c862', '#c98b62', '#c962b9', '#7562c9', '#c96262', '#c25775', '#00b7be'],
                type: 'pie',
                radius: [30, 70],
                center: ['35%', '50%'],
                roseType: 'radius',
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },

                lableLine: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },

                data: [{
                    value: 25,
                    name: 'T1'
                },
                {
                    value: 20,
                    name: 'GEN'
                },
                {
                    value: 15,
                    name: 'LNG'
                },
                {
                    value: 10,
                    name: 'BLG'
                },
                {
                    value: 5,
                    name: 'TES'
                },

                ]
            },]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));

        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            legend: {

                top: '15%',
                data: ['T1\Keria', 'BLG\Knight', 'T1\Faker', 'GEN/Chovy', 'BLG\Bin'],
                icon: 'circle',
                textStyle: {
                    color: 'rgba(255,255,255,.6)',
                }
            },
            calculable: true,
            series: [{
                name: '',
                color: ['#62c98d', '#2f89cf', '#4cb9cf', '#53b666', '#62c98d', '#205acf', '#c9c862', '#c98b62', '#c962b9', '#c96262'],
                type: 'pie',
                //起始角度，支持范围[0, 360]
                startAngle: 0,
                //饼图的半径，数组的第一项是内半径，第二项是外半径
                radius: [51, 100],
                //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度
                center: ['50%', '45%'],

                //是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
                // 'radius' 面积展现数据的百分比，半径展现数据的大小。
                //  'area' 所有扇区面积相同，仅通过半径展现数据大小
                roseType: 'area',
                //是否启用防止标签重叠策略，默认开启，圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        //  formatter: '{c}辆'
                    },
                    emphasis: {
                        show: true
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length2: 1,
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: [{
                    value: 5,
                    name: 'T1\Keria',
                },
                {
                    value: 4,
                    name: 'BLG\Knight',
                },
                {
                    value: 4,
                    name: 'T1\Faker',
                },
                {
                    value: 3,
                    name: 'GEN/Chovy',
                },
                {
                    value: 3,
                    name: 'BLG\Bin',
                },



                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },


                ]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart3'));

        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            },
            legend: {

                //icon: 'vertical',
                data: ['总击杀', '总助攻', '总死亡'],
                //align: 'center',
                // right: '35%',
                top: '0',
                textStyle: {
                    color: "#fff"
                },
                // itemWidth: 15,
                // itemHeight: 15,
                itemGap: 20,
            },
            grid: {
                left: '0',
                right: '20',
                top: '10',
                bottom: '20',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba(255,255,255,1)',
                        fontSize: 11
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                },
                data: ['\nLNG\nScout', '\nGEN\Peyz', '\nGEN\nChovy', '\nLNG\nGALA', '\nPSG\nBetty', '\nT1\nGumayusi', '\nT1\nOner', '\nFNC\nNoah',
                    '\nBLG\nKnight', '\nT1\nKeria', '\nFLY\nQuad', '\nWBG\nLight'
                ]
            }, {




            }],
            yAxis: [{
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba(255,255,255,.6)'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                }
            }],
            series: [{
                name: '总击杀',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(24, 163, 64, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(24, 163, 64, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#cdba00',
                        borderColor: 'rgba(137,189,2,0.27)',
                        borderWidth: 12
                    }
                },
                data: [34, 58, 59, 40, 60, 73, 45, 27, 93, 8, 56, 75]
            }, {
                name: '总助攻',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(39, 122,206, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(39, 122,206, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#277ace',
                        borderColor: 'rgba(0,136,212,0.2)',
                        borderWidth: 12
                    }
                },
                data: [59, 87, 72, 54, 70, 88, 127, 26, 133, 167, 75, 85]
            }, {
                name: '总死亡',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(39, 122,206, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(39, 122,206, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#67E0E3',
                        borderColor: 'rgba(10,148,236,0.5)',
                        borderWidth: 12
                    }
                },
                data: [10, 17, 18, 13, 20, 25, 29, 9, 40, 33, 25, 31]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));
        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            },
            "legend": {

                "data": [{
                    "name": "Victory"
                },
                {
                    "name": "Defeat"
                },
                {
                    "name": "胜率"
                }
                ],
                "top": "0%",
                "textStyle": {
                    "color": "rgba(255,255,255,1)", //图例文字
                    "fontSize": "16"
                }
            },

            "xAxis": [{
                "type": "category",

                data: ['T1', 'GEN', 'LNG', 'BLG', 'TES', 'HLE', 'WBG', 'FLY', 'GAM', 'PSG' ],
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "rgb(255,255,255)",
                        fontSize: '16',
                    },
                },

            },],
            "yAxis": [{
                "type": "value",
                "name": "次数",
                "min": 0,
                "interval": 10,
                "axisLabel": {
                    "show": true,

                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,1)'
                    }
                }, //左线色
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,0.5)"
                    }
                }, //x轴线
            },
            {
                "type": "value",
                "name": "胜率",
                "show": true,
                "axisLabel": {
                    "show": true,

                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,1 )'
                    }
                }, //右线色
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,0.2)"
                    }
                }, //x轴线
            },
            ],
            "grid": {
                "top": "10%",
                "right": "30",
                "bottom": "30",
                "left": "30",
            },
            "series": [{
                "name": "Victory",

                "type": "bar",
                "data": [6, 4, 3, 5, 3, 3, 4, 3, 3, 3,  ],
                "barWidth": "auto",
                "itemStyle": {
                    "normal": {
                        "color": {
                            "type": "linear",
                            "x": 0,
                            "y": 0,
                            "x2": 0,
                            "y2": 1,
                            "colorStops": [{
                                "offset": 0,
                                "color": "#67E0E3"
                            },

                            {
                                "offset": 1,
                                "color": "#67E0E3"
                            }
                            ],
                            "globalCoord": false
                        }
                    }
                }
            },
            {
                "name": "Defeat",
                "type": "bar",
                "data": [
                    1, 1, 1, 3, 2, 2, 3, 3, 3, 4, 
                ],
                "barWidth": "auto",

                "itemStyle": {
                    "normal": {
                        "color": {
                            "type": "linear",
                            "x": 0,
                            "y": 0,
                            "x2": 0,
                            "y2": 1,
                            "colorStops": [{
                                "offset": 0,
                                "color": "#FFDB5C"
                            },
                            {
                                "offset": 1,
                                "color": "#FFDB5C"
                            }
                            ],
                            "globalCoord": false
                        }
                    }
                },
                "barGap": "0"
            },
            {
                "name": "胜率",
                "type": "line",
                "yAxisIndex": 1,

                "data": [86, 80, 75, 63, 60, 60, 56, 50, 50, 43, ],
                lineStyle: {
                    normal: {
                        width: 2
                    },
                },
                "itemStyle": {
                    "normal": {
                        "color": "#48f593",

                    }
                },
                "smooth": true
            }
            ]
        };


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['出场次数', '总击杀', '总助攻', '总死亡',],
                textStyle: {
                    color: 'skyblue'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,1)'
                    }
                }, //左线色
            },
            yAxis: {
                type: 'category',
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,1)'
                    }
                }, //左线色
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }, //x轴线
                data: ['LNGScout', 'LNGPeyz', 'GENChovy', 'LNGGALA', 'PSGBetty', 'T1Gumayusi', 'T1Oner', 'FNCNoah', 'BLGKnight', 'T1Keria']
            },
            series: [{
                name: '出场次数',
                type: 'bar',
                stack: '总量',
                itemStyle: {
                    color: '#37A2DA'
                },
                label: {
                    show: false,
                    position: 'insideRight'
                },
                data: [4, 5, 5, 4, 7, 7, 7, 4, 8, 7]
            },
            {
                name: '总击杀',
                type: 'bar',
                stack: '总量',
                itemStyle: {
                    color: '#67E0E3'
                },
                label: {
                    show: false,
                    position: 'insideRight'
                },
                data: [34, 58, 59, 40, 60, 73, 45, 27, 83, 8]
            },
            {
                name: '总助攻',
                type: 'bar',
                stack: '总量',
                itemStyle: {
                    color: '#FFDB5C'
                },
                label: {
                    show: false,
                    position: 'insideRight'
                },
                data: [59, 87, 72, 54, 70, 88, 127, 26, 133, 167]
            },
            {
                name: '总死亡',
                type: 'bar',
                stack: '总量',
                itemStyle: {
                    color: '#FF9F7F'
                },
                label: {
                    show: false,
                    position: 'insideRight'
                },
                data: [10, 17, 18, 13, 20, 25, 29, 9, 40, 33]
            },

            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function zb1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb1'));
        var v2 = 6 //胜利
        var v1 = 1 //战败
        var v3 = v1 + v2 //总消费 
        option = {
            tooltip: {
                trigger: 'item',
            },
            series: [{

                type: 'pie',
                radius: ['60%', '70%'],
                color: '#37A2DA',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: v2,
                    name: '胜利',
                    label: {
                        normal: {
                            formatter: v2 + '',
                            textStyle: {
                                fontSize: 20,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    value: v1,
                    name: '战败',
                    label: {
                        normal: {
                            formatter: function (params) {
                                return '胜率' + Math.round(v2 / v3 * 100) + '%'
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 12
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,.2)'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function zb2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb2'));
        var v1 = 305 //总击杀
        var v2 = 255 //总死亡
        var v3 = v1 + v2 //
        option = {

            tooltip: {
                trigger: 'item',
            },
            series: [{
                type: 'pie',
                radius: ['60%', '70%'],
                color: '#32C5E9',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: v1,
                    name: '总击杀',
                    label: {
                        normal: {
                            formatter: v1 + '',
                            textStyle: {
                                fontSize: 20,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    value: v2,
                    name: '总死亡',
                    label: {
                        normal: {
                            formatter: function (params) {
                                return '总击杀'
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 12
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,.2)'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function zb3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb3'));
        var v1 = 67 //排眼
        var v2 = 146 //插眼
        var v3 = v1 + v2 //总消费 
        option = {
            tooltip: {
                trigger: 'item',
            },
            series: [{

                type: 'pie',
                radius: ['60%', '70%'],
                color: '#67E0E3',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: v2,
                    name: '插眼',
                    label: {
                        normal: {
                            formatter: v2 + '',
                            textStyle: {
                                fontSize: 20,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    value: v1,
                    name: '排眼',
                    label: {
                        normal: {
                            formatter: function (params) {
                                return '总插眼'
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 12
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,.2)'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function zb4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb4'));
        var v1 = 94 //死亡
        var v2 = 40 //击杀
        var v3 = v1 + v2

        option = {
            tooltip: {
                trigger: 'item',
            },
            series: [{

                type: 'pie',
                radius: ['60%', '70%'],
                color: '#9FE6B8',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: v2,
                    name: '击杀',
                    label: {
                        normal: {
                            formatter: v2 + '',
                            textStyle: {
                                fontSize: 20,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    value: v1,
                    name: '死亡',
                    label: {
                        normal: {
                            formatter: function (params) {
                                return '总击杀'
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 12
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,.2)'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function zb5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb5'));
        var v1 = 57 //助攻和击杀
        var v2 = 58 //死亡
        var v3 = v1 + v2 //总消费
        option = {
            tooltip: {
                trigger: 'item',
            },
            series: [{

                type: 'pie',
                radius: ['60%', '70%'],
                color: '#FFDB5C',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: v2,
                    name: '总死亡',
                    label: {
                        normal: {
                            formatter: v2 + '',
                            textStyle: {
                                fontSize: 20,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    value: v1,
                    name: '击杀和助攻',
                    label: {
                        normal: {
                            formatter: function (params) {
                                return '总死亡'
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 12
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,.2)'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function zb6() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb6'));
        var k = 34;
        var a = 59;
        var d = 10;
        var v1 = d //死亡
        var v2 = k + a //击杀和助攻
        option = {
            tooltip: {
                trigger: 'item',
            },
            series: [{

                type: 'pie',
                radius: ['60%', '70%'],
                color: '#FB7293',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: v2,
                    name: '击杀和助攻',
                    label: {
                        normal: {
                            formatter: v2 + '',
                            textStyle: {
                                fontSize: 20,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    value: v1,
                    name: '死亡',
                    label: {
                        normal: {
                            formatter: function (params) {
                                return 'KDA：' + Math.round((k + a) / d)
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 12
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,.2)'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
})