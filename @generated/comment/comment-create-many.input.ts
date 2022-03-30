import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CommentCreateManyInput {
    @Field(() => String, {      nullable:      tr u e    })
    id?: string;

    @Field(() => Date, {      nullable:      tru e     })
    createdAt?: Date | string;

    @Field(() => Date, {      nullable:      tru  e    })
    updatedAt?: Date | string;

    @Field(() => String, {      nullable:      fals  e    })
    body!: string;

    @Field(() => String, {      nullable:      fa l s e   })
    authorId!: string;

    @Field(() => String, {      nullable:      t r u e   })
    articleId?: string;
}
