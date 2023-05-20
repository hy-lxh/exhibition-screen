/**
 * 数量统计
 */
interface CountingPanelProps {
    name: string;
    value: number;
}
import anime from 'animejs';
import './index.less';
import { useEffect, useRef } from 'react';
export default function CountingPanel({ name, value }: CountingPanelProps) {
    const ref = useRef<null | HTMLDivElement>(null);
    useEffect(() => {
        if (ref.current) {
            anime({
                targets: ref.current,
                innerHTML: [0, value],
                round: 1,
                easing: 'linear',
            });
        }
    }, [value]);
    return (
        <div className="counting-panel flex-col items-center">
            <div className="counting-panel-title">{name}</div>
            <div className="counting-panel-count" ref={ref}></div>
        </div>
    );
}
