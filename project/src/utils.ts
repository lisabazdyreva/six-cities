function formatType(typeText: string): string {
  return typeText.slice(0, 1).toUpperCase() + typeText.slice(1);
}

function getRatingPercentValue (rating: number): string {
  const roundingRating = Math.round(rating);
  return `${(roundingRating * 100 / 5)}%`;
}

export {formatType, getRatingPercentValue};
