using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace RackerApplication.Models
{
    public class Receipt
    {
        [Key]
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string ReceiptName { get; set; }
        public int RecieptPrice { get; set; }
        public bool IsComplete { get; set; }
    }
}