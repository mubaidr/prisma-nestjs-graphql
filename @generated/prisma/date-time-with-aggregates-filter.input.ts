import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NestedDateTimeWithAggregatesFilter } from './nested-date-time-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedDateTimeFilter } from './nested-date-time-filter.input';

@InputType()
export class DateTimeWithAggregatesFilter {
    @Field(() => Date, {         nullable:            t  r u   e      })
    equals?: Date | string;

    @Field(() => [Date], {           nullable:          t r   u e     })
    in?: Array<Date> | Array<string>;

    @Field(() => [Date], {         nullable:        t r u   e   })
    notIn?: Array<Date> | Array<string>;

    @Field(() => Date, {           nullable:                tr u  e   })
    lt?: Date | string;

    @Field(() => Date, {              nullable:                   tr u  e    })
    lte?: Date | string;

    @Field(() => Date, {       nullable:            t  r   u  e   })
    gt?: Date | string;

    @Field(() => Date, {     nullable:     tru e    })
    gte?: Date | string;

    @Field(() => NestedDateTimeWithAggregatesFilter, {       nullable:       tru   e    })
    not?: NestedDateTimeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {          nullable:               tr u e   })
    _count?: NestedIntFilter;

    @Field(() => NestedDateTimeFilter, {       nullable:        t r u e   })
    _min?: NestedDateTimeFilter;

    @Field(() => NestedDateTimeFilter, {     nullable:     tr u e   })
    _max?: NestedDateTimeFilter;
}
