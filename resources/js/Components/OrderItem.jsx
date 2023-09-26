import { IconChecks, IconCircleFilled, IconProgress } from '@tabler/icons-react';
import React from 'react';

export default function OrderItem({ invoice }) {

    return (
        <div className="flex gap-x-4 p-2 border border-gray-300 rounded text-white">
            <div className="w-16 h-16 bg-sky-500 rounded p-2 flex justify-center items-center">
                <h3 className='text-4xl font-semibold text-center'>T{invoice.table_id}</h3>
            </div>
            <div className="flex">
                <div className='h-16 w-32 text-slate-700 flex flex-col flex-1 justify-between'>
                    <h5 className='font-semibold text-lg text-slate-700 truncate'>{invoice.name}</h5>
                    <span className='text-slate-500'>{invoice.total_quantity} Item</span>
                </div>
                <div className='flex justify-center items-end flex-col flex-1 justify-between h-16 w-32 text-slate-800'>
                    <h5 className={`font-semibold text-xs flex items-center gap-x-2 py-1 px-2 rounded text-white ${invoice.status === 1 ? 'bg-green-500' : 'bg-yellow-400'}`}>{invoice.status === 1 ? <>
                        <IconChecks size={18} />  Done
                    </> :
                        <>
                            <IconProgress size={18} />  In Progress
                        </>
                    } </h5>
                    <div className='text-slate-500 flex items-center gap-x-2'> <IconCircleFilled size={16} className={`${invoice.charge !== 0 ? 'text-green-500' : 'text-red-500'}`} />{invoice.charge !== 0 ? 'Paid' : 'Unpaid'}</div>
                </div>
            </div>
        </div>
    );
}
