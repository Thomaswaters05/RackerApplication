using RackerApplication.Controllers.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using RackerApplication.Models;

namespace RackerApplication.DAL
{
    public class ReceiptRepo : IReceiptRepo
    {
        readonly ApplicationDbContext _context;

        public IEnumerable<Receipt> GetAllReceipts()
        {
            return _context.Receipts;
        }

        public void SaveReceipt(Receipt newReceipt)
        {
            _context.Receipts.Add(newReceipt);
            _context.SaveChanges();
        }
    }
}