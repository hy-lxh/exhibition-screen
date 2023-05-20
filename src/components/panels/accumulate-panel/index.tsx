/**
 * 累计总额面板
 */
import CountingPanel from '@/components/counting-panel/index.tsx';
import CustomPanel from '@/components/custom-panel/index.tsx';
import map from '@/assets/map.jpg';
import './index.less';
import { useEffect, useState } from 'react';
import { getAccumulate, getOfficeNum } from '@/api/index.ts';
import { accumuateList, officeData } from '@/mock/data.ts';
import { getPanelData } from '../index.ts';
export default function AccumulatePanel() {
    const [list, setList] = useState<SeriesData[]>([]);
    const [officeNumData, setOfficeNumData] = useState<OfficeNumData>({
        officeNum: 0,
        coveringNum: 0,
    });
    useEffect(() => {
        getPanelData(getAccumulate, accumuateList).then(setList);
        getPanelData(getOfficeNum, officeData).then(setOfficeNumData);
    }, []);
    return (
        <>
            <div className="accumulate flex justify-evenly items-center">
                {list.map((data, i) => (
                    <CountingPanel key={i} {...data} />
                ))}
            </div>
            <div className="city-statistics flex justify-between">
                <img src={map} alt="地图" className="map" />
                <div className="flex-col justify-between">
                    <CustomPanel
                        title="咚咚全国办事处"
                        border={false}
                        className="items-center"
                    >
                        <span className="font FFB70E">
                            <span>全球共</span>
                            <span className="FFB70E">
                                {officeNumData.officeNum}个
                            </span>
                            <span>办事处</span>
                        </span>
                    </CustomPanel>
                    <CustomPanel
                        title="咚咚全国通行服务体系"
                        border={false}
                        className="items-center"
                    >
                        <span className="font">
                            <span>覆盖</span>
                            <span className="F70000">
                                {officeNumData.coveringNum}个
                            </span>
                            <span>城市</span>
                        </span>
                    </CustomPanel>
                </div>
            </div>
        </>
    );
}
