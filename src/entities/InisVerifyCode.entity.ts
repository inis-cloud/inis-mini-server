import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('inis_verify_code', { schema: 'sql_123mtr_top' })
export class inisVerifyCode {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: 'ID' })
  id: number;

  @Column('varchar', {
    name: 'code',
    nullable: true,
    comment: '验证码',
    length: 255,
  })
  code: string | null;

  @Column('varchar', {
    name: 'types',
    nullable: true,
    comment: '验证码种类',
    length: 255,
  })
  types: string | null;

  @Column('varchar', {
    name: 'content',
    nullable: true,
    comment: '内容',
    length: 255,
  })
  content: string | null;

  @Column('varchar', {
    name: 'end_time',
    nullable: true,
    comment: '过期时间',
    length: 255,
  })
  endTime: string | null;

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

  @Column('int', { name: 'create_time', nullable: true, comment: '创建时间' })
  createTime: number | null;

  @Column('int', { name: 'update_time', nullable: true, comment: '更新时间' })
  updateTime: number | null;
}
