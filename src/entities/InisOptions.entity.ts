import { Column, Entity } from 'typeorm';

@Entity('inis_options', { schema: 'sql_123mtr_top' })
export class inisOptions {
  @Column('varchar', {
    primary: true,
    name: 'keys',
    comment: '键',
    length: 255,
  })
  keys: string;

  @Column('longtext', { name: 'value', nullable: true, comment: '值' })
  value: string | null;

  @Column('longtext', { name: 'opt', nullable: true, comment: 'JSON字段' })
  opt: string | null;
}
