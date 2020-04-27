using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AngularApp.Models;

namespace AngularApp.Data
{
    public class AngularAppContext : DbContext
    {
        public AngularAppContext (DbContextOptions<AngularAppContext> options)
            : base(options)
        {
        }

        public DbSet<Contact> Contact { get; set; }
    }
}
