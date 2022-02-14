import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('id', ['id'], { unique: true })
@Entity('inis_users', { schema: 'sql_123mtr_top' })
export class inisUsers {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: '主键' })
  id: number;

  @Column('varchar', {
    name: 'account',
    nullable: true,
    comment: '帐号',
    length: 52,
  })
  account: string | null;

  @Column('varchar', { name: 'password', comment: '密码', length: 255 })
  password: string;

  @Column('varchar', { name: 'nickname', comment: '昵称', length: 32 })
  nickname: string;

  @Column('varchar', {
    name: 'sex',
    nullable: true,
    comment: '性别',
    length: 32,
    default: () => "'保密'",
  })
  sex: string | null;

  @Column('varchar', { name: 'email', comment: '邮箱', length: 255 })
  email: string;

  @Column('varchar', {
    name: 'phone',
    nullable: true,
    comment: '手机',
    length: 255,
  })
  phone: string | null;

  @Column('varchar', {
    name: 'head_img',
    nullable: true,
    comment: '头像地址',
    length: 255,
  })
  headImg: string | null;

  @Column('varchar', {
    name: 'description',
    nullable: true,
    comment: '描述',
    length: 255,
  })
  description: string | null;

  @Column('int', { name: 'status', comment: '状态', default: () => "'1'" })
  status: number;

  @Column('varchar', {
    name: 'level',
    nullable: true,
    comment: '分组',
    length: 255,
    default: () => "'user'",
  })
  level: string | null;

  @Column('varchar', {
    name: 'address_url',
    nullable: true,
    comment: '主页地址',
    length: 255,
  })
  addressUrl: string | null;

  @Column('varchar', {
    name: 'remarks',
    nullable: true,
    comment: '备注',
    length: 255,
  })
  remarks: string | null;

  @Column('longtext', { name: 'opt', nullable: true, comment: 'JSON字段' })
  opt: string | null;

  @Column('text', { name: 'expand', nullable: true, comment: '拓展字段' })
  expand: string | null;

  @Column('longtext', {
    name: 'longtext',
    nullable: true,
    comment: '自定义字段',
  })
  longtext: string | null;

  @Column('varchar', {
    name: 'create_time',
    nullable: true,
    comment: '创建时间',
    length: 255,
  })
  createTime: string | null;

  @Column('varchar', {
    name: 'update_time',
    nullable: true,
    comment: '更新时间',
    length: 255,
  })
  updateTime: string | null;

  @Column('varchar', {
    name: 'last_login_time',
    nullable: true,
    comment: '上次登录时间',
    length: 255,
  })
  lastLoginTime: string | null;
}
