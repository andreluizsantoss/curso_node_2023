import {
  Column,
  CreateDateColumn,
  Entity,
  IntegerType,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn('increment')
  id: string

  @Column()
  name: string

  @CreateDateColumn()
  created_at: Date
}
