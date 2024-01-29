import IGenericRepository from "./IGenericRepository";
import song from "../entities/song";

interface ISongRepository extends IGenericRepository<song> {

}

export default ISongRepository;