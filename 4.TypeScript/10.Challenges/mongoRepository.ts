export abstract class MongoRepository<T extends AggregateRoot> {
    constructor(private _client: Promise<MongoClient>) { }

    protected client(): Promise<MongoClient> { }

    protected collection(): Promise<Collection> { }


    protected async persist(id: string, aggregateRoot: T): Promise<void> {
        const collection = await this.collection();

        const document = { ...aggregateRoot.toPrimitives(), _id: id, id: undefined };

        await collection.updteOne({ _id: id }, { $set: document }, { upsert: true });
    }
}

