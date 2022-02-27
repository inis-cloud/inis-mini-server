import { UserRole } from 'src/enum/indxe';
import { Column, Entity, PrimaryGeneratedColumn, Tree, TreeChildren, TreeParent } from 'typeorm';

@Entity({ name: 'inis_mini_menu' })
@Tree('closure-table')
export class MenuEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: '菜单ID' })
  id: number;

  @Column('varchar', { name: 'label', comment: '菜单名称' })
  label: string;

  @Column('varchar', { name: 'value', comment: '菜单值' })
  value: string;

  @Column('enum', { name: 'role', nullable: true, enum: UserRole, default: UserRole.ADMIN })
  role: UserRole;

  @Column('varchar', { name: 'icon', comment: '图标', nullable: true })
  icon: string;

  @Column('varchar', { name: 'path', comment: '路由', nullable: true })
  path: string;

  @Column('boolean', { name: 'disabled', comment: '是否禁用', default: false })
  disabled: string;

  @TreeChildren({ cascade: true })
  children: MenuEntity[];

  @TreeParent()
  parent: MenuEntity;
}
