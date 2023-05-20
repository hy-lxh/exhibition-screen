import Header from '@/layout/header/index.tsx';
import Content from '@/layout/content/index.tsx';
import Footer from '@/layout/footer/index.tsx';
import UserTypePanel from '@/components/panels/user-type-panel/index.tsx';
import RealtimeLogPanel from '@/components/panels/realtime-log-panel/index.tsx';
import AccumulatePanel from '@/components/panels/accumulate-panel/index.tsx';
import LockNumYearPanel from '@/components/panels/locknum-year-panel/index.tsx';
import LockNumMonthPanel from '@/components/panels/locknum-month-panel/index.tsx';
import './App.less';
import CustomerTypePanel from '@/components/panels/customer-type-panel/index.tsx';
import IndustryDivisionPanel from '@/components/panels/industry-division-panel/index.tsx';
function App() {
    console.log(1111);
    return (
        <div className="app flex-col">
            <Header />
            <Content>
                <div className="aside flex-col">
                    <UserTypePanel />
                    <RealtimeLogPanel />
                </div>
                <div className="aside flex-col">
                    <AccumulatePanel />
                    <div className="aside flex">
                        <LockNumYearPanel />
                        <LockNumMonthPanel />
                    </div>
                </div>
                <div className="aside flex-col">
                    <CustomerTypePanel />
                    <IndustryDivisionPanel />
                </div>
            </Content>
            <Footer />
        </div>
    );
}

export default App;
