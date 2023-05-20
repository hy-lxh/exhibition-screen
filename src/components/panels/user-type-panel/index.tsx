/**
 * 实时动态服务面板
 */
import { init, EChartsType } from 'echarts';
import CustomPanel from '@/components/custom-panel/index.tsx';
import { useRef, useEffect } from 'react';
import { useEvent } from '@/hooks/event.ts';
import getOption from './option';
export default function UserTypePanel() {
    const chartRef = useRef<null | HTMLDivElement>(null);
    let instance: EChartsType;

    useEffect(() => {
        if (chartRef.current) {
            instance = init(chartRef.current);
            getOption().then((option) => instance.setOption(option));
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
