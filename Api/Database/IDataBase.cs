using Microsoft.AspNetCore.Mvc;

public interface IDataBase
{
    List<Product> GetProducts();
    Product GetProduct(int id);

}
