import React, { useEffect, useState } from "react"
import { LayoutProps, getLayoutProps } from "@intertext/engine"
import { Image, useMultiStyleConfig } from "@chakra-ui/react"
import storage from "../../../common/storage"

const InxImage = ({
  src,
  children,
  ...rest
}: LayoutProps & {
  src: string
  children?: string
}) => {
  const [base, baseSet] = useState<string | null>("")
  const styles = useMultiStyleConfig("InxImage", {})

  useEffect(() => {
    baseSet(storage.getItem("urlBase"))
  }, [])

  if (!base) {
    console.warn("Image source not found")
    return null
  }

  return (
    <Image
      src={`${base}${src}`}
      alt={children}
      sx={{
        ...styles.base,
        ...getLayoutProps(rest),
      }}
    />
  )
}

export default InxImage
