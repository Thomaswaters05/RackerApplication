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
        public int ReceiptId { get; set; }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ReceiptName { get; set; }
        public int ReceiptPrice { get; set; }
        public virtual ApplicationUser User { get; set; }

    }
}