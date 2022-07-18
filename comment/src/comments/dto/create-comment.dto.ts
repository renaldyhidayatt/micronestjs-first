import { IsNumber, IsString } from "class-validator";


export class CreateComment{

    @IsNumber()
    post_id: number

    @IsString()
    text: string
    
}