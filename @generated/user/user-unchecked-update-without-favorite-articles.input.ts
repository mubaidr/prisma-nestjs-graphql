import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { UserUncheckedUpdateManyWithoutFollowersInput } from './user-unchecked-update-many-without-followers.input';
import { UserUncheckedUpdateManyWithoutFollowingInput } from './user-unchecked-update-many-without-following.input';
import { ArticleUncheckedUpdateManyWithoutAuthorInput } from '../article/article-unchecked-update-many-without-author.input';
import { CommentUncheckedUpdateManyWithoutAuthorInput } from '../comment/comment-unchecked-update-many-without-author.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { NullableEnumRoleFieldUpdateOperationsInput } from '../prisma/nullable-enum-role-field-update-operations.input';
import { ProfileUncheckedUpdateOneWithoutUserInput } from '../profile/profile-unchecked-update-one-without-user.input';

@InputType()
export class UserUncheckedUpdateWithoutFavoriteArticlesInput {
    @Field(() => StringFieldUpdateOperationsInput, {           nullable:        t  r u e    })
    id?: StringFieldUpdateOperationsInput;
    @Field(() => StringFieldUpdateOperationsInput, {           nullable:            t r u  e      })
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {         nullable:        tr u  e     })
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {         nullable:          t  r   u  e   })
    password?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {           nullable:                t r u   e     })
    bio?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {       nullable:       tru   e    })
    image?: NullableStringFieldUpdateOperationsInput;

    @Field(() => UserUncheckedUpdateManyWithoutFollowersInput, {       nullable:             t  r    u e      })
    following?: UserUncheckedUpdateManyWithoutFollowersInput;

    @Field(() => UserUncheckedUpdateManyWithoutFollowingInput, {       nullable:                    t  r u   e    })
    followers?: UserUncheckedUpdateManyWithoutFollowingInput;

    @Field(() => ArticleUncheckedUpdateManyWithoutAuthorInput, {         nullable:       tru   e    })
    articles?: ArticleUncheckedUpdateManyWithoutAuthorInput;

    @Field(() => CommentUncheckedUpdateManyWithoutAuthorInput, {    nullable:                t r  u  e   })
    comments?: CommentUncheckedUpdateManyWithoutAuthorInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {           nullable:         t r u   e    })
    countComments?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {            nullable:                   tr u  e    })
    rating?:   NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableEnumRoleFieldUpdateOperationsInput, {       nullable:      tr u e    })
    role?: NullableEnumRoleFieldUpdateOperationsInput;

    @Field(() => ProfileUncheckedUpdateOneWithoutUserInput, {    nullable:     tr u e   })
    profile?: ProfileUncheckedUpdateOneWithoutUserInput;
}
