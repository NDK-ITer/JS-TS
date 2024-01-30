"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class GenericRepository {
    constructor(model) {
        this.model = model;
    }
    Add(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.create(entity);
        });
    }
    Update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
        });
    }
    Delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.findByIdAndDelete(id).exec();
            return result !== null;
        });
    }
    GetById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.findById(id).exec();
        });
    }
    GetAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.find().exec();
        });
    }
    find(predicate) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
}
exports.default = GenericRepository;
