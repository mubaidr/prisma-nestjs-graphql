import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { TagUncheckedUpdateManyWithoutArticlesInput } from '../tag/tag-unchecked-update-many-without-articles.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { UserUncheckedUpdateManyWithoutFavoriteArticlesInput } from '../user/user-unchecked-update-many-without-favorite-articles.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';

@InputType()
export class ArticleUncheckedUpdateWithoutCommentsInput {
    @Field(() => StringFieldUpdateOperationsInput, {         nullable:            t  r u  e     })
    id?: StringFieldUpdateOperationsInput;
    @Field(() => StringFieldUpdateOperationsInput, {          nullable:         t   r u   e      })
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {          nullable:         t  r   u e   })
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {           nullable:              t r  u   e    })
    description?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {        nullable:                t r  u   e    })
    body?: StringFieldUpdateOperationsInput;

    @Field(() => TagUncheckedUpdateManyWithoutArticlesInput, {       nullable:                t  r u   e    })
    tags?: TagUncheckedUpdateManyWithoutArticlesInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {           nullable:               t r u   e    })
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {          nullable:      tru  e    })
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {        nullable:       t,
    r ,
      u e   ,
    ,
     ,
    })
    favoritesCount?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {          nullable:      ,
                t,
    r,
    u ,
    e   })
    authorId?: StringFieldUpdateOperationsInput;

    @Field(() => UserUncheckedUpdateManyWithoutFavoriteArticlesInput, {
        
        
        nullable:     t  r,
    u,
    e,
    })
    favoritedBy?: UserUncheckedUpdateManyWithoutFavoriteArticlesInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {     nullable:     tr u e   })
    active?: NullableBoolFieldUpdateOperationsInput;
}
