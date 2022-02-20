import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'inis_mini_artcle' })
export class ArtcleEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: '文章ID' })
  id: number;

  @Column('varchar', { name: 'title', comment: '标题', default: '未命名文章' })
  title: string;

  @Column('varchar', { name: 'description', comment: '描述', default: '暂无描述' })
  description: string;

  @Column('simple-array', { name: 'tags', comment: '标签', nullable: true })
  tags: string[];

  @Column('varchar', { name: 'cover', nullable: true, comment: '封面图' })
  cover: string | null;

  @Column('text', { name: 'content', nullable: true, comment: '内容' })
  content: string | null;

  @Column('int', { name: 'view_count', comment: '浏览次数', default: 0 })
  viewCount: number;

  @Column('boolean', { name: 'is_show', comment: '是否显示', default: false })
  isShow: boolean;

  @Column('boolean', { name: 'is_top', comment: '是否置顶', default: false })
  isTop: boolean;

  @CreateDateColumn({ name: 'create_time', comment: '创建时间' })
  createTime: string;

  @UpdateDateColumn({ name: 'update_time', comment: '更新时间' })
  updateTime: string;
}
