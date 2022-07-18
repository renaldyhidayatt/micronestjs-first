import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Posts{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;
}