import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm"
import { CommentsModule } from './comments/comments.module';
import { Comments } from './comments/entity/comments.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "127.0.0.1",
      port: 5432,
      username: "postgres",
      password: "postgres",
      database: "micronest_comment",
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
      entities: [Comments,],
    }),
    CommentsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
