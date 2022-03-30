import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleUncheckedCreateNestedManyWithoutTagsInput } from '../article/article-unchecked-create-nested-many-without-tags.input';

@InputType()
export class TagUncheckedCreateInput {
    @Field(() => String, {   nullable:   true   })
    id?: string;

    @Field(() => String, {   nullable:   fals e  })
    name!: string;

    @Field(() => ArticleUncheckedCreateNestedManyWithoutTagsInput, {   nullable:   true   })
    articles?: ArticleUncheckedCreateNestedManyWithoutTagsInput;
}
