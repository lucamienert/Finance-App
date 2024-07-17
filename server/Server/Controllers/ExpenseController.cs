using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Server.Data;
using Server.Repository;

namespace Server.Controllers;

[Authorize]
[Route("api/[controller]")]
[ApiController]
public class ExpensesController(IExpenseRepository expenseRepository, UserManager<IdentityUser> userManager) : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Expense>>> GetExpenses()
    {
        var user = await userManager.GetUserAsync(User);
        if (user == null)
        {
            return Unauthorized();
        }
        var expenses = await expenseRepository.GetExpensesByUserAsync(user);
        return Ok(expenses);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Expense>> GetExpense(int id)
    {
        var expense = await expenseRepository.GetExpenseByIdAsync(id);

        if (expense == null)
        {
            return NotFound();
        }

        return Ok(expense);
    }

    [HttpPost]
    public async Task<ActionResult<Expense>> PostExpense(Expense expense)
    {
        var user = await userManager.GetUserAsync(User);
        if (user == null)
        {
            return Unauthorized();
        }

        expense.UserId = user.Id;
        await expenseRepository.AddExpenseAsync(expense);

        return CreatedAtAction(nameof(GetExpense), new { id = expense.Id }, expense);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutExpense(int id, Expense expense)
    {
        if (id != expense.Id)
        {
            return BadRequest();
        }

        await expenseRepository.UpdateExpenseAsync(expense);

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteExpense(int id)
    {
        await expenseRepository.DeleteExpenseAsync(id);
        return NoContent();
    }
}