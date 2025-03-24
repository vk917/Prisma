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
const client_1 = require("@prisma/client");
const client = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.user.create({
            data: {
                email: "vki",
                name: "v",
                city: "delhi"
            }
        });
    });
}
function find() {
    return __awaiter(this, void 0, void 0, function* () {
        const u = yield client.user.findFirst({
            where: {
                id: 1
            },
            select: {
                email: true
            }
        });
        console.log(u);
    });
}
function del() {
    return __awaiter(this, void 0, void 0, function* () {
        const u = yield client.user.delete({
            where: {
                id: 2
            },
        });
        console.log(u);
    });
}
del();
