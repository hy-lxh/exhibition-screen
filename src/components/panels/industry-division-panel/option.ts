import { getIndustryDivision } from '@/api/index.ts';
import { graphic } from 'echarts';
export default async function getOption() {
    const { data: { data = [] } = {} } = await getIndustryDivision();
    return {
        grid: {
            top: 0,
            left: 55,
            right: 30,
            bottom: 0,
            tooltip: {
                show: true,
            },
        },
        xAxis: {
            show: false,
        },
        yAxis: {
            type: 'category',
            inverse: true,
            data: data.map(({ name }) => ({
                value: name,
                textStyle: {
                    color: '#848484',
                    overflow: 'truncate',
                    ellipsis: '...',
                    fontSize: 10,
                },
            })),
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
        series: [
            {
                data: data.map(({ value }) => ({
                    value,
                    itemStyle: {
                        borderRadius: 10,
                    },
                })),
                type: 'bar',
                stack: '1',
                barWidth: 6,
                label: {
                    show: true,
                    align: 'left',
                    position: 'right',
                    color: '#848484',
                    fontSize: 10,
                },
                showBackground: true,
                backgroundStyle: {
                    color: new graphic.LinearGradient(1, 1, 0, 0, [
                        {
                            offset: 0,
                            color: 'rgba(178,178,178,0.3)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(0,59,114,0)',
                        },
                    ]),
                    borderRadius: 10,
                },
                itemStyle: {
                    normal: {
                        show: true,
                        color: function () {
                            return {
                                x: 1,
                                y: 1,
                                x2: 0,
                                y2: 0,
                                type: 'linear',
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#FF3333',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(255,87,87,0)',
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
