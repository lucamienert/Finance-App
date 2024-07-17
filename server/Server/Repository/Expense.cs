using System;

namespace Server.Data
{
    public class Expense
    {
        public int Id { get; set; }
        public string? UserId { get; set; }
        public string Description { get; set; }
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }
    }
}