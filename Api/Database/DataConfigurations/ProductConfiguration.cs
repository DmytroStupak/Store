using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

    public class ProductConfiguration : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> builder)
        {
            builder.ToTable("Product").HasKey(a => a.Id);
            builder.Property(a => a.Id).IsRequired()
                                       .HasColumnName("ProductId")
                                       .HasColumnType("int")
                                       .ValueGeneratedOnAdd();
            builder.Property(a => a.Name).IsRequired()
                                         .HasColumnName("Name")
                                         .HasColumnType("nvarchar(50)");
            builder.Property(a => a.Discription).IsRequired()
                                                .HasColumnName("Discription")
                                                .HasColumnType("nvarchar(1000)");
            builder.Property(a => a.Brand).IsRequired()
                                          .HasColumnName("Brand")
                                          .HasColumnType("nvarchar(50)");
            builder.Property(a => a.Cost).IsRequired()
                                          .HasColumnName("Cost")
                                          .HasColumnType("int");
            builder.Property(a => a.Image).IsRequired(false)
                                                 .HasColumnName("Image")
                                                 .HasColumnType("nvarchar(100)");
            
            builder.HasData(
                new Product { 
                    Id = 1, 
                    Name = "Мультитул Leatherman Rev Silver", 
                    Brand = "Leatherman", 
                    Discription = "" +
                    "1. Тонкі пасатижі\r\n" +
                    "2. Звичайні пасатижі\r\n" +
                    "3. Кусачки для твердого дроту\r\n" +
                    "4. Кусачки для дроту\r\n" +
                    "5. Інструмент для зачищення дротів\r\n" +
                    "6. Клинок зі сталі 420НС\r\n" +
                    "7. Різак для відкривання упаковок\r\n" +
                    "8. Лінійка (1.5 дюйма/3.8 см)\r\n" +
                    "9. Відкривачка консервних банок\r\n" +
                    "10. Відкривачка пляшок\r\n" +
                    "11. Напилок для дерева/металу\r\n" +
                    "12. Викрутка Філліпс\r\n" +
                    "13. Середня викрутка\r\n" +
                    "14. Мала викрутка",
                    Cost = new decimal(2640),
                    Image = @"https://content.rozetka.com.ua/goods/images/big/57818359.jpg"
                },
                new Product { 
                    Id = 2,
                    Name = "Мультиінструмент Leatherman WAVE PLUS",
                    Brand = "Leatherman",
                    Discription = "• Гострогубці\r\n • Плоскогубці\r\n • Змінні кусачки для дротів\r\n • Змінні кусачки для товстих дротів\r\n • Ніж зі сталі 420HC\r\n • Серейторний ніж зі сталі 420HC\r\n • Пила\r\n • Ножиці\r\n • Напилок для дерева/металу\r\n • Алмазний напилок\r\n • Великий Bit Driver\r\n • Маленький Bit Driver\r\n • Середньорозмірна викрутка\r\n • Лінійка (8 inch/19 cm)\r\n • Відкривачка для пляшок\r\n • Відкривачка для банок\r\n • Інструмент для зачищення дротів",
                    Cost = new decimal(5760),
                    Image = @"https://content1.rozetka.com.ua/goods/images/big/179619842.jpg"
                },
                new Product
                {
                    Id = 3,
                    Name = "Мультитул Leatherman Mut",
                    Brand = "Leatherman",
                    Discription = "Гострогубці\r\nПлоскогубці\r\nЗнімні кусачки зі сталі 154CM\r\nЗмінні посилені кусачки зі сталі 154CM\r\nОбтиск для електричних роз'ємів\r\nКомбіноване лезо зі сталі 420HC\r\nПила\r\nУдарний молоточок\r\nЗмінний гак-різак\r\nІнструмент для витягання зам'ятих гільз\r\nЗмінний інструмент для розбирання вогнепальної зброї\r\nЗмінний бронзовий скребок\r\nОчисний стрижень/Адаптер для щітки\r\nКарабін / Відкривачка для пляшок\r\nВеликий Bit Driver\r\n1/2\" гайковий ключ\r\n3/8\" гайковий ключ",
                    Cost = new decimal(8920),
                    Image = @"https://content.rozetka.com.ua/goods/images/big/10981351.jpg"
                },
                new Product
                {
                    Id = 4,
                    Name = "Мультиінструмент Leatherman Signal",
                    Brand = "Leatherman",
                    Discription = "Гострогубці\r\nПлоскогубці\r\nЗнімні кусачки зі сталі 154 см\r\nЗнімні кусачки для товстого дроту зі сталі 154 см\r\nІнструмент для зачищення дротів\r\nНіж з серейтором зі сталі 420НС\r\nПила\r\nМолоток\r\nШило з отвором\r\nВідкривачка для банок\r\nВідкривачка для пляшок\r\nТримач для шестигранних біт ¼ дюйма\r\nТримач для великих біт\r\nНакидний гайковий ключ ¼ дюйма\r\nКарабін/відкривачка для пляшок\r\nНакидний гайковий ключ 3/16 дюйма\r\nСвисток\r\nКресало\r\nАлмазна стругачка",
                    Cost = new decimal(7200),
                    Image = @"https://content2.rozetka.com.ua/goods/images/big/16891149.jpg"
                },
                new Product
                {
                    Id = 5,
                    Name = "Мультитул Leatherman Raptor",
                    Brand = "Leatherman",
                    Discription = "Інструменти в комплекті - Медичні ножиці з нержавіючої сталі 420 НС\r\nСтропоріз\r\nСклобій\r\nКільцеріз\r\nЧохол-кріплення з міцного полімеру\r\nЛінійка (5 см)\r\n\r\nВага - 168 г\r\nДовжина - 12.7 см\r\nЧохол у комплекті - Є\r\nТип - Повнорозмірні\r\nКількість інструментів - 6\r\nКраїна реєстрації бренду - США\r\nГарантія - 12 місяців\r\nКраїна-виробник товару - США",
                    Cost = new decimal(4800),
                    Image = @"https://content2.rozetka.com.ua/goods/images/big/10980378.jpg"
                },
                new Product
                {
                    Id = 6,
                    Name = "Мультитул Leatherman Skeletool",
                    Brand = "Leatherman",
                    Discription = "Інструменти в комплекті\r\n- Комбінований ніж зі сталі 420НС;\r\n- Гострогубці;\r\n- Плоскогубці;\r\n- Захват для гайок і циліндрів;\r\n- Кусачки;\r\n- Кусачки для твердого дроту;\r\n- Бітотримач для великих біт;\r\n- Відкривачка для пляшок;\r\n- Карабін;\r\n- Змінні біти.\r\n\r\nВага - 142 г\r\nДовжина - 10 см\r\nЧохол у комплекті - Без чохла\r\nЗастосування - Для рибалки\r\nТип - Повнорозмірні\r\nКількість інструментів - 7\r\nГарантія - 5 років\r\nКраїна-виробник товару - США",
                    Cost = new decimal(3960),
                    Image = @"https://content1.rozetka.com.ua/goods/images/big/45289318.jpg"
                }
                );
        }
    }