import React from 'react'
import { Box, Grid2, Typography } from '@mui/material'

function Footer() {
    return (
        <div>
            <Grid2 container>
                <Grid2 size={{ xs: 12, md: 12, lg: 12 }} pt={45}>
                    <Box
                        sx={{
                            overflow: "hidden",
                            width: "100vw", // Full viewport width for the container
                            display: "flex",
                            alignItems: "center",
                            position: "relative",
                        }}
                    >
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                display: "inline-block",
                                minWidth: "100%", // Make sure text spans at least the viewport
                                animation: "marquee 20s linear infinite",
                                whiteSpace: "nowrap",
                            }}
                        >
                            This is a running text using React.js and Material-UI.
                        </Typography>
                    </Box>
                </Grid2>
            </Grid2>
        </div>
    )
}

// CSS styles for the marquee effect
const styles = `
@keyframes marquee {
  0% {
    transform: translateX(100vw); // Start outside the viewport
  }
  100% {
    transform: translateX(-100%); // Move completely out of the viewport
  }
}
`;

// Add keyframe styles to the document
const addStyles = () => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
};

addStyles();

export default Footer
