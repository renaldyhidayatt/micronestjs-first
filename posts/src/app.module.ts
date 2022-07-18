import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm"
import { Posts } from './posts/entity/posts.entitty';
import { PostsModule } from './posts/posts.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "127.0.0.1",
      port: 5432,
      username: "postgres",
      password: "postgres",
      database: "micronest_post",
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
      entities: [Posts,],
    }),
    PostsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
