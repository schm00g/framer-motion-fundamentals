import { motion } from 'framer-motion';

export default function Tap(){

    function onTap(){
        let date = new Date();
        console.log(`You are here: ${date}`);
    }

    return (
        <div className="example-container"> 
            <motion.div whileTap={{ scale: 0.8 }} onTap={onTap}/>
        </div>
    )
}