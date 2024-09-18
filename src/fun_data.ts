export type Show = {
  image: string;
  title: string;
};
function show(title: string, image: string): Show {
  return { title, image };
}

export const movies: Show[] = [
  show(
    "Everything Everywhere All at Once",
    "https://m.media-amazon.com/images/M/MV5BNDc5ZWUyMDctNTE5OS00OWI5LWJiM2MtOThmNzNiYTY1OWQxXkEyXkFqcGc@._V1_.jpg",
  ),
  show(
    "Interstellar",
    "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  ),
  show(
    "The Hunger Games",
    "https://m.media-amazon.com/images/M/MV5BZWI1OWM3ZmEtNjQ2OS00NzI2LTgwNWMtZDAyMGI1OTM2MzJmXkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_FMjpg_UY2756_.jpg",
  ),
  show(
    "Crazy Rich Asians",
    "https://m.media-amazon.com/images/M/MV5BMTYxNDMyOTAxN15BMl5BanBnXkFtZTgwMDg1ODYzNTM@._V1_.jpg",
  ),
  show(
    "The Hunger Games: Catching Fire",
    "https://m.media-amazon.com/images/M/MV5BMTAyMjQ3OTAxMzNeQTJeQWpwZ15BbWU4MDU0NzA1MzAx._V1_FMjpg_UX1000_.jpg",
  ),
  show(
    "Avenger's Endgame",
    "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
  ),
  show(
    "Dune",
    "https://m.media-amazon.com/images/M/MV5BMDQ0NjgyN2YtNWViNS00YjA3LTkxNDktYzFkZTExZGMxZDkxXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
  ),
  show(
    "Doctor Strange",
    "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_FMjpg_UX1000_.jpg",
  ),
  show(
    "The Hunger Games: Mockingjay — Part 2",
    "https://m.media-amazon.com/images/M/MV5BNjQzNDI2NTU1Ml5BMl5BanBnXkFtZTgwNTAyMDQ5NjE@._V1_.jpg",
  ),
  show(
    "Spider-Man: Into the Spider-Verse",
    "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_FMjpg_UX1000_.jpg",
  ),
  show(
    "The Hunger Games: Mockingjay — Part 1",
    "https://m.media-amazon.com/images/M/MV5BMTcxNDI2NDAzNl5BMl5BanBnXkFtZTgwODM3MTc2MjE@._V1_FMjpg_UX1000_.jpg",
  ),
  show(
    "Spirited Away",
    "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  ),
  show(
    "Dune 2",
    "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_.jpg",
  ),
] satisfies Show[];

export const series: Show[] = [
  {
    title: "Money Heist",
    image:
      "https://m.media-amazon.com/images/M/MV5BYmVjODRhNDAtZDU1Ni00ODc3LWIzNjMtODM5MTEwODJmMDExXkEyXkFqcGc@._V1_FMjpg_UX371_.jpg",
  },
  {
    title: "Modern Family",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjdmNGEzOWItZTM0Mi00YWUxLTg2OTUtOTIxMWRmY2U1YTU3XkEyXkFqcGc@._V1_.jpg",
  },
  {
    title: "Black Mirror",
    image:
      "https://m.media-amazon.com/images/M/MV5BMWY3ZjgwMTctZTZmMS00ZTMwLTkwYWEtNTVkMDgwNjA5ODBiXkEyXkFqcGc@._V1_.jpg",
  },
  {
    title: "3 Body Problem",
    image:
      "https://m.media-amazon.com/images/M/MV5BYWIyZTY3ODEtYjkwZS00NzMwLTlhNjMtNzhkZGIyOTM0NTMwXkEyXkFqcGc@._V1_.jpg",
  },
  {
    title: "Griselda",
    image:
      "https://m.media-amazon.com/images/M/MV5BMzdlNGU1MmItZDFhMi00YzQ1LTkyMDMtNWI4MDM5MDE3ZDg1XkEyXkFqcGc@._V1_.jpg",
  },
  {
    title: "The Queen's Gambit",
    image:
      "https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_.jpg",
  },
  {
    title: "Russian Doll",
    image:
      "https://m.media-amazon.com/images/M/MV5BMzRjYzA2YzgtYmEyYy00YzZjLTkzMGEtMWQ1M2Y2MTA2ZjcwXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg",
  },
  {
    title: "Avatar: The Last Airbender",
    image:
      "https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTIxLWI0YjAtNTZmOTY0YjRlZGQ0XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_.jpg",
  },
  {
    title: "Adventure Time",
    image:
      "https://m.media-amazon.com/images/M/MV5BMGFkNGY4NGMtZjY0NC00YTI0LThiZjMtMjBmZGMzOGU3YTdmXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_FMjpg_UX1000_.jpg",
  },
] satisfies Show[];

// Album
export type Album = {
  image: string;
  title: string;
  author: string;
};
function album(title: string, author: string, image: string): Album {
  return { title, image, author };
}
export const albums: Album[] = [
  album(
    "Swimming",
    "Mac Miller",
    "https://lastfm.freetls.fastly.net/i/u/500x500/4ffccd2c839f30143a348dbcc57f5522.jpg",
  ),
  album(
    "Shadowglow",
    "Flipturn",
    "https://lastfm.freetls.fastly.net/i/u/500x500/2f9b94b35827f0ef25d5d353cceb92cc.jpg",
  ),
  album(
    "Boy in Jeans",
    "Ryan Beatty",
    "https://lastfm.freetls.fastly.net/i/u/500x500/1f5ebef20311772dca6de7cd962bbc3e.jpg",
  ),
  album(
    "Chip Chrome & The Mono-Tones",
    "The Neighbourhood",
    "https://lastfm.freetls.fastly.net/i/u/500x500/5d033ef39b6dd6058a487e60a0eed29a.jpg",
  ),
  album(
    "Blonde",
    "Frank Ocean",
    "https://lastfm.freetls.fastly.net/i/u/500x500/d204f358ae4063561370b9dc7c0cb8ca.jpg",
  ),
  album(
    "Hard To Imagine The Neighbourhood Ever Changing",
    "The Neighbourhood",
    "https://lastfm.freetls.fastly.net/i/u/500x500/86e765555e472c686ddfd172f63a9982.jpg",
  ),
  album(
    "Trumpet Boy",
    "Laundry Day",
    "https://lastfm.freetls.fastly.net/i/u/500x500/59fdcab1bbb42790a8b819019cf6b436.jpg",
  ),
  album(
    "Dreaming of David",
    "Ryan Beatty",
    "https://lastfm.freetls.fastly.net/i/u/500x500/9cad099eb9ebb49c65d0b2f3800e80ba.jpg",
  ),
  album(
    "Cat Heaven",
    "Roy Blair",
    "https://lastfm.freetls.fastly.net/i/u/500x500/13264cf5860ff2c8d90e11bc52747e74.jpg",
  ),
  album(
    "Flower Boy",
    "Tyler, The Creator",
    "https://lastfm.freetls.fastly.net/i/u/500x500/8598727f88a5b52d53b843a9c4b6f2dd.jpg",
  ),
  album(
    "HIT ME HARD AND SOFT",
    "Billie Eilish",
    "https://lastfm.freetls.fastly.net/i/u/500x500/e69971625c379772fb79213dccfa194f.jpg",
  ),
  album(
    "Currents",
    "Tame Impala",
    "https://lastfm.freetls.fastly.net/i/u/500x500/dd45b0438a315aed98b5830aa2fc43c5.jpg",
  ),
  album(
    "Happier Than Ever",
    "Billie Eilish",
    "https://lastfm.freetls.fastly.net/i/u/500x500/7ebd8b6f8ac6766fb26303245a265a2e.jpg",
  ),
  album(
    "WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?",
    "Billie Eilish",
    "https://lastfm.freetls.fastly.net/i/u/500x500/c2652de4809e5b4349565518b34b85ca.jpg",
  ),
  album(
    "Don't Forget About Me, Demos",
    "Dominic Fike",
    "https://lastfm.freetls.fastly.net/i/u/500x500/1f4447aa5510de93f025a475f6bdad33.jpg",
  ),
  album(
    "ANTI",
    "Rihanna",
    "https://lastfm.freetls.fastly.net/i/u/500x500/d4a339a2bd2bc5fe470e0b0c10444903.jpg",
  ),
  album(
    "The Rise and Fall of a Midwest Princess",
    "Chappell Roan",
    "https://lastfm.freetls.fastly.net/i/u/500x500/acd4dcd1ffdc64da01273b1e3512a708.jpg",
  ),
  album(
    "Deadpan Love",
    "Cautious Clay",
    "https://lastfm.freetls.fastly.net/i/u/500x500/740d0ef8298ff0cf299e73438257fc23.jpg",
  ),
  album(
    "HOMESICK",
    "Laundry Day",
    "https://lastfm.freetls.fastly.net/i/u/500x500/45e7b9bae1a6e3ad01bed74364d605bb.jpg",
  ),
  album(
    "Calico",
    "Ryan Beatty",
    "https://lastfm.freetls.fastly.net/i/u/500x500/31fcd688a206d1553801d573b38e4d91.jpg",
  ),
  album(
    "DAMN.",
    "Kendrick Lamar",
    "https://lastfm.freetls.fastly.net/i/u/500x500/8a59ed3a9c71cb5113325e2026889e4a.jpg",
  ),
  album(
    "Fine Line",
    "Harry Styles",
    "https://lastfm.freetls.fastly.net/i/u/500x500/7940fbb1df766b4683951aed490a8b5a.jpg",
  ),
  album(
    "Un Verano Sin Ti",
    "Bad Bunny",
    "https://lastfm.freetls.fastly.net/i/u/500x500/3fc1caf14abbd6d7e3853e4fb4dfa3be.jpg",
  ),
  album(
    "30",
    "Adele",
    "https://lastfm.freetls.fastly.net/i/u/500x500/fb82ddd94c9fbdb5733a46133d16c073.jpg",
  ),
  album(
    "Plastic Hearts",
    "Miley Cyrus",
    "https://lastfm.freetls.fastly.net/i/u/500x500/69bdee0d5985c91adff44a4e04055b2c.jpg",
  ),
  album(
    "RENAISSANCE",
    "Beyoncé",
    "https://lastfm.freetls.fastly.net/i/u/500x500/918cdcd71b15f7ce542497d9d53e3ee7.jpg",
  ),
  album(
    "Juno",
    "Remi Wolf",
    "https://lastfm.freetls.fastly.net/i/u/500x500/ab6a86c8c29f1a01b8ae8b2ed5412771.jpg",
  ),
  album(
    "You and Your Friends",
    "Peach Pit",
    "https://lastfm.freetls.fastly.net/i/u/500x500/6af8b836310efa2c8ec2cf80bc2653a5.jpg",
  ),
  album(
    "MOTOMAMI",
    "Rosalía",
    "https://lastfm.freetls.fastly.net/i/u/500x500/ae581f3ad8e454ea973e91ae82d22d71.jpg",
  ),
  album(
    "Cowboy Carter",
    "Beyoncé",
    "https://lastfm.freetls.fastly.net/i/u/500x500/d02aeea86757347aa3b1fc3f67f52f44.jpg",
  ),
  album(
    "Norman Fucking Rockwell!",
    "Lana Del Rey",
    "https://lastfm.freetls.fastly.net/i/u/500x500/ab9ed65c5b337129f6b50ca5894d7319.jpg",
  ),
  album(
    "Being so Normal",
    "Peach Pit",
    "https://lastfm.freetls.fastly.net/i/u/500x500/13d604e0980e3c3aa9a06ab413a89bdd.jpg",
  ),
  album(
    "beerbongs & bentleys",
    "Post Malone",
    "https://lastfm.freetls.fastly.net/i/u/500x500/d9a790b6c8526a4c8cb9862c64bc3342.jpg",
  ),
  album(
    "Dreamland",
    "Glass Animals",
    "https://lastfm.freetls.fastly.net/i/u/500x500/714ad710a60b2da9d4b8496134ae7cec.jpg",
  ),
  album(
    "SYRE",
    "Jaden",
    "https://lastfm.freetls.fastly.net/i/u/500x500/2f8f280204cb84cb6a0789ec3651115b.jpg",
  ),
  album(
    "channel ORANGE",
    "Frank Ocean",
    "https://lastfm.freetls.fastly.net/i/u/500x500/c0097390e321f20873a2d0e22d32d84e.jpg",
  ),
] satisfies Album[];
