import { atom } from "recoil";
export const QuestionsAtom = atom({
  key: "questions",
  default: [],
});

export const scoreAtom = atom({
  key: "score",
  default: 0,
});
export const UserRanking = atom({
  key: "rank",
  default: [],
});
