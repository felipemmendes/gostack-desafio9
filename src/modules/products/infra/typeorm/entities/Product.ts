import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import OrdersProducts from '@modules/orders/infra/typeorm/entities/OrdersProducts';

@Entity('products')
class Product {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @OneToMany(() => OrdersProducts, ordersProducts => ordersProducts.product, {
    cascade: true,
  })
  @JoinColumn()
  order_products: OrdersProducts[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Product;
