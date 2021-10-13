const formatType = (typeText: string): string => typeText.slice(0, 1).toUpperCase() + typeText.slice(1);

const getRatingPercentValue = (rating: number): string => `${(Math.round(rating)) * 100 / 5}%`;

export {formatType, getRatingPercentValue};
