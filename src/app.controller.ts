import { Controller, Post, UseGuards, Request, Get } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth/auth.service";
import { RoleGuard } from "./auth/role.guard";
import { CONSTANTS } from "./constants";


//1 - issue the jwt token
@Controller('app')
export class AppController {
  constructor(private readonly authService: AuthService) {
  }

  @Post('/login')
  @UseGuards(AuthGuard("local"))
  login(@Request() req): string {

    //authentication complete
    //next step authorization
    //id card--> jwt token

    return this.authService.generateToken(req.user);

  }

  @Get('/android-developer')
  @UseGuards(AuthGuard("jwt"), new RoleGuard(CONSTANTS.ROLES.ANDROID_DEVELOPER))
  androidDeveloperData(@Request() req): string {
    return "This is private data for android developer" + JSON.stringify(req.user);
  }

  @Get('/web-developer')
  @UseGuards(AuthGuard("jwt"), new RoleGuard(CONSTANTS.ROLES.WEB_DEVELOPER))
  webDeveloperData(@Request() req): string {
    return "This is private data for web developer" + JSON.stringify(req.user);
  }
}