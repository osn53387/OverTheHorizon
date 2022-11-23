import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;
}
