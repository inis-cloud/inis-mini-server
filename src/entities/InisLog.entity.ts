import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('inis_log', { schema: 'sql_123mtr_top' })
export class inisLog {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: 'ID' })
  id: number;

  @Column('varchar', {
    name: 'types',
    nullable: true,
    comment: '日志类型',
    length: 255,
  })
  types: string | null;

  @Column('varchar', { name: 'ip', nullable: true, comment: 'IP', length: 255 })
  ip: string | null;

  @Column('varchar', {
    name: 'content',
    nullable: true,
    comment: '内容',
    length: 255,
  })
  content: string | null;

  @Column('varchar', {
    name: 'msg',
    nullable: true,
    comment: '备注',
    length: 255,
  })
  msg: string | null;

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
