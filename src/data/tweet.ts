import { Tweet } from "@/types/tweet";
import { user, user2, user3 } from "./user";

export const tweets: Tweet[] = [
  {
    id: 123,
    user: user,
    body: "Fim de tarde mágico! ✨ #RJ #beach",
    image:
      "https://riodejaneirobycariocas.com/wp-content/uploads/2022/08/sunset-ipanema-riobycariocas-1.jpg",
    likeCount: 523,
    commentCount: 61,
    retweetCount: 8,
    liked: false,
    retweeted: false,
    date: new Date(2024, 9, 31, 16, 30, 0),
  },
  {
    id: 127,
    user: user2,
    body: "Que vista maravilhosa...😍 #Paris",
    image:
      "https://st.depositphotos.com/68756030/58026/i/450/depositphotos_580268280-stock-photo-back-view-stylish-woman-holding.jpg",
    likeCount: 465,
    commentCount: 85,
    retweetCount: 2,
    liked: true,
    retweeted: false,
    date: new Date(2024, 9, 28, 10, 30, 0),
  },
  {
    id: 128,
    user: user,
    body: "Finalmente férias... Patriu #RJ ☀️🏖️✈️",
    image: "",
    likeCount: 225,
    commentCount: 29,
    retweetCount: 0,
    liked: false,
    retweeted: false,
    date: new Date(2024, 9, 27, 18, 0, 0),
  },

  {
    id: 126,
    user: user3,
    body: "Noite de #Libertadores no Morumbi! 🔴⚪⚫ #SPFC #Tricolor ",
    image:
      "https://static.gazetaesportiva.com/uploads/53026304653_ed5af700e6_o.jpg",
    likeCount: 86,
    commentCount: 7,
    retweetCount: 4,
    liked: true,
    retweeted: false,
    date: new Date(2024, 9, 30, 20, 47, 0),
  },
  {
    id: 124,
    user: user3,
    body: "Partiu #Morumbi, vamos São Paulo! #Libertadores",
    image: "",
    likeCount: 15,
    commentCount: 1,
    retweetCount: 8,
    liked: true,
    retweeted: false,
    date: new Date(2024, 9, 30, 20, 47, 0),
  },
  {
    id: 125,
    user: user2,
    body: '"Bonjour", galera! 🇫🇷',
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/77/Eiffel_Tower_Marsfeld_Paris.jpg",
    likeCount: 342,
    commentCount: 41,
    retweetCount: 0,
    liked: false,
    retweeted: false,
    date: new Date(2024, 9, 30, 15, 20, 0),
  },
];
