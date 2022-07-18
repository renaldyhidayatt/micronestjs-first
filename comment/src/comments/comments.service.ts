import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateComment } from './dto/create-comment.dto';
import { UpdateComment } from './dto/update-comment.dto';
import { Comments } from './entity/comments.entity';

@Injectable()
export class CommentsService {
    constructor(@InjectRepository(Comments) private commentsRepository: Repository<Comments>){

    }

    find(): Promise<Comments[]>{
        return this.commentsRepository.find();
    }

    create(createComment: CreateComment){
        return this.commentsRepository.save(createComment)
    }

    update(updateComment: UpdateComment, id: number){
        return this.commentsRepository.update(id, updateComment);
    }

    deleteComment(id: number){
        return this.commentsRepository.delete(id);
    }



}
