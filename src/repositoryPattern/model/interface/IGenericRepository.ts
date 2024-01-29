interface IGenericRepository <T>{
    Add(entity: T): Promise<T | null>;
    Update(entity: T): Promise<T | null>;
    Delete(id: string): Promise<boolean>;
    GetById(id: string): Promise<T | null>;
    GetAll(): Promise<T[]>;
    find(predicate: (item: T) => boolean): Promise<T[]>;
    // Hàm tìm kiếm tương tự trong TypeScript
    // find(predicate: (item: MyClass) => boolean): MyClass[] {
    //     return this.data.filter(predicate);
    // }
}

export default IGenericRepository;