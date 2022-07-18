import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Posts } from './entity/posts.entitty';

@Injectable()
export class PostsService {
    constructor(@InjectRepository(Posts) private postsRepository: Repository<Posts>){

    }

    get(): Promise<Posts[]>{
        return this.postsRepository.find();
    }
}
