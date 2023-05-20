/**
 * 年门锁数量
 */

import CustomPanel from '@/components/custom-panel/index.tsx';
import { useEffect, useRef } from 'react';
import { init, EChartsType } from 'echarts';
import { useEvent } from '@/hooks/event.ts';
import './index.less';
import getOption from './option.ts';
export default function LockNumYearPanel() {
    const chartRef = useRef<null | HTMLDivElement>(null);
    let instance: EChartsType;
    useEffect(() => {
        if (chartRef.current) {
            instance = init(chartRef.current);
            getOption().then((option) => instance.setOption(option));
        }
    }, [chartRef]);
    useEvent(window, 'resize', () => instance?.resize?.());
    return (
        <CustomPanel title="近五年门锁数量">
            <div className="locknum-year-panel flex-1 h-0" ref={chartRef}></div>
        </CustomPanel>
    );
}
