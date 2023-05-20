/**
 * 累计总额面板
 */

import CustomPanel from '@/components/custom-panel/index.tsx';
import { useEffect, useRef } from 'react';
import { init, EChartsType } from 'echarts';
import { useEvent } from '@/hooks/event.ts';
import chartBg from '@/assets/chart-bg.png';
import './index.less';
import getOption from './option';
export default function CustomerTypePanel() {
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
        <CustomPanel title="累计客户类型" className="h-0">
            <div className="flex-1 h-0 relative">
                <div
                    className="customer-type-panel h-full"
                    ref={chartRef}
                ></div>
                <img src={chartBg} className="chart-bg" />
            </div>
        </CustomPanel>
    );
}
