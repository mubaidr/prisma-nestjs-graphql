import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { TagUncheckedUpdateManyWithoutArticlesInput } from '../tag/tag-unchecked-update-many-without-articles.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { CommentUncheckedUpdateManyWithoutArticleInput } from '../comment/comment-unchecked-update-many-without-article.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';

@InputType()
export class ArticleUncheckedUpdateWithoutFavoritedByInput {
    @Field(() => StringFieldUpdateOperationsInput, {          nullable:           t  r    u e      })
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {           nullable:          t  r u   e      })
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {           nullable:         t r  u  e    })
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {           nullable:            t  r u   e    })
    description?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {         nullable:            t r  u   e    })
    body?: StringFieldUpdateOperationsInput;

    @Field(() => TagUncheckedUpdateManyWithoutArticlesInput, {       nullable:       tru   e    })
    tags?: TagUncheckedUpdateManyWithoutArticlesInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {         nullable:                 t r u  e   })
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {           nullable:            t r  u   e    })
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {        nullable:        tr u   e    })
    favoritesCount?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {        nullable:               t r u  e   })
    authorId?: StringFieldUpdateOperationsInput;

    @Field(() => CommentUncheckedUpdateManyWithoutArticleInput, {       nullable:        tr u e    })
    comments?: CommentUncheckedUpdateManyWithoutArticleInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {     nullable:     tr u e   })
    active?: NullableBoolFieldUpdateOperationsInput;
}
