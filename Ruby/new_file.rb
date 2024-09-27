# Write a Playlist class that stores a name and an array of songs with methods to add a song, remove a song, shuffle the songs into a random order, and display all the songs.

class Playlist 
  attr_writer :input_name, :input_songs
  attr_reader :input_name, :input_songs
    def initialize(input_name, input_songs)
      @name = input_name 
      @songs = input_songs
    end
    def add_song(song)
        @songs << song
    end
    def remove_song(song)
        @songs.delete(song)
    end
    def shuffle
        @songs.shuffle!
    end 
    def display
      pp @name 
      pp @songs
    end
end

playlists = Playlist.new('Playlist1', ['August', 'How to save a life', 'vanilla', 'pizza'])

playlists.add_song('hello')
playlists.remove_song('hello')
playlists.shuffle
playlists.display
