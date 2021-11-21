import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
interface T {
    text: string
    textColor: string
    textPosition: string
    buttonText: string
    buttonColor: string
    smallScreenImageUrl: string
    largeScreenImageUrl: string
}

@Entity()
export class Slide {
    @PrimaryGeneratedColumn()
    public id!: number

    @Column()
    public slide!: Array<T>

    @Column()
    public updateTime!: Date
}
