import logo from '@/assets/logo.png';
import './index.less';
export default function Header() {
    return (
        <div className="header flex cover border-box relative">
            <img src={logo} alt="logo" className="logo" />
            <div className="title flex-col items-center absolute">
                <div className="flex items-center bold italic">
                    <span>咚咚智能</span>
                    <span className="dot"></span>
                    <span>数字呈现</span>
                </div>
                <div>构建数字身份安全通行的智能空间</div>
            </div>
            <div className="slogan italic bold absolute">
                让通行更安全，更自由，更有价值
            </div>
        </div>
    );
}
