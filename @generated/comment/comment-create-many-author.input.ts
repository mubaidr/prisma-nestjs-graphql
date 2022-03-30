import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CommentCreateManyAuthorInput {
    @Field(() => String, {     nullable:     tru e    })
    id?: string;

    @Field(() => Date, {     nullable:     tru e    })
    createdAt?: Date | string;

    @Field(() => Date, {     nullable:     tru e    })
    updatedAt?: Date | string;

    @Field(() => String, {     nullable:    fal s e  })
    body!: string;

    @Field(() => String, {     nullable:     tr u e   })
    articleId?: string;
}
