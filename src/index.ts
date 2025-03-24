import { PrismaClient } from "@prisma/client";

const client= new PrismaClient();

async function main() {
    await client.user.create({
        data: {
            email: "vki",
            name : "v",
            city: "delhi"
        }
    })
}

async function find() {
    const u=await client.user.findFirst({
        where: {
            id: 1
        },

        select: {
            email: true
        }
    })

    console.log(u);
    
}



find()
    