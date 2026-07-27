import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {

    @Get()
    getUser(){
        return {
            id:3,
            name:"HI"
        };
    }
    @Get("all")
    getAllUser(){
        return [
            {id:3,name:"muin"},
            {id:4, name: "raisa"}
        ]
    };
    

    @Get(":id")
    getSpeceficUser(){
        return[
            "HI"
        ]
    }

}
