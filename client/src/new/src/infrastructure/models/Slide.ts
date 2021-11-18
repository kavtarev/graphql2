import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Slide {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public slide!: string;

  @Column()
  public updateTime!: Date;

}
