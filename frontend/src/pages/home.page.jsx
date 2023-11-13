import { Box, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "grey",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={
          "https://go.skimresources.com/?id=66154X1501138&isjs=1&jv=15.4.2-stackpath&sref=https%3A%2F%2Fgearjunkie.com%2Fproj%2Fleatherman%2Fleatherman-tool-tales-saved-my-life-stories&url=https%3A%2F%2Fs3.amazonaws.com%2Fimages.gearjunkie.com%2Fuploads%2F2017%2F06%2FLeatherman-Tool-Tales.jpg&xs=1&xtz=-120&xuuid=ba8584872fee5e5a0f24da88881c6b53&abp=1&xjsf=other_click__auxclick%20%5B2%5D"
        }
      ></img>
    </Box>
  );
}
