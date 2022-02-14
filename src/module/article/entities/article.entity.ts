import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'account', comment: '账号', unique: true })
  account: string;

  @Column({ comment: '密码' })
  password: string;

  @Column({ comment: '昵称', unique: true })
  nickname: string;

  @Column({ comment: '性别', length: 1 })
  sex: string;

  @Column({ comment: '邮箱', unique: true })
  email: string;

  @Column({ comment: '手机', unique: true })
  phone: number;

  @Column({ comment: '邮箱地址' })
  head_img: string;

  @Column({ comment: '描述' })
  description: string;

  @Column({ comment: '状态' })
  status: boolean;

  @Column({ comment: '分类' })
  level: string;

  @Column({ comment: '性别' })
  address_url: string;

  @Column({ comment: '备注' })
  remarks: string;

  @Column({ comment: 'JSON字段', type: 'json' })
  opt: string;

  @Column({ comment: '拓展字段', type: 'longtext' })
  expand: string;

  @Column({ comment: '自定义字段', type: 'longtext' })
  longtext: string;

  @Column({ comment: '创建时间', type: 'timestamp' })
  create_time: Date;

  @Column({ comment: '更新时间', type: 'timestamp' })
  update_time: Date;

  @Column({ comment: '上次登录时间', type: 'timestamp' })
  last_login_time: Date;
}
