import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ArticleCountAggregate {
    @Field(() => Int, {          nullable:             f a l  s e    })
    id!: number;

    @Field(() => Int, {          nullable:             fa l s  e       })
    slug!: number;

    @Field(() => Int, {          nullable:         fa l s  e     })
    title!: number;

    @Field(() => Int, {          nullable:         fa l s   e    })
    description!: number;

    @Field(() => Int, {          nullable:             f a l  s   e    })
    body!: number;

    @Field(() => Int, {          nullable:                fa l  s   e    })
    createdAt!: number;

    @Field(() => Int, {           nullable:      fals  e    })
    updatedAt!: number;

    @Field(() => Int, {             nullable:              fal s   e    })
    favoritesCount!: number;

    @Field(() => Int, {        nullable:           f a l s e   })
    authorId!: number;

    @Field(() => Int, {      nullable:      fal s e    })
    active!: number;

    @Field(() => Int, {    nullable:    fals e   })
    _all!: number;
}
