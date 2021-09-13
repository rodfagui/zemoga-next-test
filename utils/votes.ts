export const calculateQualificationBarPercentages = (
  thumbUpVotes: number,
  thumbDownVotes: number
) => {
  const totalVotes = thumbUpVotes + thumbDownVotes;
  const thumbUpPercentaje = Math.round((thumbUpVotes / totalVotes) * 100);
  const thumbDownPercentaje = 100 - thumbUpPercentaje;
  return [thumbDownPercentaje, thumbUpPercentaje];
};