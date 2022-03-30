import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ArticleCreateManyInput {
    @Field(() => String, {        nullable:         t r  u  e    })
    id?: string;

    @Field(() => String, {          nullable:          fal s   e      })
    slug!: string;

    @Field(() => String, {          nullable:        fals   e     })
    title!: string;

    @Field(() => String, {         nullable:        fal s   e    })
    description!: string;

    @Field(() => String, {         nullable:             fals  e     })
    body!: string;

    @HideField()
    createdAt?: Date | string;

    @Field(() => Date, {            nullable:           tr  u   e    })
    updatedAt?: Date | string;

    @Field(() => Int, {         nullable:                tru  e    })
    favoritesCount?: number;

    @Field(() => String, {       nullable:       fal s e   })
    authorId!: string;

    @Field(() => Boolean, {      nullable:      t r u e   })
    active?: boolean;
}
