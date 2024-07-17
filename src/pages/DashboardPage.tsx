import { useEffect, useState } from "react"
import api from "../util/api"
import LoadingPage from "./LoadingPage"
import Sankey from "../charts/Sankey"

import DataTable from 'datatables.net-bs5';
import 'datatables.net-buttons-bs5';
import 'datatables.net-responsive-bs5';
import { useNavigate } from "react-router-dom"

const DashboardPage = () => {
    const [expenses, setExpenses] = useState([])
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/Expenses')
                setExpenses(response.data)
            } catch (error) {
                console.error('Error fetching data:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    const handleDeleteExpense = (expenseId: number) => {
        api.delete(`/Expenses/${expenseId}`)
            .then(_ => {
                navigate(0)
            })
          .catch(error => console.error(error));
    }

    if (loading)
      return <LoadingPage />

    const incomes = [
        { source: 'Job', amount: 5000 },
        { source: 'Investments', amount: 2000 }
    ];
    
    const expensesTest = [
        { category: 'Food', amount: 300 },
        { category: 'Utilities', amount: 150 },
        { category: 'Entertainment', amount: 200 },
        { category: 'Food', destination: 'Groceries', amount: 100 },
        { category: 'Food', destination: 'Restaurants', amount: 200 },
        { category: 'Utilities', destination: 'Electricity', amount: 100 },
        { category: 'Utilities', destination: 'Water', amount: 50 },
        { category: 'Entertainment', destination: 'Movies', amount: 100 },
        { category: 'Entertainment', destination: 'Concerts', amount: 100 }
    ];
    
    // Generate fake data for Google Charts
    const generateChartData = (incomes: any, expenses: any) => {
        const data = [
            ['From', 'To', 'Amount'],
            ...incomes.map((income: any) => [income.source, 'Income', Number(income.amount)]),
            ...expenses.flatMap((expense: any) => [
            [incomes.source, expense.category, Number(expense.amount)],
            [expense.category, expense.destination || '', Number(expense.amount)]
            ])
        ];
    
        return data;
    };

    const data = generateChartData(incomes, expensesTest)
    new DataTable('#table')

    return (
        <div className="content-wrapper d-flex flex-column flex-grow-1 global-background">
            <div className="content flex-grow-1">
                <h1 className="mb-4 mt-2">Welcome to the Dashboard</h1>

                <div>
                    <div className="card shadow">
                        <div className="card-body">
                            <table className="table w-100" id="table">
                                <thead>
                                    <tr>
                                        <th className="th">Description</th>
                                        <th className="th">Amount</th>
                                        <th className="th">&nbsp;</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {expenses.map((expense: any) => (
                                    <tr key={expense.id}>
                                        <td>{expense.description}</td>
                                        <td>{expense.amount}€</td>
                                        <td><button className="btn btn-danger" onClick={() => handleDeleteExpense(expense.id)}>X</button></td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div> 

                    <div className="card shadow mt-2">
                        <div className="card-body">
                            <Sankey chartData={data} />
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}


export default DashboardPage