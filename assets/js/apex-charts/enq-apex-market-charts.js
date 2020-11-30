  let locales = [
    {
      "name": "ru",
      "options": {
        "months": [
          "Январь",
          "Февраль",
          "Март",
          "Апрель",
          "Май",
          "Июнь",
          "Июль",
          "Август",
          "Сентябрь",
          "Октябрь",
          "Ноябрь",
          "Декабрь"
        ],
        "shortMonths": [
          "Янв",
          "Фев",
          "Мар",
          "Апр",
          "Май",
          "Июн",
          "Июл",
          "Авг",
          "Сен",
          "Окт",
          "Ноя",
          "Дек"
        ],
        "days": [
          "Воскресенье",
          "Понедельник",
          "Вторник",
          "Среда",
          "Четверг",
          "Пятница",
          "Суббота"
        ],
        "shortDays": ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        "toolbar": {
          "exportToSVG": "Сохранить SVG",
          "exportToPNG": "Сохранить PNG",
          "exportToCSV": "Сохранить CSV",
          "menu": "Меню",
          "selection": "Выбор",
          "selectionZoom": "Выбор с увеличением",
          "zoomIn": "Увеличить",
          "zoomOut": "Уменьшить",
          "pan": "Перемещение",
          "reset": "Сбросить увеличение"
        }
      },

    },
    {
      "name": "en",
      "options": {
        "months": [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        "shortMonths": [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        "days": [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "shortDays": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        "toolbar": {
          "exportToSVG": "Download SVG",
          "exportToPNG": "Download PNG",
          "exportToCSV": "Download CSV",
          "menu": "Menu",
          "selection": "Selection",
          "selectionZoom": "Selection Zoom",
          "zoomIn": "Zoom In",
          "zoomOut": "Zoom Out",
          "pan": "Panning",
          "reset": "Reset Zoom"
        }
      }
    },
    {
      "name": "ko",
      "options": {
        "months": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        "shortMonths": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        "days": ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
        "shortDays": ["일", "월", "화", "수", "목", "금", "토"],
        "toolbar": {
          "exportToSVG": "SVG 다운로드",
          "exportToPNG": "PNG 다운로드",
          "menu": "메뉴",
          "selection": "선택",
          "selectionZoom": "선택영역 확대",
          "zoomIn": "확대",
          "zoomOut": "축소",
          "pan": "패닝",
          "reset": "원래대로"
        }
      }
    },
    {
      "name": "zh_CN",
      "options": {
        "months": [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月"
        ],
        "shortMonths": [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月"
        ],
        "days": [
          "星期天",
          "星期一",
          "星期二",
          "星期三",
          "星期四",
          "星期五",
          "星期六"
        ],
        "shortDays": ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
        "toolbar": {
          "exportToSVG": "下载 SVG",
          "exportToPNG": "下载 PNG",
          "exportToCSV": "下载 CSV",
          "menu": "菜单",
          "selection": "选择",
          "selectionZoom": "选择缩放",
          "zoomIn": "放大",
          "zoomOut": "缩小",
          "pan": "平移",
          "reset": "重置缩放"
        }
      }
    },
    {
      "name": "zh_HK",
      "options": {
        "months": [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        "shortMonths": [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        "days": [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "shortDays": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        "toolbar": {
          "exportToSVG": "Download SVG",
          "exportToPNG": "Download PNG",
          "exportToCSV": "Download CSV",
          "menu": "Menu",
          "selection": "Selection",
          "selectionZoom": "Selection Zoom",
          "zoomIn": "Zoom In",
          "zoomOut": "Zoom Out",
          "pan": "Panning",
          "reset": "Reset Zoom"
        }
      }
    }
  ];

  let ENQChartsContainerSelector = '#ENQChartsContainer';
	let priceChartWrapperSelector = '#chartPriceWrapper';
  let volumeChartWrapperSelector = '#chartVolumeWrapper';
	let toUSDFormatter = new Intl.NumberFormat("en-us", {
	    useGrouping: 'true',
	    maximumFractionDigits: '5'
	});
	let marketChartDataCurrencyToUSD = {
  	enq: null,
  	bitcoin: null
	}

  let enqUSDData = null;

  let chartENQ_BTC_To_USD, chartVolume;
  let localesData = {};

	let ENQChart = {
		init: function(currentLang, chartSeriesData) {
    localesData.seriesTitles = JSON.parse(chartSeriesData.replace(/&quot;/gi, '"'));
    localesData.currentLang = currentLang;
    //timestamp in seconds
    let enqStartTradingDate = Math.trunc(Date.UTC(2019, 6, 9, 0, 0, 0)/1000);    // 9 july (6th month of the year if start from 0) 2019 
    let currentDate = Math.trunc(Date.now()/1000);
		$.when(
			getMarketChartDataToCurrency('enq-enecuum','usd',enqStartTradingDate,currentDate),
			getMarketChartDataToCurrency('bitcoin','usd',enqStartTradingDate,currentDate)
	    ).then(function() {
        Apex = {}
  			enqUSDData = sanitizeENQData(marketChartDataCurrencyToUSD.enq);
  			let btcUSDData = sanitizeBTCData(enqUSDData,marketChartDataCurrencyToUSD.bitcoin);
  			let optionsChart = configureChart(enqUSDData,btcUSDData);
      	chartENQ_BTC_To_USD = new ApexCharts(
            document.querySelector(priceChartWrapperSelector),
            optionsChart.optionsChart1
        );
		    chartENQ_BTC_To_USD.render();

        chartVolume = new ApexCharts(
            document.querySelector(volumeChartWrapperSelector),
            optionsChart.optionsChart2
        );
        chartVolume.render();
        $(ENQChartsContainerSelector).show();
        setChartControls();
	    });
		}
	}   


  function sanitizeENQData(data) {
		if (data !== null) {
		  	let marketChartData = {}
        marketChartData.pricesArr = data.prices;
        marketChartData.totalVolumesArr = data.total_volumes;
		    let pricesArr = [];
		    $.each(marketChartData.pricesArr, function(index, value) {
		    	pricesArr.push(value[1]);
		    });
  			marketChartData.maxPrice = Math.max.apply(null, pricesArr);
  			return marketChartData;
	    } else
	  		return null;
  	}

    function sanitizeBTCData(ENQData,BTCData) {
    if (BTCData !== null && ENQData !== null) {
      let marketChartData = {}
      marketChartData.pricesArr = BTCData.prices;
      let sixHoursInMS = 6*3600*1000;
      if (BTCData.prices.length > ENQData.pricesArr.length) {
        BTCData.prices.splice(ENQData.pricesArr.length);
      }
      $.each(ENQData.pricesArr, function(ENQDataIndex,ENQDataValue) {        
        let currentENQTimestamp = ENQDataValue[0];          
        let currentBTCTimestamp = marketChartData.pricesArr[ENQDataIndex][0];
        if (currentENQTimestamp !== currentBTCTimestamp) {
          let dateDiff = currentENQTimestamp-currentBTCTimestamp;
          if (Math.abs(dateDiff) <= sixHoursInMS) {
            marketChartData.pricesArr[ENQDataIndex][0] = currentENQTimestamp;
          } else {
            let dateString = new Date(currentENQTimestamp);
            let dateForRequest = dateString.getUTCDate().toString().padStart(2,'0')+'-'+(dateString.getUTCMonth()+1).toString().padStart(2,'0')+'-'+dateString.getUTCFullYear();
            $.ajax({
              method: 'GET',
              url: "https://api.coingecko.com/api/v3/coins/bitcoin/history?date="+dateForRequest+"&localization=false",
              async: false,
            }).success(function(response) {
              marketChartData.pricesArr[ENQDataIndex][0] = currentENQTimestamp;
              marketChartData.pricesArr[ENQDataIndex][1] = response.market_data.current_price.usd;
            }).error(function() {
              $(ENQChartsContainerSelector).remove();
            });
          }
        }
      });      
      return marketChartData;
    } else
      return null;      
    }


  	function getMarketChartDataToCurrency(Currency, vsCurrency, fromDate, toDate) {
  		return $.ajax({
  			method: 'GET',
  			url: "https://api.coingecko.com/api/v3/coins/"+Currency+"/market_chart/range?vs_currency="+vsCurrency+"&from="+fromDate+"&to="+toDate+'"',
  			async: true,
  		}).success(function(responce) {
        if (Currency === 'enq-enecuum') {
          // solve 29 july problem
          Currency = 'enq';
          responce.prices.splice(21, 0, [1564444800000, (responce.prices[20][1]+responce.prices[22][1])/2]);
          responce.total_volumes.splice(21, 0, [1564444800000, (responce.total_volumes[20][1]+responce.total_volumes[22][1])/2]);
        }
  			marketChartDataCurrencyToUSD[Currency] = responce;
  		}).error(function() {
  			$(ENQChartsContainerSelector).remove();
  		});    
  	}

  function configureChart(enqUSDData,btcUSDData) {
    let options = {}

    options.optionsChart1 = {
            chart: {
              id: 'ENQ_BTC_To_USD',
              group: 'marketStatsChart',
              type: 'line',
              height: 450,
              width: '100%',
              locales: locales,
              defaultLocale: localesData.currentLang
            },      
            dataLabels: {
              enabled: false
            },
            colors: ['#008FFB','#FEB019','rgba(0,0,0,0)'],
            series: [
              {
                name: localesData.seriesTitles.ENQ_PRICE_USD,
                type: 'line',               
                data: enqUSDData.pricesArr
              },
              {
                name: localesData.seriesTitles.BTC_PRICE_USD,
                type: 'line',               
                data: btcUSDData.pricesArr
              },
              {
                name: localesData.seriesTitles.TOTAL_VOLUME_USD,
                type: 'area',
                data: enqUSDData.totalVolumesArr
              }  
            ],      
            stroke: {
              show: true,
              curve: 'straight',
              lineCap: 'butt',
              width: 2,
              dashArray: 0,      
            },
            markers: {
            },
            legend: {
              horizontalAlign: 'left',
              offsetX: 35,
              offsetY: -10,
              markers: {
                width: [10,10,0],
                height: [10,10,0]
              },
              onItemClick: {
                  toggleDataSeries: false
              },
              formatter: function(seriesName, opts) {
                if (seriesName === localesData.seriesTitles.TOTAL_VOLUME_USD)
                  return null
                else 
                  return [seriesName]
              }
            },
            xaxis: {
              type: 'datetime',
              min: new Date(enqUSDData.pricesArr[0][0]).getTime(),
              tickAmount: 6,
            },
            yaxis: [
              {
                axisTicks: {
                  show: true,
                },
                axisBorder: {
                  show: true,
                  color: '#008FFB'
                },
                labels: {
                  style: {
                    color: '#008FFB',
                  },
                  formatter: function(val, index) {
                    return val.toFixed(2);
                  }
                },
                title: {
                  text: localesData.seriesTitles.ENQ_PRICE_USD,
                  offsety: '100px',                              
                  style: {
                    color: '#008FFB',
                  }
                },
                tooltip: {
                  enabled: false
                },
                forceNiceScale: true,
                max: 0.1*enqUSDData.maxPrice+enqUSDData.maxPrice
              },
              {
                opposite: true,
                axisTicks: {
                  show: true,
                },
                axisBorder: {
                  show: true,
                  color: '#FEB019'
                },
                labels: {
                  style: {
                    color: '#FEB019',
                  },
                  formatter: function(val, index) {
                    return toUSDFormatter.format(val);
                  }
                },
                title: {
                  text: localesData.seriesTitles.BTC_PRICE_USD,
                  offsety: '100px',                              
                  style: {
                    color: '#FEB019',
                  }
                },
                tooltip: {
                  enabled: false
                },
                forceNiceScale: true,
              },
              {
                show: false
              }
            ],      
            tooltip: {
              enabledOnSeries: [0,1],
              x: {
                format: 'dd MMM yyyy',
              },
              y: [
                  {
                    formatter: function (y) {
                      if(typeof y !== "undefined" || y !== null) {
                        return  toUSDFormatter.format(y);
                      } else
                      return y;
                    }
                  },
                  {
                    formatter: function (y) {
                      if(typeof y !== "undefined" || y !== null) {
                        return  toUSDFormatter.format(y);
                      }
                      return y;
                    }
                  },
                  {
                    formatter: function (y) {
                      if(typeof y !== "undefined" || y !== null) {
                        return  toUSDFormatter.format(y);
                      }
                      return y;
                    }
                  }                                      
              ]
            },
            responsive: [
              {
                breakpoint: 700,
                options: {
                  yaxis: [
                    {
                      show: false,
                      labels: {
                        formatter: function(val, index) {
                          return val.toFixed(2);
                      }
                    },
                    tooltip: {
                      enabled: false
                    },
                    forceNiceScale: true,
                    max: 0.1*enqUSDData.maxPrice+enqUSDData.maxPrice
                    },
                    {
                      show: false,
                      opposite: true,
                      
                      labels: {
                        formatter: function(val, index) {
                          return toUSDFormatter.format(val);
                        }
                      },
                      tooltip: {
                        enabled: true
                      },
                      forceNiceScale: true,
                    }
                  ],
                  legend: {
                    horizontalAlign: 'left',
                    offsetX: -25,
                    markers: {
                      width: [10,10,0],
                      height: [10,10,0]
                    }
                  }
                }                 
              }
            ]
          }

        options.optionsChart2 = {
            chart: {
              id: 'Volume',
              group: 'marketStatsChart',
              type: 'line',
              height: 300,
              width: '100%',
              toolbar: {
                show: false
              },
              locales: locales,
              defaultLocale: localesData.currentLang
            },      
            dataLabels: {
              enabled: false
            },
            colors: ['rgba(0,0,0,0)','rgba(0,0,0,0)','rgba(11,98,164,0.3)'],
            grid: {
              borderColor: 'rgba(0,0,0,0)',
            },
            stroke: {
              show: true,
              curve: 'straight',
              lineCap: 'butt',
              width: 2,
              dashArray: 0,      
            },
            series: [
              {
                name: localesData.seriesTitles.ENQ_PRICE_USD,
                type: 'line',               
                data: enqUSDData.pricesArr
              },
              {
                name: localesData.seriesTitles.BTC_PRICE_USD,
                type: 'line',               
                data: btcUSDData.pricesArr
              },
              {
                name: localesData.seriesTitles.TOTAL_VOLUME_USD,
                type: 'area',
                data: enqUSDData.totalVolumesArr,     
              },
            ],
            markers: {
              strokeColors: ['rgba(0,0,0,0)','rgba(0,0,0,0)','#ffffff'],
            },
            legend: {
              horizontalAlign: 'left',
              offsetX: 35,
              offsetY: -10,
              markers: {
                width: [0,0,10],
                height: [0,0,10],
                strokeWidth: [0,0,2],
                strokeColor: ['rgba(0,0,0,0)','rgba(0,0,0,0)','rgb(11,98,164)'],
              },
              onItemClick: {
                  toggleDataSeries: false
              },
              formatter: function(seriesName, opts) {
                if (seriesName !== localesData.seriesTitles.TOTAL_VOLUME_USD)
                  return ''
                else 
                  return [seriesName]
              },
              itemMargin: {
                horizontal: 0,
                vertical: 0
              },
            },
            xaxis: {
              type: 'datetime',
              min: new Date(enqUSDData.pricesArr[0][0]).getTime(),
              tickAmount: 6,
            },
            yaxis: [
              {
                axisTicks: {
                  show: true
                },
                axisBorder: {
                  show: true,
                  color: 'rgba(0,0,0,0)'
                },
                labels: {
                  style: {
                    color: 'rgba(0,0,0,0)',
                  },
                  formatter: function(val, index) {
                    return val.toFixed(2);
                  }
                },
                title: {
                  text: localesData.seriesTitles.ENQ_PRICE_USD,
                  offsety: '100px',                              
                  style: {
                    color: 'rgba(0,0,0,0)',
                  }
                },
                tooltip: {
                  enabled: false
                },
                forceNiceScale: true
              },
              {
                opposite: true,
                axisTicks: {
                  show: true,
                },
                axisBorder: {
                  show: true,
                  color: 'rgba(0,0,0,0)'
                },
                labels: {
                  style: {
                    color: 'rgba(0,0,0,0)',
                  },
                  formatter: function(val, index) {
                    return toUSDFormatter.format(val);
                  }
                },
                title: {
                  text: localesData.seriesTitles.BTC_PRICE_USD,
                  offsety: '100px',                              
                  style: {
                    color: 'rgba(0,0,0,0)',
                  }
                },
                tooltip: {
                  enabled: true
                },
                forceNiceScale: true,
              },
              {
                show: false
              }
            ],      
            tooltip: {
              enabledOnSeries: [2],
              x: {
                format: 'dd MMM yyyy',
              },
              y: [
                  {
                    formatter: function (y) {
                      if(typeof y !== "undefined" || y !== null) {
                        return  toUSDFormatter.format(y);
                      } else
                      return y;
                    }
                  },
                  {
                    formatter: function (y) {
                      if(typeof y !== "undefined" || y !== null) {
                        return  toUSDFormatter.format(y);
                      }
                      return y;
                    }
                  },
                  {
                    formatter: function (y) {
                      if(typeof y !== "undefined" || y !== null) {
                        return  toUSDFormatter.format(y);
                      }
                      return y;
                    }
                  }                                      
              ]
            },
            responsive: [
              {
                breakpoint: 700,
                options: {
                  yaxis: [
                    {
                      show: false,
                      labels: {
                        formatter: function(val, index) {
                          return val.toFixed(2);
                      }
                    },
                    tooltip: {
                      enabled: false
                    },
                    forceNiceScale: true,
                    max: 0.1*enqUSDData.maxPrice+enqUSDData.maxPrice
                    },
                    {
                      show: false,
                      opposite: true,
                      
                      labels: {
                        formatter: function(val, index) {
                          return toUSDFormatter.format(val);
                        }
                      },
                      tooltip: {
                        enabled: true
                      },
                      forceNiceScale: true,
                    }
                  ],
                  legend: {
                    horizontalAlign: 'left',
                    offsetX: -25,
                    markers: {
                      width: [0,0,10],
                      height: [0,0,10],
                      strokeWidth: [0,0,2],
                      strokeColor: ['rgba(0,0,0,0)','rgba(0,0,0,0)','rgb(11,98,164)'],
                    }
                  }
                }
              }
            ]
          }

          return options;
  }


  function setChartControls() {
      let resetCssClasses = function (activeEl) {
        let els = document.querySelectorAll("button");
        Array.prototype.forEach.call(els, function (el) {
          el.classList.remove('active');
        });

        activeEl.target.classList.add('active');
      }

      let currentDate = new Date();

      document.querySelector("#one_month").addEventListener('click', function (e) {
        resetCssClasses(e)
        chartENQ_BTC_To_USD.updateOptions({
          xaxis: {
            min: new Date().setMonth(currentDate.getMonth() - 1),
            max: new Date().getTime(),
          }
        });
      });

      document.querySelector("#six_months").addEventListener('click', function (e) {
        resetCssClasses(e)
        chartENQ_BTC_To_USD.updateOptions({
          xaxis: {
            min: new Date().setMonth(currentDate.getMonth() - 6),
            max: new Date().getTime(),
          }
        });
      });

      document.querySelector("#one_year").addEventListener('click', function (e) {
        resetCssClasses(e)
        chartENQ_BTC_To_USD.updateOptions({
          xaxis: {
            min: new Date().setFullYear(currentDate.getFullYear() - 1),
            max: new Date().getTime(),
          }
        });
      });

      document.querySelector("#ytd").addEventListener('click', function (e) {
        resetCssClasses(e)
        chartENQ_BTC_To_USD.updateOptions({
          xaxis: {
            min: Date.parse('01 Jan '+currentDate.getFullYear()+' 00:00:00 GMT'),
            max: new Date().getTime(),
          }
        });
      });

      document.querySelector("#all").addEventListener('click', function (e) {
        resetCssClasses(e)
        chartENQ_BTC_To_USD.updateOptions({
          xaxis: {
            min: undefined,
            max: undefined,
          }
        });
      });
  }