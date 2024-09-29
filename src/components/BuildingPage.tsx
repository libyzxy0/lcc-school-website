import { Construction, Hammer } from "lucide-react"
import { Button } from '@/components/ui/button'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

export function BuildingPage({ name }: { name: string; }) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="flex flex-row items-center mb-8 justify-center space-x-2">
          <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Hammer className="w-20 h-20 text-[#007aff]" />
        </motion.div>
        <Construction className="w-24 h-24 text-[#007aff]" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4 font-playfair">Under Construction</h1>
        <p className="text-md text-gray-600 mb-3">
          {name}
        </p>
        <p className="text-md text-gray-600 mb-8">
          We're working hard to bring you something amazing. Please check back soon!
        </p>
        <Link to="/">
          <Button className="font-bold bg-[#007aff] hover:bg-[#007aff]/90" size="lg">Okay, Let Me Go Back</Button>
        </Link>
      </motion.div>
    </div>
  )
}