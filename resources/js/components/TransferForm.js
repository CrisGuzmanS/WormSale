import React from 'react';

const TransferForm = ({ form, handleChange, handleSubmit }) => (
    // Formulario
    <form className="form-inline justify-content-center" onSubmit={handleSubmit}>
        <div className="form-group mb-2">
            {/* Input description */}
            <div className="form-group mb-2">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                />
            </div>
            {/* Input amount */}
            <div className="input-group mx-sm-2 mb-2">
                <div className="input-group-prepend">
                    <div className="input-group-text">$</div>
                </div>
                <input
                    type="number"
                    className="form-control"
                    name="amount"
                    placeholder="Amount"
                    value={form.amount}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn btn-primary mb-2">Add</button>
        </div>
    </form>
);

export default TransferForm;