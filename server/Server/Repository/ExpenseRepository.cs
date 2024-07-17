using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Server.Data;

namespace Server.Repository;

public class ExpenseRepository(DataContext context) : IExpenseRepository
{
    public async Task<List<Expense>> GetExpensesByUserAsync(IdentityUser user)
    {
        return await context.Expenses.Where(e => e.UserId == user.Id).ToListAsync();
    }

    public async Task<Expense?> GetExpenseByIdAsync(int id)
    {
        return await context.Expenses.FindAsync(id);
    }

    public async Task<Expense> AddExpenseAsync(Expense expense)
    {
        context.Expenses.Add(expense);
        await context.SaveChangesAsync();
        return expense;
    }

    public async Task UpdateExpenseAsync(Expense expense)
    {
        context.Entry(expense).State = EntityState.Modified;
        await context.SaveChangesAsync();
    }

    public async Task DeleteExpenseAsync(int id)
    {
        var expense = await context.Expenses.FindAsync(id);
        if (expense != null)
        {
            context.Expenses.Remove(expense);
            await context.SaveChangesAsync();
        }
    }
}