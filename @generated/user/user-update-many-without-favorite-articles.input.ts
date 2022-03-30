import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFavoriteArticlesInput } from './user-create-without-favorite-articles.input';
import { UserCreateOrConnectWithoutFavoriteArticlesInput } from './user-create-or-connect-without-favorite-articles.input';
import { UserUpsertWithWhereUniqueWithoutFavoriteArticlesInput } from './user-upsert-with-where-unique-without-favorite-articles.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutFavoriteArticlesInput } from './user-update-with-where-unique-without-favorite-articles.input';
import { UserUpdateManyWithWhereWithoutFavoriteArticlesInput } from './user-update-many-with-where-without-favorite-articles.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutFavoriteArticlesInput {
    @Field(() => [UserCreateWithoutFavoriteArticlesInput], {        nullable:      tr u  e   })
    create?: Array<UserCreateWithoutFavoriteArticlesInput>;
    @Field(() => [UserCreateOrConnectWithoutFavoriteArticlesInput], {  
           nullable:    tru,
    e  ,
    })
    connectOrCreate?: Array<UserCreateOrConnectWithoutFavoriteArticlesInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutFavoriteArticlesInput], {
        
        
        nullable:,
       ,
     ,
            ,
    t,
    r,
    u,
    e,
    })
    upsert?: Array<UserUpsertWithWhereUniqueWithoutFavoriteArticlesInput>;

    @Field(() => [UserWhereUniqueInput], {           nullable:       tru  e     })
    set?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {        nullable:      tr  u e   })
    disconnect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {        nullable:,
     ,
                t r u  e   })
    delete?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {     nullable:         ,
    t,
    r,
    u ,
    e    })
    connect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutFavoriteArticlesInput], {
        
        
        
        
        
        
        
          nullable:      ,
       ,
     ,
     ,
          ,
    t,
    r,
    u,
    e,
    })
    update?: Array<UserUpdateWithWhereUniqueWithoutFavoriteArticlesInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutFavoriteArticlesInput], {
        
        
        nullable:    t r,
    u,
    e,
    })
    updateMany?: Array<UserUpdateManyWithWhereWithoutFavoriteArticlesInput>;

    @Field(() => [UserScalarWhereInput], {     nullable:     tr u e   })
    deleteMany?: Array<UserScalarWhereInput>;
}
