import Controller from '@ember/controller';

export default Controller.extend({
  mostActiveUsersData: function(){
    return [{
      name: null,
      color: '#0696D7',
      data: [49.9, 28.2, 67.2, 15.6]
    }]
  }.property(),
  mostActiveUsersOptions: function(){
    return {
      chart: {
        type: 'column'
      },
      title: {
        text: null
      },

      subtitle: {
        text: 'Most active members (week)'
      },

      legend: {
        enabled: false
      },

      xAxis: {
        categories: ['Fernanda', 'Gustavo', 'Erik', 'Paula'],
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Worked hours'
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} hr</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
            borderWidth: 0
        }
      },
      responsive: {
        rules: [{
          condition: {
            minHeight: 399,
            maxHeight: 401
          },
          chartOptions: {
            chart: {
              height: 180
            }
          }
        }]
      }
    }
  }.property(),
  mostActiveTeamsOptions: function(){
    return {
      chart: {
        type: 'column'
      },
      title: {
        text: null
      },

      subtitle: {
        text: 'Most active teams (week)'
      },

      xAxis: {
        categories: ['Ubuntu', 'Crescer', 'Aguapés', 'Financeiro', 'Gestão De pessoas', 'Comunicação'],
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Worked hours'
        }
      },
      legend: {
        enabled: false
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} hr</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      responsive: {
        rules: [{
          condition: {
            minHeight: 399,
            maxHeight: 401
          },
          chartOptions: {
            chart: {
              height: 180
            }
          }
        }]
      }
    }
  }.property(),
  mostActiveTeamsData: function(){
    return [{
      color: '#FFD200',
      name: null,
      data: [150, 278, 301, 423, 290]
    }]
  }.property(),
  hoursWorkedMonthlyOptions: function() {
    return {
      title: {
        text: null
      },

      legend: {
        enabled: false
      },

      subtitle: {
        text: 'Hours worked by the team (monthly)'
      },

      xAxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Ago',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ],
      },

      yAxis: {
        title: {
          text: 'Hours worked'
        }
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
        }
      },
      responsive: {
        rules: [{
          condition: {
            minHeight: 399,
            maxHeight: 401
          },
          chartOptions: {
            chart: {
              height: 180
            }
          }
        }]
      }
    }
  }.property(),
  hoursWorkedMonthlyData: function() {
    return [{
      name: 'Enactus UFRGS',
      color: '#FFD200',
      data: [1246, 2354, 1552, 984, 876, 1124, 1982, 790, 890, 1023, 901, 802]
    }]
  }.property(),
  yourHoursThisWeekOptions: function() {
    return {

      title: {
        text: null
      },

      subtitle: {
        text: 'Your hours (week)'
      },

      legend: {
        enabled: false
      },

      xAxis: {
        categories: [
          'Sun',
          'Mon',
          'Tue',
          'Wed',
          'Thu',
          'Fri',
          'Sat'
        ],
      },

      yAxis: {
        title: {
          text: 'Hours worked'
        }
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
        }
      },
      responsive: {
        rules: [{
          condition: {
            minHeight: 399,
            maxHeight: 401
          },
          chartOptions: {
            chart: {
              height: 180
            }
          }
        }]
      }
    }
  }.property(),
  yourHoursThisWeekData: function() {
    return [{
      name: 'Guilherme Tassinari',
      color: '#0696D7',
      data: [0.2, 4, 3.5, 3.1, 3.2, 3.7, 0.5]
    }]
  }.property(),
  moneyFlowChartOptions:function() {
    return {

      title: {
        text: null
      },

      subtitle: {
        text: 'Money flow'
      },

      legend: {
        enabled: false
      },

      xAxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul'
        ],
      },

      yAxis: {
        title: {
          text: 'Reais'
        }
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
        }
      },
      responsive: {
        rules: [{
          condition: {
            minHeight: 399,
            maxHeight: 401
          },
          chartOptions: {
            chart: {
              height: 180
            }
          }
        }]
      }
    }
  }.property(),
  moneyFlowChartData: function() {
    return [{
      type: 'column',
      stacking: 'normal',
      name: 'Income',
      color: '#49A942',
      data: [250, 500, 300, 700, 100, 200, 1000]
    }, {
      type: 'column',
      stacking: 'normal',
      name: 'Outcome',
      color: '#C41230',
      data: [-500, -500, -200, -100, -800, -400, -700]
    }, {
      type: 'spline',
      name: 'Accumulated',
      color: '#FFD200',
      data: [-250, 0, 100, 600, 0, -600, 300]
    }]
  }.property(),
  accumulatedMoneyOptions:function() {
    return {

      type: 'column',

      title: {
        text: null
      },

      subtitle: {
        text: 'Accumulated money'
      },

      legend: {
        enabled: false
      },

      xAxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul'
        ],
      },

      yAxis: {
        title: {
          text: 'Reais'
        }
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
        }
      },
      responsive: {
        rules: [{
          condition: {
            minHeight: 399,
            maxHeight: 401
          },
          chartOptions: {
            chart: {
              height: 180
            }
          }
        }]
      }
    }
  }.property(),
  accumulatedMoneyData: function() {
    return [{
      name: 'Income',
      color: '#FFD200',
      data: [100, 100, 200, 700, 700, 100, 400]
    }]
  }.property()
});
