import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class Profile {
    @Field(() => ID, {    nullable:    false    })
    id!: number;

    @Field(() => User, {    nullable:    fals e   })
    user?: User;

    @Field(() => String, {    nullable:    fals e   })
    userId!: string;

    @Field(() => String, {    nullable:   tru e  })
    dummy!: string | null;
}
