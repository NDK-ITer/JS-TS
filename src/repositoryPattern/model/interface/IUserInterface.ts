import user from "../entities/user";
import IGenericRepository from "./IGenericRepository";

interface IUserRepository extends IGenericRepository<user> {

}

export default IUserRepository;