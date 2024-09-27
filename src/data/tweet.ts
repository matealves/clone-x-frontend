import { Tweet } from "@/types/tweet";
import { user } from "./user";

export const tweet: Tweet = {
  id: 123,
  user: user,
  body: "Outro dia mágico!",
  image:
    "https://img.freepik.com/fotos-gratis/retrato-3d-de-pessoas_23-2150793856.jpg",
  likeCount: 523,
  commentCount: 61,
  retweetCount: 0,
  liked: true,
  retweeted: false,
  date: new Date(2024, 8, 1, 10, 0, 0),
};
