import React from "react";
import { Drawer as DrawerPrimitive } from "vaul";
const DrawerRoot = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
);
DrawerRoot.displayName = "DrawerRoot";
export default DrawerRoot;
