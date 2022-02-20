import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'inis_mini_user' })
export class UserEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: '用户ID' })
  id: number;

  @Column('varchar', { name: 'username', comment: '用户名' })
  username: string;

  @Column('varchar', { name: 'password', comment: '登录密码' })
  password: string;

  @Column('varchar', { name: 'description', comment: '描述', default: '暂无描述' })
  description: string;

  @Column('varchar', { name: 'avatar', nullable: true, comment: '头像' })
  avatar: string | null;

  @CreateDateColumn({ name: 'create_time', comment: '创建时间' })
  createTime: string;

  @UpdateDateColumn({ name: 'update_time', comment: '更新时间' })
  updateTime: string;
}
