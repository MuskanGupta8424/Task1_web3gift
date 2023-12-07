import React,{useEffect} from "react";
// import {Link} from "react-router-dom";
import styles from "../style/card.module.css";
import {motion} from "framer-motion";

export default function Card3() {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const container1 = {
    hidden: { opacity: 1, scale: 0 },
visible: {
opacity: 1,
scale: 1,
transition: {
  delayChildren: 0.3,
  staggerChildren: 0.5,
}
}
  };
 


  return (
    <>
      <motion.div className={styles.card3}
      initial="hidden"
      animate="visible"
      variants={{ container1}}
      transition={{ duration: 1}}
      >
        <motion.div 
         layout
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{
           opacity: { ease: "linear" },
           type: "spring",
           layout: { duration: 0.3 },
         }}
        className={styles.walletboxheading3}>
          <p className="text-white mt-3 text-lg">
            To start and gain experience we recommend to use software wallet
            option and another. How to get your wallet use below links for
            Step-by-step guideline. <br />
            Be aware: this wallet is not hosted by yourself, therefore it is
            perfecet to start, but if you want to go big, you have to get a new
            wallet
            <br />
            <br />
            <br />
            <span className="mt-6 text-white font-bold">
              Get your wallet today, Use below links for step by step
              understanding.
            </span>
          </p>
          <button className={styles.btn}>
            <a className="font-bold underline" href="#">
              Explore Crypto Wallet
            </a>
          </button>
          <button className={styles.btn}>
            <a className="font-bold underline" href="#">
              Click to watch
            </a>
          </button>
        </motion.div>
      </motion.div>
    </>
  );
}
