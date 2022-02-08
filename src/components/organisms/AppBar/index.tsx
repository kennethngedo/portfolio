import React from "react";
import { AppBar as MuiAppBar, Button, Container, Toolbar, Typography } from "@mui/material";

const AppBar = () => {
    return (
        <MuiAppBar color="primary" position="fixed">
            <Container >
                <Toolbar>
                    <Typography variant="h6" color="white" component="div" sx={{ flexGrow: 1 }}>
                        KENNETH NGEDO
                    </Typography>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Skills</Button>
                    <Button color="inherit">Works</Button>
                    <Button color="inherit">Contact</Button>
                </Toolbar>
            </Container>
        </MuiAppBar>
    );
}

export default AppBar;