import { getUserTypeList } from '@/api/index.ts';
export default async function getOption() {
    const { data: { data = [] } = {} } = await getUserTypeList();
    const sum = data!.reduce((pre, { value }) => pre + value, 0);
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
        tooltip: {
            show: false,
        },
        series: [
            {
                type: 'pie',
                top: 0,
                radius: '70%',
                center: ['50%', '38%'],
                data: data.map(({ name, value }) =>
                    Object.assign({
                        name: `${name}${((value / sum) * 100).toFixed(2)}%`,
                        value,
                    }),
                ),
                label: {
                    show: false,
                },
                labelLine: {
                    show: false,
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                    },
                },
            },
        ],
    };
}
