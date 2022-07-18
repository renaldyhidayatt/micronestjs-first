import { IsString } from "class-validator";

export class CreatePosts{
    @IsString()
    title: string;

    @IsString()
    description: string;
}