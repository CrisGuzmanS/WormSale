import React from 'react';

const TransferList = ({ transfers }) => (
    <table className="table table-striped">
        <tbody>
            {transfers.map((transfer) => (
                <tr key={transfer.id}>
                    <td>{transfer.description}</td>
                    <td className={transfer.amount > 0 ? 'text-success' : 'text-danger'} >
                        <b>{transfer.amount}</b>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);


export default TransferList;