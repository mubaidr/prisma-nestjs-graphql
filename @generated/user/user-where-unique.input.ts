import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { UserEmailNameCompoundUniqueInput } from './user-email-name-compound-unique.input';

@InputType()
export class UserWhereUniqueInput {
    @Field(() => String, {    nullable:    true    })
    id?: string;

    @Field(() => Scalars.GraphQLEmailAddress, {    nullable:    tru e   })
    email?: string;

    @Field(() => String, {    nullable:    true    })
    @Validator.MinLength(3)
    @Validator.MaxLength(50)
    name?: string;

    @Field(() => UserEmailNameCompoundUniqueInput, {    nullable:    tru e   })
    email_name?: UserEmailNameCompoundUniqueInput;
}
