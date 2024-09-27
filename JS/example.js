// Write a Playlist class that stores a name and an array of songs with methods to add a song, remove a song, shuffle the songs into a random order, and display all the songs.

class Playlist {
  constructor(name, songs) { 
    this.name = name;
    this.songs = songs;
  }
  add_song(song) { 
    this.songs.push(song);
  }
  remove_song(song) {
    this.songs.delete(song);
  }
}