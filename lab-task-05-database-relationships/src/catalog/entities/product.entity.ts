import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './category.entity';
@Entity('products')
export class Product {
  @PrimaryGeneratedColumn() id: number;
  @Column() name: string;
  @Column({ type: 'decimal', precision: 10, scale: 2 }) price: number;
  @ManyToOne(() => Category, (category) => category.products, { nullable: false, onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'categoryId' }) category: Category;
}
