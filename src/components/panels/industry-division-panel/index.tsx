/**
 * 累计总额面板
 */

import CustomPanel from '@/components/custom-panel/index.tsx';
import { useEvent } from '@/hooks/event.ts';
import { useEffect, useRef } from 'react';
import { init, EChartsType } from 'echarts';
import './index.less';
import getOption from './option.ts';
import { getIndustryDivision } from '@/api/index.ts';
import { getPanelData } from '../index.ts';
import { industryDivisionList } from '@/mock/data.ts';

export default function IndustryDivisionPanel() {
    const chartRef = useRef<null | HTMLDivElement>(null);
    let instance: EChartsType;
    useEffect(() => {
        if (chartRef.current) {
            instance = init(chartRef.current);
            getPanelData(getIndustryDivision, industryDivisionList).then(
                (data) => instance.setOption(getOption(data)),
            );
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
