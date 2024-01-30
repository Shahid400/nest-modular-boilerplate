import { User, UserSchema } from '../schemas/user.schema';

export const SchemaProviders = [{ name: User.name, schema: UserSchema }];
