import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('inis_banner', { schema: 'sql_123mtr_top' })
export class inisBanner {
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
    name: 'description',
    nullable: true,
    comment: '描述',
    length: 255,
  })
  description: string | null;

  @Column('varchar', {
    name: 'url',
    nullable: true,
    comment: '跳转地址',
    length: 255,
  })
  url: string | null;

  @Column('varchar', {
    name: 'img',
    nullable: true,
    comment: '图片地址',
    length: 255,
  })
  img: string | null;

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
