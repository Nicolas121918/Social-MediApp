import { Body, Controller, Post, Get, Param, Put } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { get } from 'http';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }


    // Endpoint
    @Post('register')
    register(@Body() body: { username: string; password: string }) {
        return this.authService.createUser(body.username, body.password);
    }

    @Post('login')
    login(@Body() body: { username: string; password: string }) {
        return this.authService.Login(body.username, body.password);
    }

    @Get('users')
    getAllUsers() {
        return this.authService.getallUsers();
    }

    @Post('posts')
    createPost(@Body() body: { title: string, createdby: string, image_url?: string }) {
        return this.authService.createpost(body.title, body.createdby, body.image_url);
    }

    @Get('publications')
    getAllPosts() {
        return this.authService.getallposts();
    }


    @Get('search/:id')
    async getUserById(@Param('id') id: string) {
        return this.authService.getUserNameById(Number(id));
    }

    @Put('update')
    async updatepost(@Body() body : {id: number, newpost: string}) {
        return this.authService.updatepost(body.id, body.newpost)

    }

    @Put('upd/:id/') 
    async update(@Param('id') id : number, newpost : string ){
        return this.authService.updatepost(Number(id),newpost)
    }
}



