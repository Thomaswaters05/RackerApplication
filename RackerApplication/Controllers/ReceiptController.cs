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
        
        //ALL OF THIS IS NEW - AND IM A BIT LOST

        public Receipt Get(int id)
        {
            return _context.Receiptz.Find(id);
        }

        [Route("api/receipt/")]
        [HttpPut]
        public HttpResponseMessage Edit(Receipt model)
        {
            if (ModelState.IsValid)
            {
                var x = Get(model.Id);

                x.FirstName = model.FirstName;
                x.ReceiptName = model.ReceiptName;
                x.RecieptPrice = model.RecieptPrice;
                x.IsComplete = model.IsComplete;

                _context.SaveChanges();

                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, model);
                return response;
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
        }

        public HttpResponseMessage Delete(int id)
        {
            Receipt rec = _context.Receiptz.Find(id);
            if (rec == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }
           _context.Receiptz.Remove(rec);
           _context.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.OK, rec);
        }


    }
}
