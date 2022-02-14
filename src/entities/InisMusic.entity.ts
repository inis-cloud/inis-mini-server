import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('inis_music', { schema: 'sql_123mtr_top' })
export class inisMusic {
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
    comment: '音乐地址',
    length: 255,
  })
  url: string | null;

  @Column('varchar', {
    name: 'head_img',
    nullable: true,
    comment: '头像地址',
    length: 255,
  })
  headImg: string | null;

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
