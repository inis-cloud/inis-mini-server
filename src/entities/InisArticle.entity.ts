import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('id', ['id'], { unique: true })
@Entity('inis_article', { schema: 'sql_123mtr_top' })
export class inisArticle {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: '主键' })
  id: number;

  @Column('varchar', {
    name: 'title',
    nullable: true,
    comment: '标题',
    length: 255,
    default: () => "'未命名文章'",
  })
  title: string | null;

  @Column('text', { name: 'description', nullable: true, comment: '摘要' })
  description: string | null;

  @Column('longtext', { name: 'content', nullable: true, comment: '内容' })
  content: string | null;

  @Column('int', {
    name: 'is_top',
    nullable: true,
    comment: '是否置顶',
    default: () => "'0'",
  })
  isTop: number | null;

  @Column('int', {
    name: 'is_show',
    nullable: true,
    comment: '是否显示',
    default: () => "'1'",
  })
  isShow: number | null;

  @Column('varchar', {
    name: 'img_src',
    nullable: true,
    comment: '图片地址',
    length: 255,
  })
  imgSrc: string | null;

  @Column('int', { name: 'views', nullable: true, comment: '浏览次数' })
  views: number | null;

  @Column('int', { name: 'font_count', nullable: true, comment: '字数统计' })
  fontCount: number | null;

  @Column('text', { name: 'sort_id', nullable: true, comment: '分类ID' })
  sortId: string | null;

  @Column('text', { name: 'tag_id', nullable: true, comment: '标签ID' })
  tagId: string | null;

  @Column('int', { name: 'users_id', nullable: true, comment: '用户ID' })
  usersId: number | null;

  @Column('text', { name: 'expand', nullable: true, comment: '拓展字段' })
  expand: string | null;

  @Column('longtext', { name: 'opt', nullable: true, comment: 'JSON字段' })
  opt: string | null;

  @Column('longtext', {
    name: 'longtext',
    nullable: true,
    comment: '自定义字段',
  })
  longtext: string | null;

  @Column('varchar', {
    name: 'delete_time',
    nullable: true,
    comment: '删除时间',
    length: 255,
  })
  deleteTime: string | null;

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
    comment: '更新时间\r\n',
    length: 255,
  })
  updateTime: string | null;

  @Column('varchar', {
    name: 'last_update_time',
    nullable: true,
    comment: '最后修改时间',
    length: 255,
  })
  lastUpdateTime: string | null;
}
