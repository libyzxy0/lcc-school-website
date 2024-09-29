import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
}
export function CardWhyLCC({
  icon, 
  title, 
  description 
}: Props) {
  return (
    <motion.div
      initial={ { opacity: 0, x: -20 }}
      whileInView={ { opacity: 1, x: 0 }}
      viewport={ { once: true }}
      transition={ { duration: 0.6 }}
      >
      <div className="flex flex-row space-x-3">
        <div className="bg-gray-100 p-3 rounded-lg h-fit text-[#007aff]">
          {icon}
        </div>
        <div>
          <h1 className="text-xl text-[#007aff] font-bold">{title}</h1>
          <p className="text-sm text-gray-700">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}