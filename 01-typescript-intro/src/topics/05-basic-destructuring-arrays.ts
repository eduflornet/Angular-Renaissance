
interface AudioPlayer {
    audioVolume: number;
    songDuration:number;
    song:string;
    details: Details;
};

interface Details {
    author: string;
    year: number;
    };


const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details:  {
        author: "Ed Sheeran",
        year: 2015
    }
};

const { song: anotherSong, 
    songDuration:duration, details } = audioPlayer;
const { author } = details;


console.log("anotherSong", anotherSong);
console.log("duration", duration);
//console.log("author", audioPlayer.details.author);
console.log("author", author);

//const dbz: string[] = ['Goku', 'Vegeta', 'Trunk'];
//console.error('character:', dbz[3] || 'There is not character found!');
//const [ p1, p2 ,p3]: string[] = ['Goku', 'Vegeta', 'Trunks'];

// by default there is a value 'Not found'
const [ ,  ,p3 = 'Not found']: string[] = ['Goku', 'Vegeta'];

console.error('character:', p3 || 'There is not character found!');


export {};