import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateOneAcademicArgs } from '../../@generated/academic/create-one-academic.args';
import { FindUniqueAcademicArgs } from '../../@generated/academic/find-unique-academic.args';
import { UpdateOneAcademicArgs } from '../../@generated/academic/update-one-academic.args';

const database = new PrismaClient({
    errorFormat: 'colorless',
    log: [
        {
            emit: 'event',
            level: 'query',
        },
    ],
});

@Injectable()
export class AcademicsService {
    async findOne(args: FindUniqueAcademicArgs) {
        const { where } = args;

        const result = await database.academic.findUnique({
            where,
        });

        return result;
    }

    async create(args: CreateOneAcademicArgs) {
        const { data } = args;

        return database.academic.create({
            data: data,
        });
    }

    async update(args: UpdateOneAcademicArgs) {
        const {
            where: { id },
            data,
        } = args;

        return database.academic.updateMany({
            where: {
                id,
            },
            data: data,
        });
    }

    async delete(args: FindUniqueAcademicArgs) {
        const {
            where: { id },
        } = args;

        return database.academic.deleteMany({
            where: {
                id,
            },
        });
    }
}
