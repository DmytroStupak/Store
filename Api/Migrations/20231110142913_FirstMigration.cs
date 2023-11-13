using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Api.Migrations
{
    /// <inheritdoc />
    public partial class FirstMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Product",
                columns: table => new
                {
                    ProductId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    Discription = table.Column<string>(type: "nvarchar(1000)", nullable: false),
                    Cost = table.Column<int>(type: "int", nullable: false),
                    Brand = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    Image = table.Column<string>(type: "nvarchar(100)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Product", x => x.ProductId);
                });

            migrationBuilder.InsertData(
                table: "Product",
                columns: new[] { "ProductId", "Brand", "Cost", "Discription", "Image", "Name" },
                values: new object[,]
                {
                    { 1, "Leatherman", 2640, "1. Тонкі пасатижі\r\n2. Звичайні пасатижі\r\n3. Кусачки для твердого дроту\r\n4. Кусачки для дроту\r\n5. Інструмент для зачищення дротів\r\n6. Клинок зі сталі 420НС\r\n7. Різак для відкривання упаковок\r\n8. Лінійка (1.5 дюйма/3.8 см)\r\n9. Відкривачка консервних банок\r\n10. Відкривачка пляшок\r\n11. Напилок для дерева/металу\r\n12. Викрутка Філліпс\r\n13. Середня викрутка\r\n14. Мала викрутка", "https://content.rozetka.com.ua/goods/images/big/57818359.jpg", "Мультитул Leatherman Rev Silver" },
                    { 2, "Leatherman", 5760, "• Гострогубці\r\n • Плоскогубці\r\n • Змінні кусачки для дротів\r\n • Змінні кусачки для товстих дротів\r\n • Ніж зі сталі 420HC\r\n • Серейторний ніж зі сталі 420HC\r\n • Пила\r\n • Ножиці\r\n • Напилок для дерева/металу\r\n • Алмазний напилок\r\n • Великий Bit Driver\r\n • Маленький Bit Driver\r\n • Середньорозмірна викрутка\r\n • Лінійка (8 inch/19 cm)\r\n • Відкривачка для пляшок\r\n • Відкривачка для банок\r\n • Інструмент для зачищення дротів", "https://content1.rozetka.com.ua/goods/images/big/179619842.jpg", "Мультиінструмент Leatherman WAVE PLUS" },
                    { 3, "Leatherman", 8920, "Гострогубці\r\nПлоскогубці\r\nЗнімні кусачки зі сталі 154CM\r\nЗмінні посилені кусачки зі сталі 154CM\r\nОбтиск для електричних роз'ємів\r\nКомбіноване лезо зі сталі 420HC\r\nПила\r\nУдарний молоточок\r\nЗмінний гак-різак\r\nІнструмент для витягання зам'ятих гільз\r\nЗмінний інструмент для розбирання вогнепальної зброї\r\nЗмінний бронзовий скребок\r\nОчисний стрижень/Адаптер для щітки\r\nКарабін / Відкривачка для пляшок\r\nВеликий Bit Driver\r\n1/2\" гайковий ключ\r\n3/8\" гайковий ключ", "https://content.rozetka.com.ua/goods/images/big/10981351.jpg", "Мультитул Leatherman Mut" },
                    { 4, "Leatherman", 7200, "Гострогубці\r\nПлоскогубці\r\nЗнімні кусачки зі сталі 154 см\r\nЗнімні кусачки для товстого дроту зі сталі 154 см\r\nІнструмент для зачищення дротів\r\nНіж з серейтором зі сталі 420НС\r\nПила\r\nМолоток\r\nШило з отвором\r\nВідкривачка для банок\r\nВідкривачка для пляшок\r\nТримач для шестигранних біт ¼ дюйма\r\nТримач для великих біт\r\nНакидний гайковий ключ ¼ дюйма\r\nКарабін/відкривачка для пляшок\r\nНакидний гайковий ключ 3/16 дюйма\r\nСвисток\r\nКресало\r\nАлмазна стругачка", "https://content2.rozetka.com.ua/goods/images/big/16891149.jpg", "Мультиінструмент Leatherman Signal" },
                    { 5, "Leatherman", 4800, "Інструменти в комплекті - Медичні ножиці з нержавіючої сталі 420 НС\r\nСтропоріз\r\nСклобій\r\nКільцеріз\r\nЧохол-кріплення з міцного полімеру\r\nЛінійка (5 см)\r\n\r\nВага - 168 г\r\nДовжина - 12.7 см\r\nЧохол у комплекті - Є\r\nТип - Повнорозмірні\r\nКількість інструментів - 6\r\nКраїна реєстрації бренду - США\r\nГарантія - 12 місяців\r\nКраїна-виробник товару - США", "https://content2.rozetka.com.ua/goods/images/big/10980378.jpg", "Мультитул Leatherman Raptor" },
                    { 6, "Leatherman", 3960, "Інструменти в комплекті\r\n- Комбінований ніж зі сталі 420НС;\r\n- Гострогубці;\r\n- Плоскогубці;\r\n- Захват для гайок і циліндрів;\r\n- Кусачки;\r\n- Кусачки для твердого дроту;\r\n- Бітотримач для великих біт;\r\n- Відкривачка для пляшок;\r\n- Карабін;\r\n- Змінні біти.\r\n\r\nВага - 142 г\r\nДовжина - 10 см\r\nЧохол у комплекті - Без чохла\r\nЗастосування - Для рибалки\r\nТип - Повнорозмірні\r\nКількість інструментів - 7\r\nГарантія - 5 років\r\nКраїна-виробник товару - США", "https://content1.rozetka.com.ua/goods/images/big/45289318.jpg", "Мультитул Leatherman Skeletool" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Product");
        }
    }
}
