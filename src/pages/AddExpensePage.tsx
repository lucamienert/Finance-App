import { useState } from "react";
import api from "../util/api";
import { useNavigate } from "react-router-dom";

const AddExpensePage = () => {
    const [description, setDescription] = useState<string>('');
    const [amount, setAmount] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [showAlert, setShowAlert] = useState(false);

    const navigate = useNavigate()

    const handleSubmit = (e: any) => {
        e.preventDefault();
    
        const newExpense = {
            description: description,
            amount: parseFloat(amount), // Ensure amount is converted to a number
            date: new Date(date) // Ensure date is converted to a Date object
          };
        api.post('/Expenses',newExpense, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(response => {
            setDescription('');
      setAmount('');
      setDate('');

      setShowAlert(true); // Show the alert after successful submission

      // Hide the alert after 3 seconds
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
          })
          .catch(error => console.error(error));
      };

      return (
        <>
            <h1 className="mb-4 mt-2">Adding Expenses</h1>

            {showAlert && (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                Successfullly added expense
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            )}
            
            <div className="card shadow">
            <div className="card-body w-50">
            <form onSubmit={handleSubmit}>
            <div>
                <label className="form-control-label">Description</label>
                <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required/>
            </div>
            <div>
                <label className="form-control-label">Amount (€)</label>
                <input type="number" className="form-control" value={amount} onChange={(e) => setAmount(e.target.value)} required/>
            </div>
            <div>
                <label className="form-control-label">Date</label>
                <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} required/>
            </div>
            <button className="btn btn-primary mt-2" type="submit">Add Expense</button>
            </form>
            </div>
            </div>
        </>
      );
}

export default AddExpensePage