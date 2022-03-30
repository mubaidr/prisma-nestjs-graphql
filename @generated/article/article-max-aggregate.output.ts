import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ArticleMaxAggregate {
    @Field(() => String, {         nullable:              t r  u e    })
    id?: string;

    @Field(() => String, {           nullable:             t r u  e     })
    slug?: string;

    @Field(() => String, {           nullable:              t  r u   e    })
    title?: string;

    @Field(() => String, {          nullable:              t r  u   e    })
    description?: string;

    @Field(() => String, {         nullable:          t r  u   e    })
    body?: string;

    @Field(() => Date, {             nullable:              t r  u   e    })
    createdAt?: Date | string;

    @Field(() => Date, {          nullable:       tr u  e    })
    updatedAt?: Date | string;

    @Field(() => Int, {        nullable:          tr u e    })
    favoritesCount?: number;

    @Field(() => String, {      nullable:       tr u e   })
    authorId?: string;

    @Field(() => Boolean, {      nullable:      t r u e   })
    active?: boolean;
}
