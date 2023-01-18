Highcharts.chart('columncontainer', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Column chart with negative values'
    },
    xAxis: {
        categories: ['Oranges', 'Pineapples', 'Rasberries', 'Fruit Snacks', 'Strawberries']
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Jacob',
        data: [6, 7, 8, 9, 7]
    }, {
        name: 'Jane',
        data: [2, -2, -3, 2, 1]
    }, {
        name: 'Joe',
        data: [3, 4, 4, -2, 5]
    }]
});