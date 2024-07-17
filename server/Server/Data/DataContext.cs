using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Server.Data;

public class DataContext(DbContextOptions<DataContext> dbContextOptions) : IdentityDbContext(dbContextOptions)
{
    public DbSet<Expense> Expenses { get; set; }
}