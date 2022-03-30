import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { UserUpdateManyWithoutFollowersInput } from './user-update-many-without-followers.input';
import { ArticleUpdateManyWithoutFavoritedByInput } from '../article/article-update-many-without-favorited-by.input';
import { ArticleUpdateManyWithoutAuthorInput } from '../article/article-update-many-without-author.input';
import { CommentUpdateManyWithoutAuthorInput } from '../comment/comment-update-many-without-author.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { NullableEnumRoleFieldUpdateOperationsInput } from '../prisma/nullable-enum-role-field-update-operations.input';
import { ProfileUpdateOneWithoutUserInput } from '../profile/profile-update-one-without-user.input';

@InputType()
export class UserUpdateWithoutFollowersInput {
    @Field(() => StringFieldUpdateOperationsInput, {           nullable:        tr u e    })
    id?: StringFieldUpdateOperationsInput;
    @Field(() => StringFieldUpdateOperationsInput, {          nullable:         tr u  e      })
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {        nullable:       tru e      })
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {         nullable:                 t r  u e   })
    password?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {           nullable:                t r u   e     })
    bio?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {       nullable:       tru   e    })
    image?: NullableStringFieldUpdateOperationsInput;

    @Field(() => UserUpdateManyWithoutFollowersInput, {       nullable:                 t  r  u  e   })
    following?: UserUpdateManyWithoutFollowersInput;

    @Field(() => ArticleUpdateManyWithoutFavoritedByInput, {      nullable:                  t r  u   e    })
    favoriteArticles?: ArticleUpdateManyWithoutFavoritedByInput;

    @Field(() => ArticleUpdateManyWithoutAuthorInput, {          nullable:            t r  u   e    })
    articles?: ArticleUpdateManyWithoutAuthorInput;

    @Field(() => CommentUpdateManyWithoutAuthorInput, {     nullable:               t  r  u  e   })
    comments?: CommentUpdateManyWithoutAuthorInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {          nullable:        tr u   e    })
    countComments?:   NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {            nullable:                   tr u  e    })
    rating?:  NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableEnumRoleFieldUpdateOperationsInput, {       nullable:      tr u e    })
    role?: NullableEnumRoleFieldUpdateOperationsInput;

    @Field(() => ProfileUpdateOneWithoutUserInput, {    nullable:     tr u e   })
    profile?: ProfileUpdateOneWithoutUserInput;
}
