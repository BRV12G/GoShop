# Installations
1.
2. npm i --save class-validator class-transformer
3. npm i --save @nestjs/config
3. npm i --save nestjs-pino pino-http
4. npm i --save-dev pino-pretty
5. npm i bcrypt && npm i --save-dev @types/bcrypt
5.  npm i --save @nestjs/passport passport passport-local @nestjs/jwt passport-jwt --> auth

#   Prisma setup
1. npm i --save-dev prisma --> installing the prisma CLI
2. npx prisma init
3. npx prisma migrate dev --name users --> create users mingrations
4. npm prisma generate --> to match the types with the db
