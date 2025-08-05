$(function () {
    // 页面加载完成后执行
    $(window).on('load', function () {
        $(".loading").fadeOut();
        initPage();
    });

    // 初始化页面
    function initPage() {
        loadAllData();
        initECharts();
        setupTimeDisplay();
    }

    // 加载所有数据
    function loadAllData() {
        loadTeamData();
        loadPlayerData();
        loadHeroData();
    }

    // 加载战队数据
    function loadTeamData() {
        axios.get('http://localhost:5000/api/teams')
            .then(response => {
                renderTeamTable(response.data);
                updateTeamCharts(response.data);
            })
            .catch(error => {
                console.error('加载战队数据失败:', error);
                showError('teamTable', '数据加载失败');
            });
    }

    // 加载选手数据
    function loadPlayerData() {
        axios.get('http://localhost:5000/api/players')
            .then(response => {
                renderPlayerTable(response.data);
                updatePlayerCharts(response.data);
            })
            .catch(error => {
                console.error('加载选手数据失败:', error);
                showError('playerTable', '数据加载失败');
            });
    }

    // 加载英雄数据
    function loadHeroData() {
        axios.get('http://localhost:5000/api/heroes')
            .then(response => {
                renderHeroList(response.data);
            })
            .catch(error => {
                console.error('加载英雄数据失败:', error);
                showError('heroList', '数据加载失败');
            });
    }

    // 渲染战队表格
    function renderTeamTable(teams) {
        let html = '<table class="table1"><tr><th>排名</th><th>战队</th><th>出场次数</th><th>胜率</th></tr>';
        teams.forEach(team => {
            html += `<tr><td>${team.rank}</td><td>${team.name}</td><td>${team.matches}</td><td>${team.win_rate}</td></tr>`;
        });
        html += '</table>';
        $('#teamTable').html(html);
    }

    // 渲染选手表格
    function renderPlayerTable(players) {
        let html = '<table class="table1"><tr><th>排名</th><th>队员</th><th>位置</th><th>总击杀</th></tr>';
        players.forEach(player => {
            html += `<tr><td>${player.rank}</td><td>${player.name}</td><td>${player.position}</td><td>${player.kills}</td></tr>`;
        });
        html += '</table>';
        $('#playerTable').html(html);
    }

    // 渲染英雄列表
    function renderHeroList(heroes) {
        let html = '<div class="wraptit"><span>英雄名</span><span>出场次数</span><span>Pick比率</span><span>胜率</span></div>';
        html += '<div class="wrap"><ul>';
        heroes.forEach(hero => {
            html += `<li><p><span>${hero.name}</span><span>${hero.matches}</span><span>${hero.pick_rate}</span><span>${hero.win_rate}</span></p></li>`;
        });
        html += '</ul></div>';
        $('#heroList').html(html);
    }

    // 显示错误信息
    function showError(elementId, message) {
        $(`#${elementId}`).html(`<div class="error-message">${message}</div>`);
    }

    // 初始化所有ECharts图表
    function initECharts() {
        echarts_1();
        echarts_2();
        echarts_3();
        echarts_4();
        echarts_5();
        initZbCharts();
    }

    // 更新战队相关图表
    function updateTeamCharts(teams) {
        // 示例：更新战队胜率图表
        const winRateData = teams.map(team => ({
            value: parseInt(team.win_rate),
            name: team.name
        }));
        
        // 实际项目中需要获取对应图表实例并更新数据
    }

    // 更新选手相关图表
    function updatePlayerCharts(players) {
        // 示例：更新选手击杀图表
        const killData = players.map(player => player.kills);
        
        // 实际项目中需要获取对应图表实例并更新数据
    }

    // 初始化小指标图表
    function initZbCharts() {
        // T1胜率图表
        axios.get('http://localhost:5000/api/team-stats/T1')
            .then(response => {
                const data = response.data;
                zb1(data.win_rate);
            });

        // BLG击杀图表
        axios.get('http://localhost:5000/api/team-stats/BLG')
            .then(response => {
                const data = response.data;
                zb2(data.kills, data.deaths);
            });

        // WBG插眼图表
        axios.get('http://localhost:5000/api/team-stats/WBG')
            .then(response => {
                const data = response.data;
                zb3(data.eye_placement, data.ward_clear);
            });

        // BLGKnight击杀图表
        axios.get('http://localhost:5000/api/team-stats/BLGKnight')
            .then(response => {
                const data = response.data;
                zb4(data.kills, data.deaths);
            });

        // FLYBwipo死亡图表
        axios.get('http://localhost:5000/api/team-stats/FLYBwipo')
            .then(response => {
                const data = response.data;
                zb5(data.deaths, data.kills_assists);
            });

        // LNGScout KDA图表
        axios.get('http://localhost:5000/api/team-stats/LNGScout')
            .then(response => {
                const data = response.data;
                zb6(data.kills, data.assists, data.deaths);
            });
    }

    // 战队占比环形图
    function echarts_1() {
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
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    // MVP种子选手环形图
    function echarts_2() {
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
                startAngle: 0,
                radius: [51, 100],
                center: ['50%', '45%'],
                roseType: 'area',
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
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
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    // 个人击杀数据曲线图
    function echarts_3() {
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
                data: ['总击杀', '总助攻', '总死亡'],
                top: '0',
                textStyle: {
                    color: "#fff"
                },
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
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    // 战队胜负数据图
    function echarts_4() {
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
                    "color": "rgba(255,255,255,1)",
                    "fontSize": "16"
                }
            },
            "xAxis": [{
                "type": "category",
                data: ['T1', 'GEN', 'LNG', 'BLG', 'TES', 'HLE', 'WBG', 'FLY', 'GAM', 'PSG'],
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
                }
            }],
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
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,0.5)"
                    }
                }
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
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,0.2)"
                    }
                }
            }],
            "grid": {
                "top": "10%",
                "right": "30",
                "bottom": "30",
                "left": "30",
            },
            "series": [{
                "name": "Victory",
                "type": "bar",
                "data": [6, 4, 3, 5, 3, 3, 4, 3, 3, 3],
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
                "data": [1, 1, 1, 3, 2, 2, 3, 3, 3, 4],
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
                "data": [86, 80, 75, 63, 60, 60, 56, 50, 50, 43],
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
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    // 个人数据堆叠图
    function echarts_5() {
        var myChart = echarts.init(document.getElementById('echart5'));
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['出场次数', '总击杀', '总助攻', '总死亡'],
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
                }
            },
            yAxis: {
                type: 'category',
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,1)'
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                },
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
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    // T1胜率图表
    function zb1(winRate) {
        var myChart = echarts.init(document.getElementById('zb1'));
        var v2 = winRate || 86; // 胜利百分比
        var v1 = 100 - v2; // 失败百分比
        var option = {
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
                            formatter: v2 + '%',
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
                            formatter: '胜率',
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

    // BLG击杀图表
    function zb2(kills, deaths) {
        var myChart = echarts.init(document.getElementById('zb2'));
        kills = kills || 305;
        deaths = deaths || 255;
        var option = {
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
                    value: kills,
                    name: '总击杀',
                    label: {
                        normal: {
                            formatter: kills + '',
                            textStyle: {
                                fontSize: 20,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    value: deaths,
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

    // WBG插眼图表
    function zb3(eyePlacement, wardClear) {
        var myChart = echarts.init(document.getElementById('zb3'));
        eyePlacement = eyePlacement || 146;
        wardClear = wardClear || 67;
        var option = {
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
                    value: eyePlacement,
                    name: '插眼',
                    label: {
                        normal: {
                            formatter: eyePlacement + '',
                            textStyle: {
                                fontSize: 20,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    value: wardClear,
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

    // BLGKnight击杀图表
    function zb4(kills, deaths) {
        var myChart = echarts.init(document.getElementById('zb4'));
        kills = kills || 94;
        deaths = deaths || 40;
        var option = {
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
                    value: kills,
                    name: '击杀',
                    label: {
                        normal: {
                            formatter: kills + '',
                            textStyle: {
                                fontSize: 20,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    value: deaths,
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

    // FLYBwipo死亡图表
    function zb5(deaths, killsAssists) {
        var myChart = echarts.init(document.getElementById('zb5'));
        deaths = deaths || 58;
        killsAssists = killsAssists || 57;
        var option = {
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
                    value: deaths,
                    name: '总死亡',
                    label: {
                        normal: {
                            formatter: deaths + '',
                            textStyle: {
                                fontSize: 20,
                                color: '#fff',
                            }
                        }
                    }