## ##############################################################################################################################################################
##                                                                      TODO
## ##############################################################################################################################################################
[X] DATABASE
    [X] MIGRATION
    [X] SEEDING
[X] TYPESCRIPT
[] INPUT VERIF BLUEPRINT
[] ROUTING
    [X] registerUser
    [] update user info
    [] deactivateUser
[] TEST
[] API DOC WITH POSTMAN
[] DOC GENERATOR
[] LOGGING

## ##############################################################################################################################################################
##                                                                      COMMANDS
## ##############################################################################################################################################################

## COMPILE TYPESCRIPT
    npm run tsc

## CREATE TABLE MIGRATION
    npx knex migrate:make create_exemple_table

## CREATE TABLE SEED
    npx knex seed:make 01_users

## SEED TABLES
    npx knex seed:run