export async function connectToPrinter() {
    try {
        const port = await navigator.serial.requestPort()
        await port.open({ baudRate: 9600 })
        console.log('Terhubung dengan printer:', port.getInfo())

        return port
    } catch (error) {
        console.error('Gagal terhubung dengan printer:', error)
        throw error
    }
}

export async function printToPrinter(port, data) {
    try {
        const writer = port.writable.getWriter()
        await writer.write(data)
        await writer.releaseLock()
        console.log('Data terkirim ke printer:', data)
    } catch (error) {
        console.error('Gagal mengirim ke printer:', error)
        throw error
    }
}
