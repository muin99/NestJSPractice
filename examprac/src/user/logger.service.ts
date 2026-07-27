import { Injectable } from "@nestjs/common";

@Injectable()
export class loggerservice{
    log(msg : string){
        console.log("[log-] " + msg);
    }
}