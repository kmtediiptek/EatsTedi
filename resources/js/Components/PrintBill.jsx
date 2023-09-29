import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import PrimaryButton from './PrimaryButton';

const PrintBill = ({ invoice }) => {
    const printBill = () => {
        const doc = new jsPDF('p', 'pt', 'a4'); // Set orientation to portrait

        const title = 'RANDA';
        const orderId = `Invoice for Order ID: #${invoice.id}`;
        const footer = 'Thank you for choosing RANDA!';

        const titleStyles = {
            fontSize: 20,
            align: 'center'
        };

        const orderIdStyles = {
            fontSize: 14,
            align: 'center'
        };

        const footerStyles = {
            fontSize: 12,
            fontStyle: 'italic',
            align: 'center',
            margin: { top: 60, bottom: 0, left: 0, right: 0 },
        };

        const tableStyles = {
            startY: 50,
            margin: { top: 0, bottom: 50, left: 50, right: 50 },
            styles: {
                fillColor: '#ffffff', // Set the background color to white
                cellPadding: 5,
                fontSize: 12,
                overflow: 'linebreak'
            },
            headStyles: {
                fillColor: '#ffffff', // Set the background color to white
                textColor: '#333',
                fontStyle: 'bold',
                halign: 'center'
            },
            columnStyles: {
                0: { halign: 'left' },
                1: { halign: 'left' },
            }
        };

        const headers = [['', '']];
        const rows = [
            ['Order ID', `: ` + invoice.id],
            ['Table ID', `: ` + invoice.table_id],
            ['Total Price', `: Rp. ${invoice.total_price}`],
            ['Total Quantity', `: ` + invoice.quantity],
            ['Status', invoice.status === 1 ? ': Done' : ': In Progress'],
            ['Charge', `: Rp. ${invoice.charge}`],
            ['Change', `: Rp. ${invoice.charge - invoice.total_price}`],
            ['Name', `: ` +  invoice.name],
            ['', `` +  ''],
        ];

        doc.text(title, doc.internal.pageSize.width / 2, 25, titleStyles, null, 'center');
        doc.text(orderId, doc.internal.pageSize.width / 2, 45, orderIdStyles, null, 'center');

        doc.autoTable({
            head: headers,
            body: rows,
            ...tableStyles
        });

        const finalY = doc.autoTable.previous.finalY + 20; // Adjusted for footer position
        doc.text(footer, doc.internal.pageSize.width / 2, finalY, footerStyles, null, 'center');

        const pdfBlob = doc.output('blob');
        const pdfUrl = URL.createObjectURL(pdfBlob);

        // Open the PDF in a new tab or window for preview
        window.open(pdfUrl, '_blank');

        // Save the PDF
        doc.save('invoice.pdf');
    };

    return (
        <PrimaryButton
            onClick={printBill}
            className="bg-orange-600 text-white px-3 py-4 w-full rounded"
            disabled={invoice.charge < invoice.total_price}
        >
            Print & Confirm
        </PrimaryButton>
    );
};

export default PrintBill;
