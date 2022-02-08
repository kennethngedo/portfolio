import { Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, Link, Stack, Typography } from "@mui/material";
import React from "react";
import IconWrapper from "../components/atoms/IconWrapper";

const HomeSection = () => {

    return (
        <Box
            sx={{
                display: "flex",
                minHeight: { xs: "50vh", md: "60vh" },
                backgroundColor: "#131418",
                color: "white",
            }}
        >
            <Stack
                m={"auto"}
                p={2}
                sx={{ textAlign: { xs: "start", md: "center" } }}
                direction={"column"}
            >
                <Typography variant="subtitle1">Hello,</Typography>
                <Typography variant="h2">I'm Kenneth Ngedo</Typography>
                <Typography variant="subtitle1">
                    Senior Android Developer, Web Develeper
                </Typography>
                <Stack
                    mt={3}
                    alignSelf={{ xs: "start", md: "center" }}
                    direction={"row"}
                    spacing={2}
                >
                    <Link color="#1DA1F2" href="https://twitter.com/albusee" target="_blank">
                        <IconWrapper color=""><Twitter color="inherit" /></IconWrapper>
                    </Link>
                    <Link color="#E4405F" href="https://www.instagram.com/kennethngedo/" target="_blank">
                        <IconWrapper color="#E4405F"><Instagram color="inherit" /></IconWrapper>
                    </Link>
                    <Link color="#0A66C2" href="https://www.linkedin.com/feed/" target="_blank">
                        <IconWrapper color="#0A66C2"><LinkedIn color="inherit" /></IconWrapper>
                    </Link>
                </Stack>
            </Stack>
        </Box>
    );
};

export default HomeSection;
