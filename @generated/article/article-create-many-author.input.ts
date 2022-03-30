import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ArticleCreateManyAuthorInput {
    @Field(() => String, {        nullable:        t r  u e    })
    id?: string;

    @Field(() => String, {        nullable:        fals  e      })
    slug!: string;

    @Field(() => String, {        nullable:        fal s   e    })
    title!: string;

    @Field(() => String, {         nullable:         fal s   e     })
    description!: string;

    @Field(() => String, {         nullable:           f a l s e   })
    body!: string;

    @HideField()
    createdAt?: Date | string;

    @Field(() => Date, {         nullable:         t r u   e    })
    updatedAt?: Date | string;

    @Field(() => Int, {       nullable:        tr u e    })
    favoritesCount?: number;

    @Field(() => Boolean, {      nullable:      t r u e   })
    active?: boolean;
}
