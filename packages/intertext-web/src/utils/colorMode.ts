import { useColorMode } from "@chakra-ui/react"

function useColorModeFn () {
  const { colorMode } = useColorMode()
  return <T> (lightVal: T, darkVal: T): T => {
    return colorMode === "light"
      ? lightVal
      : darkVal
  }
}

export default useColorModeFn