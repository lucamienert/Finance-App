using Microsoft.AspNetCore.Identity;
using Server.Data;

namespace Server.Repository;

public interface IExpenseRepository
{
    Task<List<Expense>> GetExpensesByUserAsync(IdentityUser user);
    Task<Expense?> GetExpenseByIdAsync(int id);
    Task<Expense> AddExpenseAsync(Expense expense);
    Task UpdateExpenseAsync(Expense expense);
    Task DeleteExpenseAsync(int id);
}