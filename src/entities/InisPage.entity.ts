import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('inis_page', { schema: 'sql_123mtr_top' })
export class inisPage {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: 'ID' })
  id: number;

  @Column('varchar', {
    name: 'title',
    nullable: true,
    comment: '标题',
    length: 255,
  })
  title: string | null;

  @Column('varchar', {
    name: 'alias',
    nullable: true,
    comment: '别名',
    length: 255,
  })
  alias: string | null;

  @Column('longtext', { name: 'content', nullable: true, comment: '内容' })
  content: string | null;

  @Column('int', {
    name: 'is_show',
    nullable: true,
    comment: '是否显示',
    default: () => "'1'",
  })
  isShow: number | null;

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
}
