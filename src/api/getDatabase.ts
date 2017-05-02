import { GetDatabase } from "../database/index";
import { DatabaseType } from "../database/types";
import { RequestType, ResponseType } from "../core/types";

async function GetFullDatabase(request: RequestType, response: ResponseType) {
  try {
    const database: DatabaseType = await GetDatabase();
    response.json(database);
  } catch (err) {
    response.fail(err);
  }
}

export default GetFullDatabase;
