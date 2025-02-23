import React from "react";

const useLabel = (children: React.ReactNode): React.ReactNode => {
  const reverseText = (s: string): string => s.split("").reverse().join("");

  const transformChildren = (node: React.ReactNode): React.ReactNode => {
    if (typeof node === "string") return reverseText(node);

    if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
      return React.cloneElement(
        node,
        { ...node.props }, // Preserve existing props
        React.Children.map(node.props.children, transformChildren), // Recursively transform children
      );
    }

    return node;
  };

  return transformChildren(children);
};

export default useLabel;
