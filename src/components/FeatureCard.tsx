
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index?: number;
}

const FeatureCard = ({ icon, title, description, index = 0 }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-6 hover:border-herb-200"
    >
      <div className="w-12 h-12 bg-herb-50 rounded-xl flex items-center justify-center mb-5 text-herb-700 group-hover:bg-herb-100 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-medium text-herb-900 mb-3">{title}</h3>
      <p className="text-herb-600">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
