import { ReactNode } from 'react';
import './index.less';
export default function Content({ children }: { children: ReactNode[] }) {
    return <div className="content flex-1 h-0 border-box">{children}</div>;
}
