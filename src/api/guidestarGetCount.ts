import { GetDatabase } from "../database/index";
import { DatabaseType } from "../database/types";
import { RequestType, ResponseType } from "../core/types";

async function GetCount(request: RequestType, response: ResponseType) {
  try {
    const database: DatabaseType = await GetDatabase();
    let count = 0;

    if (typeof database.guidestar !== "undefined") {
      count = database.guidestar.length;
    }
    response.success(count);
  } catch (err) {
    response.fail(err);
  }
}

export default GetCount;
