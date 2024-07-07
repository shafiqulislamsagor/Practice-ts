interface Isplayer {
    readonly name: string;
    age: number;
    country: string;
    
    play(): void;
    getAge():number;
}

export default Isplayer;