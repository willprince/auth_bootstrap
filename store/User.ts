const db = require('../database/db-config.js');
import { Request, Response, ErrorRequestHandler, NextFunction } from "express";

class User
{
    id?:                    number
    username?:              string        
    passwordNeedReset?:     boolean
    token?:                 string
    role_id?:               number
    active?:                boolean

    async create(res:Response, first_name:string, last_name:string, password:string, role_id:number){

        //GENERATE A UNIQUE USERNAME
        let username:string

        let first_letter:string = first_name[0].toLowerCase()
        let last_letter:string  = last_name[0].toLowerCase()
        let initials:string     = first_letter + last_letter

        //FIND THE NUMBER OF USER WITH THE SAME INITIALS
        var query = db('users').where('username', 'like', '%' + initials + '%')
        var result = await query.count();
        var same_initials_count = result[0].count

        username = initials

        if(same_initials_count > 0){
            username = initials + same_initials_count
        }

        var result =  await db('users')
            .insert
            ({ 
                username:           username,
                passwordNeedReset:  this.passwordNeedReset,
                token:              this.token,         
                role_id:            this.role_id,    
                active:             this.active,
                created_at:         new Date().toISOString(),
                updated_at:         new Date().toISOString()             
            })
            .returning('id')

        let id = result[0]

        let user:User = new User()
        user = await this.get(id)

        console.log(user)

        return user
    }

    async get(id: number){

        var query = db('users').where('id', '=', id)
        var result = await query.first();

        let user = new User()
        user.id = result.id
        user.username = result.username
        user.passwordNeedReset = result.passwordNeedReset
        user.role_id = result.role_id
        user.active = result.active

        return user
    }

}

function failureCallback(erreur: string) {
    console.error("L'opération a échoué avec le message : " + erreur);

  }

export { User };