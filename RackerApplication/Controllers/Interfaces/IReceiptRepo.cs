using RackerApplication.Models;
using System.Collections.Generic;

namespace RackerApplication.Controllers.Interfaces
{
    public interface IReceiptRepo
    {
        void SaveReceipt(Receipt newReceipt);

        IEnumerable<Receipt> GetAllReceipts();
    }
}