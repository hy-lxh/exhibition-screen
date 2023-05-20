/**
 * 累计总额面板
 */

import CustomPanel from '@/components/custom-panel/index.tsx';
import { useEvent } from '@/hooks/event.ts';
import { useEffect, useRef } from 'react';
import { init, EChartsType } from 'echarts';
import './index.less';
import getOption from './option.ts';

export default function IndustryDivisionPanel() {
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
        <CustomPanel title="累计客户行业划分" className="h-0">
            <div
                className="industry-division-panel flex-1 h-0"
                ref={chartRef}
            ></div>
        </CustomPanel>
    );
}
