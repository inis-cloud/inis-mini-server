import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('inis_links_sort', { schema: 'sql_123mtr_top' })
export class inisLinksSort {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: 'ID' })
  id: number;

  @Column('varchar', {
    name: 'name',
    nullable: true,
    comment: '分类名称',
    length: 255,
  })
  name: string | null;

  @Column('text', { name: 'description', nullable: true, comment: '分类描述' })
  description: string | null;

  @Column('int', {
    name: 'is_show',
    nullable: true,
    comment: '是否显示',
    default: () => "'1'",
  })
  isShow: number | null;

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
