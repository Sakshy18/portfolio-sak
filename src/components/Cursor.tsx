import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

export default function Cursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [text, setText] = useState("")

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const x = useSpring(mouseX, { stiffness: 500, damping: 40 })
  const y = useSpring(mouseY, { stiffness: 500, damping: 40 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleOver = (e: Event) => {
      const target = e.target as HTMLElement
      const mode = target.getAttribute("data-cursor")
      const label = target.getAttribute("data-cursor-text")

      if (mode) {
        setIsHovering(true)
        setText(label || "")
      }
    }

    const handleOut = () => {
      setIsHovering(false)
      setText("")
    }

    window.addEventListener("mousemove", move)
    document.addEventListener("mouseover", handleOver)
    document.addEventListener("mouseout", handleOut)

    return () => {
      window.removeEventListener("mousemove", move)
      document.removeEventListener("mouseover", handleOver)
      document.removeEventListener("mouseout", handleOut)
    }
  }, [])

  return (
    <motion.div
      style={{
        translateX: x,
        translateY: y,
      }}
      className={`
        fixed top-0 left-0 z-[9999]
        pointer-events-none
        -translate-x-1/2 -translate-y-1/2
        flex items-center justify-center
        rounded-full
        transition-all duration-200
        ${isHovering ? "w-20 h-20 bg-green-500 text-black" : "w-3 h-3 bg-green-500"}
      `}
    >
      {isHovering && (
        <span className="text-xs font-medium tracking-wide">
          {text}
        </span>
      )}
    </motion.div>
  )
}
