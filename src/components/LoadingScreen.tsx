import { motion } from 'framer-motion';

const LoadingScreen = () => {
  // Symbole Mot'Aratra : Un éclair stylisé dans un cercle d'énergie
  const motAratraSymbol = (
    <motion.svg 
      width="100" 
      height="100" 
      viewBox="0 0 100 100" 
      className="absolute z-20"
    >
      {/* Cercle d'énergie (Électrique) */}
      <motion.circle 
        cx="50" cy="50" r="40" 
        stroke="#4CAF50" strokeWidth="2" fill="none" 
        initial={{ pathLength: 0, opacity: 0, rotate: -90 }} 
        animate={{ pathLength: 1, opacity: 1, rotate: 270 }} 
        transition={{ duration: 1.5, ease: "easeInOut" }} 
      />
      
      {/* L'éclair (Foudre électrique) */}
      <motion.path
        d="M55 20L35 50H50L45 80L65 50H50L55 20Z"
        fill="#00BCD4"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
      />
    </motion.svg>
  );

  return (
    <motion.div 
      className="fixed inset-0 bg-[#F9FBF9] flex flex-col items-center justify-center z-200" 
      exit={{ opacity: 0, scale: 1.1 }} 
      transition={{ duration: 0.6, ease: "anticipate" }}
    >
      <div className="relative flex flex-col items-center justify-center">
        
        {/* Le Symbole Tech */}
        <div className="mb-12 flex items-center justify-center w-24 h-24">
          {motAratraSymbol}
        </div>

        <motion.h2 
          className="w-full text-center text-[18px] md:text-[24px] uppercase tracking-[0.4em] text-[#2C3E50] font-bold px-4"
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Mot'Aratra Mada
        </motion.h2>

        {/* Barre de charge Turbo */}
        <div className="mt-8 w-48 h-0.5 bg-gray-200 relative overflow-hidden rounded-full">
          <motion.div 
            className="absolute h-full bg-linear-to-r from-[#4CAF50] to-[#00BCD4]" 
            initial={{ width: 0 }} 
            animate={{ width: "100%" }} 
            transition={{ duration: 2, ease: "linear" }} 
          />
        </div>
        
        <motion.p 
          className="mt-6 text-[13px] uppercase font-medium text-[#4CAF50] tracking-[0.2em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Initialisation de l'énergie...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;