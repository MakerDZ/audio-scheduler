export interface voice {
    join(): void;
    leave(): void;
    play(stream : any, queue : Array<string>) : void;
}