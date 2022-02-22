import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'inis_mini_user' })
export class UserEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: '用户ID' })
  id: number;

  @Column('enum', { name: 'role', nullable: true, enum: ['admin', 'user'], default: 'admin' })
  role: string;

  @Column('varchar', { name: 'description', comment: '描述', default: '这个人很懒什么也没写...' })
  description: string;

  @Column('varchar', { name: 'avatar', nullable: true, comment: '头像' })
  avatar: string | null;

  @Column('varchar', { name: 'username', comment: '用户名', unique: true })
  username: string;

  @Column('varchar', { name: 'password', comment: '登录密码' })
  password: string;

  @Column('varchar', { name: 'login_time', comment: '最近登录', default: '没有登录过...' })
  loginTime: Date;

  @CreateDateColumn({ name: 'create_time', comment: '创建时间', update: false })
  createTime: Date;

  @UpdateDateColumn({ name: 'update_time', comment: '更新时间', update: false })
  updateTime: Date;
}
