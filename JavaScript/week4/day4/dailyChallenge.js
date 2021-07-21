class Video {
    constructor(title, uploader, time) {
        this.title = title
        this.uploader = uploader
        this.time = time
    }

    watch() {
        console.log(`${this.uploader} watched all time ${this.time} of ${this.title}`)
    }
}

const video = new Video('stam', 'Miki', 'today');
const video2 = new Video('stam2', 'Miki2', 'yesterday');

const arrVideos = [
    new Video('stam', 'Miki', 'today'),
    new Video('stam2', 'Miki2', 'today2'),
    new Video('stam3', 'Miki3', 'today3'),
    new Video('stam4', 'Miki4', 'today4'),
    new Video('stam5', 'Miki5', 'today5'),
]
console.log(arrVideos)

let arrVideos2 = []
for(let i of [1,2,3,4,5]){
    arrVideos2.push(new Video(`oops${i}`, `Jane Doe${i}`, `2${i}.4.2001`))
}
console.log(arrVideos2)