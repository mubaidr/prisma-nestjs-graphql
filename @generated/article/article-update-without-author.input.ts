import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { TagUpdateManyWithoutArticlesInput } from '../tag/tag-update-many-without-articles.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { UserUpdateManyWithoutFavoriteArticlesInput } from '../user/user-update-many-without-favorite-articles.input';
import { CommentUpdateManyWithoutArticleInput } from '../comment/comment-update-many-without-article.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';

@InputType()
export class ArticleUpdateWithoutAuthorInput {
    @Field(() => StringFieldUpdateOperationsInput, {        nullable:          t   r    u e      })
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {        nullable:         tr u   e     })
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {          nullable:             t r  u e   })
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {           nullable:            t r  u   e    })
    description?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {        nullable:             t r u   e    })
    body?: StringFieldUpdateOperationsInput;

    @Field(() => TagUpdateManyWithoutArticlesInput, {       nullable:        tr u   e    })
    tags?: TagUpdateManyWithoutArticlesInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {           nullable:                 t r u  e   })
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {        nullable:      tru  e    })
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {     nullable:               t  r   u  e    })
    favoritesCount?: IntFieldUpdateOperationsInput;

    @Field(() => UserUpdateManyWithoutFavoriteArticlesInput, {         nullable:           t r  u  e    })
    favoritedBy?: UserUpdateManyWithoutFavoriteArticlesInput;

    @Field(() => CommentUpdateManyWithoutArticleInput, {       nullable:              tr u e    })
    comments?: CommentUpdateManyWithoutArticleInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {     nullable:     tr u e   })
    active?: NullableBoolFieldUpdateOperationsInput;
}
