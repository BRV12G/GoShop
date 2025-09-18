"use client";

import { Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import CreateProductsModal from "./create-products-modal";
import { useState } from "react";

export default function CreateProductFab() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
          <CreateProductsModal open={modalVisible} handleClose={() => setModalVisible(false)}/>
          <div className="absolute left-10 bottom-10">
            <Fab color="primary" onClick={() => setModalVisible(true)} >
                <AddIcon />
            </Fab>
          </div>
        </>
    )
}
