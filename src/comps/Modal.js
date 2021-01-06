import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ selectedImage, setSelectedImage }) => {

    const clickHandler = (event) => {
        if (event.target.classList.contains("backdrop")) {
            setSelectedImage(null)
        }
    }

    return (
        <motion.div className="backdrop" onClick={clickHandler}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <img src={ selectedImage } alt="" />
        </motion.div>
    )

}

export default Modal;