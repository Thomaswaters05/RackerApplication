using RackerApplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;


namespace RackerApplication.Controllers
    { 
        public class ReceiptController : ApiController
        {
            private ApplicationDbContext _context;

            //Use Dependency Injection instead
            public ReceiptController()
            {
                _context = new ApplicationDbContext();
            }

            [Route("api/receipt")]
            public List<Receipt> GetAll()
            {
                return _context.Receiptz.ToList();
            }

            [Route("api/receipt")]
            [HttpPost]
            public void Add(Receipt newReceipt)
            {
                _context.Receiptz.Add(newReceipt);
                _context.SaveChanges();
            }


        //THIS IS RECENTLY ADDED BELOW



    }
}
