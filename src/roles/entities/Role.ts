import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  name: string

  @CreateDateColumn()
  created_at: Date
}
