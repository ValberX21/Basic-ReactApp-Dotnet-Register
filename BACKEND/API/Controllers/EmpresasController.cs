using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Data;
using System.Configuration;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using API.Models;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpresasController : BaseController
    {

        private readonly IConfiguration _config;

        public EmpresasController(IConfiguration config)
        {
            _config = config;
        }
        
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"SELECT Id_Empresa, NomeFantasia, RazaoSocial, CNPJ
            , Email,Telefone from Empresas";

            DataTable table = new DataTable();
            string sqlDataSource = _config.GetConnectionString("DbConnect");
            SqlDataReader myReader;
            using(SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using(SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader =  myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }


        [HttpPost]
        public JsonResult Post(Empresas emp)
        {
            string query = @"INSERT INTO Empresas 
                             VALUES (@NomeFantasia, @RazaoSocial, @CNPJ,
                                     @Email, @Telefone, GETDATE())";

            DataTable table = new DataTable();
            string sqlDataSource = _config.GetConnectionString("DbConnect");
            SqlDataReader myReader;
            using(SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using(SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@NomeFantasia", emp.NomeFantasia);
                    myCommand.Parameters.AddWithValue("@RazaoSocial", emp.RazaoSocial);
                    myCommand.Parameters.AddWithValue("@CNPJ", emp.CNPJ);
                    myCommand.Parameters.AddWithValue("@Email", emp.Email);
                    myCommand.Parameters.AddWithValue("@Telefone", emp.Telefone);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Empresa adicionada com sucesso");
        }
    }
}