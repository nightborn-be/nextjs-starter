import { motion } from 'framer-motion';
import React from 'react';
import { IconTextButtonProps } from './props';
import Image from "next/image";
import Flex from '../../composers/flex';
import Container from '../../composers/container';


const IconTextButton = ({ icon, text, shape = 'square', height = '48px', width = '48px', onClick, className, ...rest }: IconTextButtonProps) => {

    //Functions
    function getIconBgColor() {
        switch (icon) {
            case 'trashcan':
                return '#2D2C2C';
            default:
                break;
        }
    }

    return (
        <motion.button
            style={{ width: width, height: height, backgroundColor: getIconBgColor() }}
            whileHover={{ scale: 0.9875 }}
            whileTap={{ scale: 1.0125 }}
            className={`${shape === 'square' ? 'rounded-lg' : 'rounded-full'} ${className}`}
            onClick={onClick}
        >
            <Container className="p-[10px]">
                <Flex align='center'>
                    <Image src={`/assets/icons/${icon}.svg`} height='28px' width='28px' />
                    <Container className=" text-white pl-2 font-semibold">
                        {text}
                    </Container>
                </Flex>
            </Container>
        </motion.button>
    )
}

export default IconTextButton;