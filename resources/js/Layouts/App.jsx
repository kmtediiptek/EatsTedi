
import Navbar from './Navbar';

export default function App({children, ...props}) {
    return (
        <div className="min-h-screen bg-white">
            <Navbar/>
            <main>{children}</main>
        </div>
    );
}
