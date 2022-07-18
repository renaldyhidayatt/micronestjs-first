import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateComment } from './dto/create-comment.dto';

@Controller('comments')
export class CommentsController {
    constructor(private commentService: CommentsService){}

    @Get()
    findAll(){
        return this.commentService.find();
    }

    @Post()
    create(@Body() createComment: CreateComment){
    
        return this.commentService.create({
            post_id: createComment.post_id,
            text: createComment.text
        })
    }
}
