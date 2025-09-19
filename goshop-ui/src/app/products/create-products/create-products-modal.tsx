"use client";

import { Box, Modal } from "@mui/material";
import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { FormResponse } from "../../common/interfaces/form-response.interface";
import createProduct from "../actions/create-product";

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
    const onClose = () => {
        setResponse(undefined);
        handleClose();
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
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}
