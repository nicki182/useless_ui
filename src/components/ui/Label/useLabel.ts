import React from "react";
const useLabel = (children: React.ReactNode) => {
  const changeLabel = (s: string): string => {
    const arrayString = s.split("");
    let newString = "";
    for (let i = arrayString.length - 1; i >= 0; i--) {
      const char = arrayString[i];
      newString += char;
    }
    return newString;
  };
  const getChildren = (children: React.ReactNode): React.ReactNode => {
    if (typeof children === "string") return changeLabel(children);
    if (React.isValidElement(children)) {
      return React.Children.map(children, (child) => {
        if (typeof child === "string") {
          return changeLabel(child);
        }
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            children: React.Children.map(
              child?.props?.children || [],
              (nestedChild) => {
                if (typeof nestedChild === "string") {
                  return changeLabel(nestedChild);
                }
                return nestedChild;
              },
            ),
          });
        }
        return child;
      });
    }
    return children;
  };
  return getChildren(children);
};
export default useLabel;
