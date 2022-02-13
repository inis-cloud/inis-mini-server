import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: '账号', unique: true })
  account: string;

  @Column({ name: '密码' })
  password: string;

  @Column({ name: '昵称', unique: true })
  nickname: string;

  // 中文字符长度占2位，英文字符占1位
  @Column({ name: '性别', length: 1 })
  sex: string;

  @Column({ name: '邮箱', unique: true })
  email: string;

  @Column({ name: '手机', unique: true })
  phone: number;

  @Column({ name: '邮箱地址' })
  head_img: string;

  @Column({ name: '描述' })
  description: string;

  @Column({ name: '状态' })
  status: boolean;

  @Column({ name: '分类' })
  level: string;

  @Column({ name: '性别' })
  address_url: string;

  @Column({ name: '备注' })
  remarks: string;

  @Column({ name: 'JSON字段', type: 'json' })
  opt: string;

  @Column({ name: '拓展字段', type: 'longtext' })
  expand: string;

  @Column({ name: '自定义字段', type: 'longtext' })
  longtext: string;

  @Column({ name: '创建时间', type: 'timestamp' })
  create_time: Date;

  @Column({ name: '更新时间', type: 'timestamp' })
  update_time: Date;

  @Column({ name: '上次登录时间', type: 'timestamp' })
  last_login_time: Date;
}
