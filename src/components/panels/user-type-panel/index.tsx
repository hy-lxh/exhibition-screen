/**
 * 实时动态服务面板
 */
import { init, EChartsType } from 'echarts';
import CustomPanel from '@/components/custom-panel/index.tsx';
import { useRef, useEffect } from 'react';
import { useEvent } from '@/hooks/event.ts';
import getOption from './option';
import { getUserTypeList } from '@/api/index.ts';
import { getPanelData } from '../index.ts';
import { userTypeList } from '@/mock/data.ts';
export default function UserTypePanel() {
    const chartRef = useRef<null | HTMLDivElement>(null);
    let instance: EChartsType;

    useEffect(() => {
        if (chartRef.current) {
            instance = init(chartRef.current);
            getPanelData(getUserTypeList, userTypeList).then((data) =>
                instance.setOption(getOption(data)),
            );
        }
    }, []);
    useEvent(window, 'resize', () => {
        instance?.resize?.();
    });
    return (
        <CustomPanel title="用户类型" className="h-0">
            <div className="user-type-panel flex-1 h-0" ref={chartRef}></div>
        </CustomPanel>
    );
}
