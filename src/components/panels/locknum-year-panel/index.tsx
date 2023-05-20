/**
 * 年门锁数量
 */

import CustomPanel from '@/components/custom-panel/index.tsx';
import { useEffect, useRef } from 'react';
import { init, EChartsType } from 'echarts';
import { useEvent } from '@/hooks/event.ts';
import './index.less';
import getOption from './option.ts';
import { getLockNumByYear } from '@/api/index.ts';
import { getPanelData } from '../index.ts';
import { lockNumByYearList } from '@/mock/data.ts';
export default function LockNumYearPanel() {
    const chartRef = useRef<null | HTMLDivElement>(null);
    let instance: EChartsType;
    useEffect(() => {
        if (chartRef.current) {
            instance = init(chartRef.current);
            getPanelData(getLockNumByYear, lockNumByYearList).then((data) =>
                instance.setOption(getOption(data)),
            );
        }
    }, [chartRef]);
    useEvent(window, 'resize', () => instance?.resize?.());
    return (
        <CustomPanel title="近五年门锁数量">
            <div className="locknum-year-panel flex-1 h-0" ref={chartRef}></div>
        </CustomPanel>
    );
}
