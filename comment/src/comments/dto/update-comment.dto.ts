import { IsNumber, IsString } from "class-validator"

export class UpdateComment{
    @IsNumber()
    post_id: number

    @IsString()
    text: string
}