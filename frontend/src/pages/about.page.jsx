import { Box, Typography } from "@mui/material";

export default function AboutPage() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "darkgrey",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 1,
      }}
    >
      {" "}
      <Box
        sx={{
          width: "100%",
          flexGrow: 1,
          backgroundColor: "darkgrey",
          display: "flow",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <img
          src={
            "https://leatherman-ua.net/storage/settings/emZ1jMf4uTJfNA3Xk962ySf2deh7zziTmdHRl7S6.jpg"
          }
          sx={{ align: "center" }}
        ></img>
        <Typography variant="h3" align="center">
          НАШ ЗАСНОВНИК
          <Typography>
            Під час бюджетної подорожі до Європи в 1975 році Тім Лезерман та
            його дружина Чау постійно стикалися з протіканням сантехніки в
            готелях та ремонтом свого старенького Fiat. Тім зрозумів, що
            потрібен універсальний інструмент на основі плоскогубців. "Я носив
            із собою ніж розвідника і використовував його для всього - від
            нарізання хліба до ремонту автомобіля. Але я постійно мріяв про
            плоскогубці!" Коли Тім повернувся до Штатів, він взяв свою ідею
            "мультиінструменту" та кілька ескізів, зроблених під час подорожі, і
            взявся до роботи.
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
}
