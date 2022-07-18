import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comments{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    post_id: number

    @Column()
    text: string
}