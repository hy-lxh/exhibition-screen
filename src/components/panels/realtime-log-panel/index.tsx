/**
 * 实时动态服务面板
 */
import { useEffect, useState } from 'react';
import './index.less';
import CustomPanel from '@/components/custom-panel/index.tsx';
import { getRealtimeLog } from '@/api/index.ts';
import { getPanelData } from '../index.ts';
import { realtimeLogList } from '@/mock/data.ts';
export default function RealtimeLogPanel() {
    const [logList, setLogList] = useState<Log[]>([]);
    const getTime = (time: number) => new Date(time).toLocaleTimeString();
    useEffect(() => {
        getPanelData<Log[]>(getRealtimeLog, realtimeLogList).then(setLogList);
    }, []);
    return (
        <CustomPanel title="实时动态服务" className="h-0 panel">
            <div className="flex-1 shrink-0 h-0 log-list hide-scrollbar scroll-y">
                {logList.map(
                    (
                        { peopleName, peopleCity, peopleTel, openType, time },
                        i,
                    ) => (
                        <div
                            className={`log-record ${['even', 'odd'][i % 2]}`}
                            key={i}
                        >
                            <span className="unitname">{peopleTel}</span>
                            <span className="opentype">{peopleCity}</span>
                            <span className="opentype">{peopleName}</span>
                            <span className="opentype">{openType}</span>
                            <span className="opentype">{getTime(time)}</span>
                        </div>
                    ),
                )}
            </div>
        </CustomPanel>
    );
}
