import {
    Entity, PrimaryGeneratedColumn, Column, ManyToOne
} from 'typeorm';
import Team from './team';
  
export enum Frequency {
    DAILY = 'daily',
    MWF = 'mwf',
    CUSTOM = 'custom',
}
  
@Entity()
export default class Schedule {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @ManyToOne(() => Team, team => team.schedules, { onDelete: 'CASCADE' })
    team!: Team;

    @Column({ type: 'enum', enum: Frequency })
    frequency!: Frequency;

    @Column()
    deadlineTime!: string;
}
  