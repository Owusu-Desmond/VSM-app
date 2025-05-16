import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    OneToMany,
    ManyToOne,
} from 'typeorm'
import User from './user'
import StandupNote from './standup';
import Organization from './organization';
import Schedule from './schedule';

@Entity()
export default class Team {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    name!: string;

    @Column()
    desc?: string;

    @OneToMany(() => User, user => user.teams)
    members!: User[];

    @ManyToOne(() => Organization, org => org.teams, { onDelete: 'CASCADE'})
    org!: Organization

    @OneToMany(() => Schedule, schedule => schedule.team)
    schedules!: Schedule[];

    @OneToMany(() => StandupNote, note => note.team)
    notes!: StandupNote[];

    @CreateDateColumn()
    createdAt!: Date;

}