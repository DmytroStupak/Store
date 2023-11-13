using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

public class ProductDb : IDataBase
{
    public ProductDb() { }
    public List<Product> GetProducts()
    {
        var products = new List<Product>();
        using (var db = new ApplicationContext())
        {
            products = db.Products.ToList();
        }
        return products;
    }

    public Product GetProduct(int id)
    {
        var product = new Product();
        using (var db = new ApplicationContext())
        {
            product = db.Products.Where(p=>p.Id == id).FirstOrDefault();
        }
        return product;
    }
}
