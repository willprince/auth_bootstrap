import { Request, Response, ErrorRequestHandler } from "express";
import { User } from "../store/User";

class AuthController {


    async register(req: Request, res: Response) 
    {
        //Validate all inputs
        if( !(req.query && req.query.first_name) ) {
            res.status(400).send('Invalid first_name')
            return
        }
        if( !(req.query && req.query.last_name) ) {
            res.status(400).send('Invalid last_name')
            return
        }
        if( !(req.query && req.query.password) ){
            res.status(400).send('Invalid password')
            return
        }
        if( !(req.query && req.query.role_id) ){
            res.status(400).send('Invalid role_id')
            return
        }

        let first_name  = (req.query as any).first_name
        let last_name   = (req.query as any).last_name
        let password    = (req.query as any).password
        let role_id     = (req.query as any).role_id

        let user = new User()
        user = await user.create(res, first_name, last_name, password, role_id)

        res.send(user);
    }

}

export { AuthController };