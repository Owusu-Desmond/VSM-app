import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
  } from 'typeorm';
  import Team from './team';
  
  export type UserRole = 'admin' | 'member';

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
  
    @ManyToOne(() => Team, team => team.members, { nullable: true })
    team!: Team;
  
    @CreateDateColumn()
    createdAt!: Date;
  
    @UpdateDateColumn()
    updatedAt!: Date;
  }
  