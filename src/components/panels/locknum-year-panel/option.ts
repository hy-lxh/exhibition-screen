export default function getOption(data: SeriesData[]) {
    return {
        grid: {
            top: 20,
            left: 0,
            right: 0,
            bottom: 20,
            tooltip: {
                show: true,
            },
        },
        xAxis: {
            type: 'category',
            data: data.map(({ name }) => ({
                value: name,
                textStyle: {
                    fontSize: 10,
                },
            })),
            nameTextStyle: {
                color: '#848484',
                overflow: 'truncate',
                ellipsis: '...',
                fontSize: 10,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                interval: 0,
            },
        },
        yAxis: {
            type: 'value',
            show: false,
        },
        series: [
            {
                data: data.map(({ value }) => value),
                type: 'bar',
                label: {
                    show: true,
                    align: 'center',
                    position: 'top',
                    color: '#848484',
                    fontSize: 10,
                },
                itemStyle: {
                    normal: {
                        show: true,
                        color: function () {
                            return {
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                type: 'linear',
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#F70000',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(176,0,0,0.15)',
                                    },
                                ],
                            };
                        },
                    },
                },
            },
        ],
    };
}
