import Mock from 'mockjs';
const { Random, mock } = Mock;

export const userTypeList = [
    { name: '学生', value: 120 },
    { name: '公租房租户', value: 14 },
    { name: '老师', value: 11 },
    { name: '宿管', value: 44 },
    { name: '一般工作人员', value: 21 },
    { name: '公务员', value: 53 },
    { name: '物业人员', value: 33 },
    { name: '其他', value: 4 },
];

export const realtimeLogList = Array.from(new Array<Log>(12), () => ({
    peopleName: Random.cname(),
    peopleTel: '189' + mock(/[0-9]{8}/),
    openType: ['蓝牙开门', '人脸开门', '指纹开门', '钥匙开门', '远程开门'][
        Math.round(Math.random() * 5)
    ],
    peopleCity: Random.city(),
    time: new Date(Random.now()).getTime(),
}));

export const customerTypeList = [
    { value: 1048, name: '公租房' },
    { value: 735, name: '本科院校' },
    { value: 580, name: '高职院校' },
    { value: 484, name: '人才公寓' },
    { value: 300, name: '中小学' },
];

export const lockNumByMonthList = [
    13640, 8240, 7840, 8380, 8312, 6652, 10224, 11241, 10519, 11838, 10652,
    10986,
].map((value, i) => ({
    value,
    name: i + 1 + '月',
}));

export const lockNumByYearList = [120, 200, 150, 80, 70].map((value, i) => ({
    value,
    name: i + 2018 + '年',
}));

export const industryDivisionList = [120, 200, 150, 80, 70, 110, 130, 170].map(
    (value, i) => ({
        value,
        name: [
            '本科院校',
            '高职院校',
            '公租房',
            '中小学',
            '人才公寓',
            '政府办公楼',
            '企业宿舍',
            '网约房',
        ][i],
    }),
);

export const accumuateList = [
    { name: '累计门锁总量', value: 568763 },
    { name: '本月门锁数量', value: 10680 },
    { name: '今日门锁量', value: 388 },
    { name: '累计服务客户量', value: 2485698 },
];

export const officeData = {
    officeNum: 15,
    coveringNum: 21,
};
