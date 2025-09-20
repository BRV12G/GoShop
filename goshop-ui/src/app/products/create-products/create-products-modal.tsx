"use client";

import { Box, Modal, Typography } from "@mui/material";
import { Button, Stack, TextField } from "@mui/material";
import { CSSProperties, useState } from "react";
import { FormResponse } from "../../common/interfaces/form-response.interface";
import createProduct from "../actions/create-product";
import  CloudUploadOutlined  from "@mui/icons-material/CloudUpload";

const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};


const fileInputStyles: CSSProperties = {
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
};


interface CreateProducstModalProps {
  // props interface for the modal of creating products
  open: boolean;
  handleClose: () => void;
}

export default function CreateProductsModal({
  open,
  handleClose,
}: CreateProducstModalProps) {
    const [response, setResponse] = useState<FormResponse>();
    const [fileName, setFileName] = useState("")
    const onClose = () => {
        setResponse(undefined);
        handleClose();
        setFileName("");
    }
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={styles}>
        <form className="w-full max-w-xs" action={async (formData) => {
            const response = await createProduct(formData);
            setResponse(response);
            if (!response.error) {
                onClose();
            }
        }}>
          <Stack spacing={2}>
            <TextField
              name="name"
              label="name"
              variant="outlined"
              helperText={response?.error}
              error={!!response?.error}
              required
            />
            <TextField
              name="description"
              label="Description"
              variant="outlined"
              helperText={response?.error}
              error={!!response?.error}
              required
            />
            <TextField
              name="price"
              label="Price"
              variant="outlined"
              helperText={response?.error}
              error={!!response?.error}
              required
            />
            <Button component="label" variant="outlined" startIcon={<CloudUploadOutlined />}>
                 Upload File
                <input type="file" name="image" style={fileInputStyles} onChange={(e) => e.target.files && setFileName(e.target.files[0].name)}></input>
            </Button>
            <Typography variant="body2">{fileName}</Typography>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}
