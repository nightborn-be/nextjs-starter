import { AnimatePresence, motion } from "framer-motion"
import React, { useState, useEffect } from "react"
import ReactDOM from 'react-dom';
import { findDOMNode } from "react-dom"

export default function PopUp({ children, isOpen, onClose = () => {}, intensity = 4}) {

    const [isRendered, setIsRenderer] = useState(false);

    useEffect(() => {
        setIsRenderer(true);
    }, [])

    if(!isRendered) {
        return (
            <React.Fragment />
        )
    }

    return window !== undefined &&
            ReactDOM.createPortal(
                <AnimatePresence>
                    {isOpen && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="left-0 top-0 absolute z-40 h-full w-full flex flex-col items-center justify-center" style={{ backdropFilter: `blur(${intensity}px)` }}>
                            <motion.div initial={{ y: 20 }} animate={{ y: 0 }} exit={{y: -20}} className="absolute z-50 flex flex-1 items-center justify-center">
                                {children}
                            </motion.div>
                            <div onClick={onClose} className="h-full w-full absolute left-0 top-0" style={{ background: 'linear-gradient(0deg, rgba(24, 52, 94, 0.25), rgba(24, 52, 94, 0.25)), url(image.png)' }} />
                        </motion.div>
                    )}
                </AnimatePresence>,
                window.document.firstElementChild
            )
}