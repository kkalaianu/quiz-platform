import React, { useState } from "react";
import { Box, Dialog, DialogActions, DialogTitle } from "@mui/material";
import Button from "@mui/material/Button";
import MCQSingle from "./MCQ-Single";

const Addquiz = () => {
  const [popup, setPopup] = useState(true);
  //this func is show the option 
  const popupfunc = () => {
    setPopup(false);
  };
  return (
    
      <Box className="Box1">
        {popup ? (
          <Box className="Box2">
            <Dialog open={true} aria-labelledby="responsive-dialog-title">
              <DialogTitle
                id="responsive-dialog-title"
                sx={{ bgcolor: "Cornsilk" }}
              >
                {"Select Question Type"}
              </DialogTitle>
              <DialogActions
                sx={{
                  bgcolor: "Cornsilk",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  sx={{
                    fontSize: "16px",
                    marginBottom: "10px",
                    ":hover": { bgcolor: "rgb(206, 78, 78)", color: "white" },
                  }}
                  onClick={popupfunc}
                  variant="outlined"
                  color="error"
                >
                  MCQ<p style={{ fontSize: "10px" }}>(Single Correct)</p>
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
        ) : (
          <MCQSingle />
        )}
      </Box>
    
  );
};

export default Addquiz;
