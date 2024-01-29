import IGenericRepository from "../../model/interface/IGenericRepository";
import { Model, Document } from 'mongoose';

class GenericRepository<T extends Document> implements IGenericRepository<T>{

    protected model: Model<T>;

    constructor(model: Model<T>){
        this.model = model;
    }

    public async Add(entity: T): Promise<T | null> {
        return this.model.create(entity);
    }
    public async Update(entity: T): Promise<T | null> {
        const song = await this.model.findById(entity.id).updateOne({$set: entity});
        return this.model.findByIdAndUpdate(entity.id, song,{ new: true }).exec();
    }
    public async Delete(id: string): Promise<boolean> {
        const result = await this.model.findByIdAndDelete(id).exec();
        return result !== null;
    }
    public async GetById(id: string): Promise<T | null> {
        return this.model.findById(id).exec();
    }
    public async GetAll(): Promise<T[]> {
        return this.model.find().exec();
    }
    public async find(predicate: (item: T) => boolean): Promise<T[]> {
        throw new Error("Method not implemented.");
    }

}

export default GenericRepository;