using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

    public class ApplicationContext : DbContext
    {
        public ApplicationContext()
        {
        }

        public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new ProductConfiguration());
            
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var builder = new ConfigurationBuilder();
            builder.SetBasePath(@"C:\Prog\Diploma\js\Api\Database\")
                   .AddJsonFile(@"config.json");

            var configuration = builder.Build().GetConnectionString("Database");
            optionsBuilder
                //.UseLazyLoadingProxies()
                .UseSqlServer(configuration);
        }
    }