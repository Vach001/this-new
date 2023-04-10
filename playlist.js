/*
Playlist
Add: Pushes the passed-through song to the songs array
Play: Plays current song based on array index
Stop: Holds place in array, but calls above stop song prototype function
Next: Sets the next song in the songs array, calling the above play prototype function
Song should take in two arguments, title and artist, which should both be added as properties when
the Song constructor function is used.
Play: Sets the song as playing using isPlaying
Stop: Sets the song as not playing (isPlaying = false)
*/

function Playlist() {
  this.songs = [];
  this.index = 0;
  this.isPlaying = true;
}
function Songs(title, artist) {
  this.title = title;
  this.artist = artist;
}
Playlist.prototype.add = function (song) {
  this.songs.push(song);
  return this.songs;
};
Playlist.prototype.play = function () {
  const songs = this.songs;

  if (songs.length === 0) {
    return "Your playlist is empty!";
  }
  if (!this.isPlaying) {
    return `${songs[this.index].title} started`;
  } else {
    this.isPlaying = true;
    return `${songs[this.index].title} started to play`;
  }
};
Playlist.prototype.stop = function () {
  this.isPlaying = false;
  return `${this.songs[this.index].title} stopped`;
};
Playlist.prototype.next = function () {
  const songs = this.songs;

  if (this.index === songs.length - 1) {
    this.index = 0;
    return `${songs[songs.length - 1].title} stopped, ${
      songs[this.index].title
    } started`;
  } else {
    this.index++;
    return `${songs[this.index - 1].title} stopped, ${
      songs[this.index].title
    } started`;
  }
};

const playlist = new Playlist();
const heyJude = new Songs("Hey Jude", "The Beatles");
const jaded = new Songs("Jaded", "Aerosmith");

playlist.add(heyJude);
playlist.add(jaded);

console.log(playlist.play()); // Hey Jude started to play
console.log(playlist.next()); // Hey Jude stopped, Jaded started
console.log(playlist.next()); // Jaded stopped, Hey Jude started
console.log(playlist.stop()); // Hey Jude stopped
console.log(playlist.play()); // Hey Jude started
