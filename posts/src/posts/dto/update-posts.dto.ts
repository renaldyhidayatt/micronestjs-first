import { IsString } from "class-validator";

export class UpdatePosts{
    @IsString()
    title: string;

    @IsString()
    description: string;
}