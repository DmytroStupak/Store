using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Api.Controllers;

[Route("identity")]
[Authorize]
public class IdentityController : ControllerBase
{
    private readonly IDataBase _db;

    public IdentityController (IDataBase db)
    {
        _db = db;
    }

    [HttpGet]
    [Route("/identity")]
    public string Get()
    {
        var res = JsonConvert.SerializeObject(_db.GetProducts());

        return res;
    }

    [HttpGet]
    [Route("/identity/{id}")]
    public string Get([FromRoute] int id)
    {
        var res = JsonConvert.SerializeObject(_db.GetProduct(id));

        return res;
    }
}