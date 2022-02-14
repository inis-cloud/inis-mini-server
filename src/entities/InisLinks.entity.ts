import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('inis_links', { schema: 'sql_123mtr_top' })
export class inisLinks {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: '主键' })
  id: number;

  @Column('varchar', {
    name: 'name',
    nullable: true,
    comment: '昵称',
    length: 255,
  })
  name: string | null;

  @Column('varchar', {
    name: 'url',
    nullable: true,
    comment: '地址',
    length: 255,
  })
  url: string | null;

  @Column('varchar', {
    name: 'head_img',
    nullable: true,
    comment: '头像',
    length: 255,
  })
  headImg: string | null;

  @Column('varchar', {
    name: 'description',
    nullable: true,
    comment: '描述',
    length: 255,
    default: () => "'这是一个很神秘的人！'",
  })
  description: string | null;

  @Column('int', { name: 'sort_id', nullable: true, comment: '分类ID' })
  sortId: number | null;

  @Column('int', {
    name: 'is_show',
    nullable: true,
    comment: '是否显示',
    default: () => "'1'",
  })
  isShow: number | null;

  @Column('longtext', { name: 'opt', nullable: true, comment: 'JSON字段' })
  opt: string | null;

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
