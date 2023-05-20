import rightArrow from '@/assets/right-arrow.png';
import leftArrow from '@/assets/left-arrow.png';
import './index.less';

export default function CustomTitle({ title }: { title: string }) {
    return (
        <div className="custom-box-title flex items-center w-full justify-center">
            <img src={rightArrow} alt="rightArrow" className="arrow" />
            <span className="custom-box-title-txt">{title}</span>
            <img src={leftArrow} alt="leftArrow" className="arrow" />
        </div>
    );
}
