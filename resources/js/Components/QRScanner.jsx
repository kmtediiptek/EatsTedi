import React, { useState } from 'react'
import QrReader from 'react-qr-reader'

const QrScanner = () => {
    const [result, setResult] = useState('')

    const handleScan = (data) => {
        if (data) {
            setResult(data)
            console.log('Data QR Code yang di-scan:', data)
            // Kirim data yang di-scan ke backend untuk pemrosesan
            // Implementasikan logika pengiriman permintaan POST ke backend di sini
        }
    }

    const handleError = (error) => {
        console.error('Gagal memindai QR Code:', error)
    }

    return (
        <div>
            <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{ width: '100%' }}
            />

            <div>
                {result && (
                    <div>
                        <h2>Data QR Code yang di-scan:</h2>
                        <pre>{JSON.stringify(result, null, 2)}</pre>
                    </div>
                )}
            </div>
        </div>
    )
}

export default QrScanner
