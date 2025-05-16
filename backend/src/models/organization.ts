import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import User from "./user";
import Team from "./team";

@Entity()
export default class Organization {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    name!: string;

    @OneToMany(() => User, user => user.org)
    users!: User[];

    @OneToMany(() => Team, team => team.org)
    teams!: Team[]
}