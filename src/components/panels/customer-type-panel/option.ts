export default function getOption(data: SeriesData[]) {
    return {
        legend: {
            bottom: '0px',
            itemHeight: 4,
            itemWidth: 6,
            textStyle: {
                fontSize: 10,
                color: '#848484',
            },
        },
        grid: {
            top: 0,
        },
        series: [
            {
                type: 'pie',
                clockWise: false,
                radius: ['56%', '70%'],
                center: ['50%', '35%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center',
                },
                labelLine: {
                    show: false,
                },
                data: data
                    .map((item) => [
                        item,
                        {
                            value: 40,
                            name: '',
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: false,
                                    },
                                    labelLine: {
                                        show: false,
                                    },
                                    color: 'rgba(0, 0, 0, 0)',
                                    borderColor: 'rgba(0, 0, 0, 0)',
                                    borderWidth: 0,
                                },
                            },
                        },
                    ])
                    .flat(Infinity),
            },
        ],
    };
}
