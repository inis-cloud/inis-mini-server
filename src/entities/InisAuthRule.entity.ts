import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('inis_auth_rule', { schema: 'sql_123mtr_top' })
export class inisAuthRule {
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
    name: 'route',
    nullable: true,
    comment: '路由',
    length: 255,
  })
  route: string | null;

  @Column('int', { name: 'pid', comment: '父级ID', default: () => "'0'" })
  pid: number;

  @Column('longtext', { name: 'opt', nullable: true, comment: 'JSON字段' })
  opt: string | null;

  @Column('text', { name: 'expand', nullable: true, comment: '拓展字段' })
  expand: string | null;

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
