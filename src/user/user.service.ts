import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";
import { CONSTANTS } from "src/constants";

@Injectable()
export class UserService{
    public users : User[] = [
        {
            username : 'User1',
            password : 'admin',
            email : 'user1@gmail.com',
            age: 22,
            role: CONSTANTS.ROLES.ANDROID_DEVELOPER
        },
        {
            username : 'User2',
            password : 'admin',
            email : 'user2@gmail.com',
            age: 24,
            role: CONSTANTS.ROLES.WEB_DEVELOPER
        },
        {
            username : 'User3',
            password : 'admin',
            email : 'user3@gmail.com',
            age: 26,
            role: CONSTANTS.ROLES.WEB_DEVELOPER
        },
    ];

    getUserByUserName(userName: string):User{
        return this.users.find((user:User)=> user.username === userName);

    }
}