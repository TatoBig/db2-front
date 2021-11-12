import { motion } from 'framer-motion'

const Header = () => {
  const list = {
    expand: {
      width: 330
    },
    fold: {
      width: 1
    }
  }

  const colors = {
    inherit: {
      background: '#FFFFFF'
    },
    color: {
      background: '#EEEEEE'
    }
  }

  return (
    <motion.div
      className="bg-gray-200 p-8 rounded-xl"
      initial="inherit"
      animate="color"
      variants={colors}
      transition={{ duration: 1, delay: 1.1 }}
    >
      <div className="flex justify-center text-6xl items-center">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -30 }}
          transition={{ duration: 2 }}
          className="font-semibold"
        >
          Framer
        </motion.div>
        <motion.div
          className="font-thin"
          animate={{ x: 0 }}
          initial={{ x: 30 }}
          transition={{ duration: 2 }}
        >
          note
        </motion.div>
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <img src="./logo.png" className="w-8 h-full" />
        </motion.div>
      </div>
      <div className="mt-2 flex justify-center">
        <motion.div
          className="bg-black h-1.5 rounded-xl w-64"
          initial="fold"
          animate="expand"
          variants={list}
          transition={{ duration: 1, delay: 1.1 }}
        />
      </div>
    </motion.div>
  )
}

export default Header