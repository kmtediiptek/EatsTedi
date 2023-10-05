import { Html5QrcodeScanner } from 'html5-qrcode'
import { useEffect } from 'react'

const qrcodeRegionId = "html5qr-code-full-region"

const createConfig = (props) => {
    let config = {}
    if (props.fps) {
        config.fps = props.fps
    }
    if (props.qrbox) {
        // Modify qrbox to change the scanning size
        config.qrbox = props.qrbox
    } else {
        config.qrbox = 1200 // Default size
    }
    if (props.aspectRatio) {
        config.aspectRatio = props.aspectRatio
    }
    if (props.disableFlip !== undefined) {
        config.disableFlip = props.disableFlip
    }
    return config
}

const Html5QrcodePlugin = (props) => {

    useEffect(() => {
        const config = createConfig(props)
        const verbose = props.verbose === true

        if (!props.qrCodeSuccessCallback) {
            throw "qrCodeSuccessCallback is a required callback."
        }

        const html5QrcodeScanner = new Html5QrcodeScanner(qrcodeRegionId, config, verbose)
        html5QrcodeScanner.render(props.qrCodeSuccessCallback, props.qrCodeErrorCallback)

        return () => {
            html5QrcodeScanner.clear().catch(error => {
                console.error("Failed to clear html5QrcodeScanner. ", error)
            })
        }
    }, [])

    return (
        <div id={qrcodeRegionId} style={{ width: '100%', height: '100%' }} />
    )
}

export default Html5QrcodePlugin
