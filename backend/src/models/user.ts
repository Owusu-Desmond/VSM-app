import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    ManyToMany,
    JoinTable,
    OneToMany,
} from 'typeorm';
import Team from './team';
import Organization from './organization';
import StandupNote from './standup';
  
  export enum UserRole {
    OWNER = 'owner',
    MANAGER = 'manager',
    MEMBER = 'member',
  }

  @Entity()
  export default class User {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
  
    @Column()
    name!: string;
  
    @Column({ unique: true })
    email!: string;
  
    @Column()
    password!: string;
  
    @Column({ type: 'enum', enum: ['member', 'admin'], default: 'member' })
    role!: UserRole
  
    @ManyToMany(() => Team, team => team.members, { nullable: true })
    @JoinTable()
    teams!: Team;

    @ManyToOne(() => Organization, org => org.users, { onDelete: 'CASCADE'})
    org!: Organization;

    @OneToMany(() => StandupNote, note => note.user)
    notes!: StandupNote[];
  
    @CreateDateColumn()
    createdAt!: Date;
  
    @UpdateDateColumn()
    updatedAt!: Date;
  }
  