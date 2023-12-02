import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  customerId: number;
}
