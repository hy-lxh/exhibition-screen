/**
 * 月门锁数量
 */

import CustomPanel from '@/components/custom-panel/index.tsx';
import { useEffect, useRef } from 'react';
import { init, EChartsType } from 'echarts';
import { useEvent } from '@/hooks/event.ts';
import { getLockNumByMonth } from '@/api/index.ts';
import './index.less';
import getOption from './option.ts';
import { getPanelData } from '../index.ts';
import { lockNumByMonthList } from '@/mock/data.ts';
export default function LockNumYearPanel() {
    const chartRef = useRef<null | HTMLDivElement>(null);
    let instance: EChartsType;
    useEffect(() => {
        if (chartRef.current) {
            instance = init(chartRef.current);
            getPanelData(getLockNumByMonth, lockNumByMonthList).then((data) =>
                instance.setOption(getOption(data)),
            );
        }
    }, [chartRef]);
    useEvent(window, 'resize', () => instance?.resize?.());
    return (
        <CustomPanel title="每月门锁数量">
            <div
                className="locknum-month-panel flex-1 h-0"
                ref={chartRef}
            ></div>
        </CustomPanel>
    );
}
