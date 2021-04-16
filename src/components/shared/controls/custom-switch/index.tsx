import { motion } from "framer-motion";

export default function Switch({value, onChange}) {

    // Functions
    function handleClicked() {
        onChange(!value);
    }

    if(value) {
        return (
            <div onClick={handleClicked} className="w-[45px] bg-[#2BD9A2] rounded-full p-0.5 cursor-pointer flex flex-row items-center justify-items-end">
                <motion.div key="switch-activated" initial={{marginLeft: 0}} animate={{marginLeft: 21}} className="w-5 h-5 rounded-full bg-white" />
            </div>
        )
    }

    return (
        <div onClick={handleClicked} className="w-[45px] bg-[#ADAEB0] rounded-full p-0.5 cursor-pointer flex flex-row items-center">
            <motion.div key="switch-deactivated" initial={{marginLeft: 20}} animate={{marginLeft: 0}} className="w-5 h-5 rounded-full bg-white" />
        </div>
    )
}