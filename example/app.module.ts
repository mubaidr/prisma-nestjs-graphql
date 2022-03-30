import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AcademicsModule } from './academics/academics.module';
import { DummyModule } from './dummy/dummy.module';
import { UserModule } from './user/user.module';


@Module({
    imports: [
        UserModule,
        DummyModule,
        AcademicsModule,
        GraphQLModule.forRoot({
            driver: ApolloDriver,
            installSubscriptionHandlers: true,
            autoSchemaFile: '~schema.gql',
        }),
    ],
})
export class AppModule {}
