import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    OneToMany,
} from 'typeorm'
import User from './user'
import StandupNote from './standup';

@Entity()
export default class Team {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    name!: string;

    @Column()
    desc?: string;

    @OneToMany(() => User, user => user.team)
    members!: User[];

    @OneToMany(() => StandupNote, note => note.team)
    notes!: StandupNote[];

    @CreateDateColumn()
    createdAt!: Date;

}