import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { TagUpdateManyWithoutArticlesInput } from '../tag/tag-update-many-without-articles.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { UserUpdateOneRequiredWithoutArticlesInput } from '../user/user-update-one-required-without-articles.input';
import { UserUpdateManyWithoutFavoriteArticlesInput } from '../user/user-update-many-without-favorite-articles.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';

@InputType()
export class ArticleUpdateWithoutCommentsInput {
    @Field(() => StringFieldUpdateOperationsInput, {        nullable:           t  r    u e      })
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {        nullable:        tr u   e      })
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {        nullable:          t  r  u  e    })
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {           nullable:            t r  u   e    })
    description?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {        nullable:              t  r u   e    })
    body?: StringFieldUpdateOperationsInput;

    @Field(() => TagUpdateManyWithoutArticlesInput, {       nullable:                t  r u   e    })
    tags?: TagUpdateManyWithoutArticlesInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {           nullable:                t r  u   e    })
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {         nullable:     tru e    })
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {     nullable:            t   r u e     })
    favoritesCount?: IntFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutArticlesInput, {           nullable:                  tr   u  e   })
    author?: UserUpdateOneRequiredWithoutArticlesInput;

    @Field(() => UserUpdateManyWithoutFavoriteArticlesInput, {        nullable:          tr u e    })
    favoritedBy?: UserUpdateManyWithoutFavoriteArticlesInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {     nullable:     tr u e   })
    active?: NullableBoolFieldUpdateOperationsInput;
}
