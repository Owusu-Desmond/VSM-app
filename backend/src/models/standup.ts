import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    ManyToOne, 
    PrimaryGeneratedColumn, 
    Unique 
} from "typeorm";
import User from "./user";
import Team from "./team";

@Entity()
@Unique(['user', 'date'])
export default class StandupNote {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @ManyToOne(() => User, user => user.id, { onDelete: 'CASCADE'})
    user!: User;

    @ManyToOne(() => Team, team => team.id, { onDelete: 'CASCADE'})
    team!: Team;

    @Column({ type: 'date'} )
    date!: string;

    @Column({ type: 'text' })
    yesterday!: string;

    @Column({ type: 'text' })
    today!: string;

    @Column({ type: 'text', nullable: true})
    blockers!: string;

    @CreateDateColumn()
    createdAt!: Date
}