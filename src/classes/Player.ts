import Isplayer from "../interface/IsPlayer";


class Player implements Isplayer {
    constructor(
        readonly name: string , 
        public age : number , 
        readonly country : string
    ){}

    getAge(){
        return this.age;
    }

    play(){
        console.log(`${this.name} from ${this.country} is playing`)
    }
}

export default Player;