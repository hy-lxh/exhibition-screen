import { graphic } from 'echarts';
export default function getOption(data: SeriesData[]) {
    return {
        xAxis: {
            type: 'category',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                interval: 0,
            },
            data: data.map(({ name }) => ({
                value: name,
                textStyle: {
                    fontSize: 10,
                },
            })),
        },
        yAxis: {
            type: 'value',
            show: false,
        },
        grid: {
            top: 5,
            left: 0,
            right: 0,
            bottom: 20,
        },
        series: [
            {
                type: 'line',
                symbol: 'circle',
                symbolSize: 5,
                sampling: 'average',
                itemStyle: {
                    color: '#FF0000',
                },
                label: {
                    show: true,
                    align: 'center',
                    position: 'top',
                    color: '#AAAAAA',
                    fontSize: 10,
                },
                areaStyle: {
                    color: new graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(225,73,73,0.77)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(255,134,134,0)',
                        },
                    ]),
                },
                data: data.map(({ value }) => value),
            },
        ],
    };
}
