export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard"
}


export const fetchData = async (amount: number, difficulty: Difficulty) => {
  const url =`https://opentdb.com/api.php?amount=`;
  const response = await fetch(
    `${url}${amount}&difficulty=${difficulty}&type=multiple`
  );
  const data = await response.json();
  console.log(data);
  return data;
}
