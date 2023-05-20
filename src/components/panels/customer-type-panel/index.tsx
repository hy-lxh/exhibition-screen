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
import { customerTypeList } from '@/mock/data.ts';
import { getCustomerType } from '@/api/index.ts';
import { getPanelData } from '../index.ts';
export default function CustomerTypePanel() {
    const chartRef = useRef<null | HTMLDivElement>(null);
    let instance: EChartsType;
    useEffect(() => {
        if (chartRef.current) {
            instance = init(chartRef.current);
            getPanelData(getCustomerType, customerTypeList).then((data) =>
                instance.setOption(getOption(data)),
            );
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
