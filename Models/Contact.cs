using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AngularApp.Models
{
    public class Contact
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Surname { get; set; }

        [Required]
        public string Firstname { get; set; }

        [Required]
        public string Address { get; set; }

        [Required]
        [Display(Name = "Postal Code")]
        [DataType(DataType.PostalCode)]
        public int PostalCode { get; set; }

        [Required]
        public string City { get; set; }

        [Required]
        [Display(Name = "Phone")]
        [DataType(DataType.PhoneNumber)]
        public int Phone { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
    }
}

