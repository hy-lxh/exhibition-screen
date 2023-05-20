import type { ReactNode } from 'react';
import CustomTitle from '@/components/custom-title/index.tsx';
import './index.less';
interface CustomBoxProps {
    title?: string;
    children?: ReactNode;
    className?: string;
    border?: boolean;
}
function CustomPanel(props: CustomBoxProps) {
    const { title, children, className, border } = props;
    return (
        <div
            className={`custom-panel relative flex-col ${className} ${
                border && 'border'
            }`}
        >
            {title && <CustomTitle title={title} />}
            {children}
        </div>
    );
}

CustomPanel.defaultProps = {
    border: true,
};

export default CustomPanel;
