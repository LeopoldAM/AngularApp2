using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularApp.Data;
using AngularApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AngularApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactSearchController : ControllerBase
    {
        private readonly AngularAppContext _context;

        public ContactSearchController(AngularAppContext context)
        {
            _context = context;
        }

        // GET : api/ContactSearch/searchString
        [HttpGet("{searchString}")]
        public IList<Contact> ContactSearch(string searchString)
        {
            var movies = from m in _context.Contact
                         select m;

            if (!string.IsNullOrEmpty(searchString))
            {
                movies = movies.Where(s => s.Surname.Contains(searchString));
            }

            return movies.ToList();
        }
    }
}