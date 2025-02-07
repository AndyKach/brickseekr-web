export const getDimensions = (dimensions) => {
  if (!dimensions) return null;

  if (
    "height" in dimensions &&
    "width" in dimensions &&
    "depth" in dimensions
  ) {
    return `${dimensions.height} x ${dimensions.width} x ${dimensions.depth} cm`;
  }

  if ("dim_x" in dimensions && "dim_y" in dimensions && "dim_z" in dimensions) {
    return `${dimensions.dim_x} x ${dimensions.dim_y} x ${dimensions.dim_z} cm`;
  }

  return null;
};
