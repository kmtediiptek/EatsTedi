import { Toaster } from 'react-hot-toast'
import Navbar from './Navbar'

export default function App({ children }) {
    return (
        <div className="min-h-screen bg-white">

            <Toaster
                toastOptions={{
                    style: {
                        padding: '16px',
                        color: '#333',
                        background: 'white',
                        borderRadius: '4px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        width: '20rem',
                        height: '3.5rem',
                        fontSize: '1rem',
                        backgroundColor: 'white',
                        borderRadius: '0.375rem',
                        boxShadow : '2px 2px 2px #aaa'
                    },
                }}
            />

            <Navbar />
            <main>{children}</main>
        </div>
    )
}
