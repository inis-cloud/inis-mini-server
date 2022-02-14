import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('inis_comments', { schema: 'sql_123mtr_top' })
export class inisComments {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: '主键' })
  id: number;

  @Column('int', {
    name: 'pid',
    nullable: true,
    comment: '父ID',
    default: () => "'0'",
  })
  pid: number | null;

  @Column('text', { name: 'content', nullable: true, comment: '评论内容' })
  content: string | null;

  @Column('varchar', {
    name: 'nickname',
    nullable: true,
    comment: '评论者昵称',
    length: 255,
  })
  nickname: string | null;

  @Column('varchar', {
    name: 'email',
    nullable: true,
    comment: '用户邮箱',
    length: 255,
  })
  email: string | null;

  @Column('varchar', {
    name: 'url',
    nullable: true,
    comment: '用户网址',
    length: 255,
  })
  url: string | null;

  @Column('varchar', { name: 'ip', nullable: true, comment: 'IP', length: 255 })
  ip: string | null;

  @Column('varchar', {
    name: 'type',
    nullable: true,
    comment: '评论属性',
    length: 255,
    default: () => "'article'",
  })
  type: string | null;

  @Column('int', {
    name: 'status',
    nullable: true,
    comment: '状态',
    default: () => "'1'",
  })
  status: number | null;

  @Column('text', { name: 'agent', nullable: true, comment: '代理信息' })
  agent: string | null;

  @Column('int', {
    name: 'is_show',
    nullable: true,
    comment: '是否显示',
    default: () => "'1'",
  })
  isShow: number | null;

  @Column('int', { name: 'users_id', nullable: true, comment: '评论者' })
  usersId: number | null;

  @Column('int', { name: 'article_id', nullable: true, comment: '外键' })
  articleId: number | null;

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

  @Column('int', { name: 'create_time', nullable: true, comment: '创建时间' })
  createTime: number | null;

  @Column('int', { name: 'update_time', nullable: true, comment: '修改时间' })
  updateTime: number | null;
}
