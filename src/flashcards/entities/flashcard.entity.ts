import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Flashcard {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    subject: string;

    @Column()
    flashcard_reviews: number;

    @Column()
    next_review: Date;

    @Column()
    created_at: Date;

    @Column()
    content: string;
}
