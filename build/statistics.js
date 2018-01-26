/*
* Created by 67 on 2018/1/26
* 用于[我的主页]
* 主要生成数据统计的图
*/
$(document).ready(function(){
	// 打卡统计
	var clockStatisticsTu = echarts.init(document.getElementById("clock-statistics"));
	function getVirtulData(year) {
	    year = year || '2017';
	    var date = +echarts.number.parseDate(year + '-01-01');
	    var end = +echarts.number.parseDate(year + '-12-31');
	    var dayTime = 3600 * 24 * 1000;
	    var data = [];
	    for (var time = date; time <= end; time += dayTime) {
	        data.push([
	            echarts.format.formatTime('yyyy-MM-dd', time),
	            Math.floor(Math.random() * 10000)
	        ]);
	    }
	    return data;
	}

	option1 = {
	    visualMap: {
	        show: false,
	        min: 0,
	        max: 10000,
	        inRange: {
	            color: ['#5291FF', '#C7DBFF']
	        }
	    },
	    calendar: {
	        range: '2018',
		    // cellSize: ['auto',30],
		    yearLabel:{
		    	position:'top'
		    }
	    },
	    series: {
	        type: 'heatmap',
	        coordinateSystem: 'calendar',
	        data: getVirtulData(2018)
	    }
	};
	clockStatisticsTu.setOption(option1);

	// 完成情况统计
	var completeStatisticsTu = echarts.init(document.getElementById("complete-statistics"));
	option2 = {
		backgroundColor: '#2c343c',
	    tooltip: {
	        trigger: 'item',
	        formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    color:['#2962FF','#82B1FF'],
	    legend: {
	        orient: 'vertical',
	        x: 'left',
	        // data:['已完成','未完成']
	        data: [
	        	{
				    name: '已完成',				    
				    textStyle: {color: '#2962FF'}
				},
				{
					name: '未完成',				    
				    textStyle: {color: '#82B1FF'}
				}
			]
	    },
	    series: [
	        {
	            name:'访问来源',
	            type:'pie',
	            radius: ['50%', '70%'],
	            avoidLabelOverlap: false,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'center'	     
	                },
	                emphasis: {
	                    show: true,
	                    textStyle: {
	                        fontSize: '30',
	                        fontWeight: 'bold'
	                    }
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false      
	                }
	            },
	            data:[
	                {value:335, name:'已完成'},
	                {value:80, name:'未完成'},
	                // {value:234, name:'联盟广告'},
	                // {value:135, name:'视频广告'},
	                // {value:1548, name:'搜索引擎'}
	            ]
	        }
	    ]
	};
	completeStatisticsTu.setOption(option2);

	// 项目对比统计
	var projectStatisticsTu = echarts.init(document.getElementById("project-statistics"));
	option3 = {
	    backgroundColor: '#2c343c',

	    // title: {
	    //     text: 'Customized Pie',
	    //     left: 'center',
	    //     top: 20,
	    //     textStyle: {
	    //         color: '#ccc'
	    //     }
	    // },

	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },

	    visualMap: {
	        show: false,
	        min: 80,
	        max: 600,
	        inRange: {
	            colorLightness: [0, 1]
	        }
	    },
	    series : [
	        {
	            name:'项目',
	            type:'pie',
	            radius : '55%',
	            center: ['50%', '50%'],
	            data:[
	                {value:335, name:'Freekg'},
	                {value:310, name:'GTDMaster'},
	                {value:274, name:'MeetingRoom'},
	                // {value:235, name:'og-in-cj'},
	                {value:400, name:'og-in-cj'}
	            ].sort(function (a, b) { return a.value - b.value; }),
	            roseType: 'radius',
	            label: {
	                normal: {
	                    textStyle: {
	                        color: '#2979FF'
	                    }
	                }
	            },
	            labelLine: {
	                normal: {
	                    lineStyle: {
	                        color: '#2979FF'
	                    },
	                    smooth: 0.2,
	                    length: 10,
	                    length2: 20
	                }
	            },
	            itemStyle: {
	                normal: {
	                    color: '#2979FF',
	                    shadowBlur: 200,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            },

	            animationType: 'scale',
	            animationEasing: 'elasticOut',
	            animationDelay: function (idx) {
	                return Math.random() * 200;
	            }
	        }
	    ]
	};
	projectStatisticsTu.setOption(option3);
});
